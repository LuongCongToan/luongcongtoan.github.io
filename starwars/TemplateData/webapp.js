// Applaydu WebApp page shell: loading bar, fullscreen + orientation lock, rotate-your-device overlay.
// The game starts as soon as it has loaded; there's no tap-to-play screen.
// Shared by all Applaydu templates; the game's orientation comes from <html data-orientation="landscape|portrait">.
// Unity talks to it through window.ApplayduWebApp (see Runtime/Platform/WebScreen.jslib in the package).
//
// Browser limits this works around:
// - Fullscreen and audio need a user gesture, so mobile goes fullscreen on the first tap (and again after the player leaves it),
//   and audio stays muted by the browser until then.
// - screen.orientation.lock only works in fullscreen, and only on Android browsers.
// - iPhone Safari has neither, so there the canvas fills the screen and a rotate overlay shows in the wrong orientation.
//   Its toolbars only collapse when the page scrolls, so in landscape the page becomes scrollable and a swipe-up overlay
//   covers the game until the player has swiped them away.
(function () {
  "use strict";

  // Bump when the API below or the state flags change in a way WebScreen.cs must know about.
  // Games own their installed copy, so the editor warns when theirs is older than the package's.
  var TEMPLATE_VERSION = 4;

  // Render resolution cap: 3x phones cost a lot of GPU and memory for little visible gain
  var MAX_DEVICE_PIXEL_RATIO = 2;

  // Browser toolbars count as visible when the page is shorter than this share of the screen's short side
  var TOOLBAR_HEIGHT_RATIO = 0.95;

  // Must match WebScreen.cs
  var STATE_FULLSCREEN = 1;
  var STATE_LANDSCAPE = 2;
  var STATE_ROTATE_BLOCKED = 4;
  var STATE_MOBILE = 8;
  var STATE_FULLSCREEN_SUPPORTED = 16;
  var STATE_STARTED = 32;
  var STATE_PORTRAIT_GAME = 64;

  var isPortraitGame = document.documentElement.getAttribute("data-orientation") === "portrait";

  // app-shell is what goes fullscreen; its child app-root holds the game (a centered column for portrait games on desktop)
  var shell = document.getElementById("app-shell");
  var canvas = document.getElementById("unity-canvas");
  var loading = document.getElementById("app-loading");
  var progressFill = document.getElementById("app-progress-fill");
  var rotate = document.getElementById("app-rotate");
  var fullscreenButton = document.getElementById("app-fullscreen-button");
  var error = document.getElementById("app-error");
  var swipe = document.getElementById("app-swipe");

  // iPadOS reports itself as a Mac, so also check for touch
  var isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var fullscreenSupported = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
  var landscapeQuery = window.matchMedia("(orientation: landscape)");
  var isStandalone = navigator.standalone === true ||
    window.matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches;
  // Mobile browsers without the Fullscreen API (iPhone) can only hide their toolbars by scrolling the page
  var swipeToHideToolbars = !!swipe && isMobile && !fullscreenSupported && !isStandalone;

  var started = false;
  var fullscreenPending = false;
  var lastFullscreenRequest = 0;
  var lastState = -1;
  var swipeShown = false;
  var listeners = [];

  function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }

  function isRotateBlocked() {
    return isMobile && landscapeQuery.matches === isPortraitGame;
  }

  // Only landscape: in portrait Safari keeps a compact address bar however far the page scrolls
  function isSwipeNeeded() {
    if (!swipeToHideToolbars || !landscapeQuery.matches || isRotateBlocked())
      return false;
    var shortSide = Math.min(screen.width, screen.height);
    return window.innerHeight < shortSide * TOOLBAR_HEIGHT_RATIO;
  }

  function updateSwipe() {
    var needed = isSwipeNeeded();
    if (needed === swipeShown)
      return;
    swipeShown = needed;
    swipe.classList.toggle("app-hidden", !needed);
    // Back at the top there's a full screen of page left to scroll, even if the player had scrolled to the bottom before
    if (needed)
      window.scrollTo(0, 0);
  }

  function getState() {
    return (isFullscreen() ? STATE_FULLSCREEN : 0) |
      (landscapeQuery.matches ? STATE_LANDSCAPE : 0) |
      (isRotateBlocked() ? STATE_ROTATE_BLOCKED : 0) |
      (isMobile ? STATE_MOBILE : 0) |
      (fullscreenSupported ? STATE_FULLSCREEN_SUPPORTED : 0) |
      (started ? STATE_STARTED : 0) |
      (isPortraitGame ? STATE_PORTRAIT_GAME : 0);
  }

  function update() {
    rotate.classList.toggle("app-hidden", !isRotateBlocked());
    if (swipeToHideToolbars)
      updateSwipe();
    fullscreenButton.classList.toggle("app-hidden", isMobile || !fullscreenSupported || !api.instance || isFullscreen());

    var state = getState();
    if (state === lastState)
      return;
    lastState = state;
    for (var i = 0; i < listeners.length; i++)
      listeners[i](state);
  }

  function lockOrientation() {
    if (screen.orientation && screen.orientation.lock)
      screen.orientation.lock(isPortraitGame ? "portrait" : "landscape").catch(function () {});
  }

  // Only works while handling a user gesture
  function requestFullscreen() {
    if (!fullscreenSupported || isFullscreen())
      return;

    // pointerup and touchend both fire for one tap; request once
    var now = Date.now();
    if (now - lastFullscreenRequest < 500)
      return;
    lastFullscreenRequest = now;

    try {
      var result = shell.requestFullscreen ? shell.requestFullscreen({ navigationUI: "hide" }) : shell.webkitRequestFullscreen();
      if (result && result.catch)
        result.catch(function () {});
    } catch (e) {
      // Not allowed right now (e.g. no user gesture); the next tap retries
    }
  }

  function exitFullscreen() {
    if (!isFullscreen())
      return;
    var result = document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen();
    if (result && result.catch)
      result.catch(function () {});
  }

  function onUserGesture() {
    if (!started) {
      started = true;
      update();
    }
    if (fullscreenPending || isMobile) {
      fullscreenPending = false;
      requestFullscreen();
    }
  }

  function onFullscreenChange() {
    if (isFullscreen() && isMobile)
      lockOrientation();
    update();
  }

  function showError(message) {
    error.textContent = String(message);
    error.classList.remove("app-hidden");
    loading.classList.add("app-hidden");
  }

  // Unity reports warnings (e.g. missing compression headers) and errors here
  function showBanner(message, type) {
    if (type === "error")
      showError(message);
    else
      console.warn(message);
  }

  function boot(loaderUrl, config) {
    config.devicePixelRatio = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);
    config.showBanner = showBanner;

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = function () {
      createUnityInstance(canvas, config, function (progress) {
        progressFill.style.width = 100 * progress + "%";
      }).then(function (instance) {
        api.instance = instance;
        loading.classList.add("app-hidden");
        canvas.focus();
        update();
      }).catch(showError);
    };
    script.onerror = function () {
      showError("Failed to load " + loaderUrl);
    };
    document.body.appendChild(script);
  }

  // Capture phase, so it runs even if Unity stops the event on the canvas
  window.addEventListener("pointerup", onUserGesture, true);
  window.addEventListener("touchend", onUserGesture, true);
  window.addEventListener("keyup", onUserGesture, true);

  document.addEventListener("fullscreenchange", onFullscreenChange);
  document.addEventListener("webkitfullscreenchange", onFullscreenChange);
  window.addEventListener("resize", update);
  // Toolbars collapsing during a scroll don't always fire a window resize right away
  if (window.visualViewport)
    window.visualViewport.addEventListener("resize", update);
  if (swipeToHideToolbars)
    window.addEventListener("scroll", update, { passive: true });
  if (landscapeQuery.addEventListener)
    landscapeQuery.addEventListener("change", update);
  else
    landscapeQuery.addListener(update);

  fullscreenButton.addEventListener("click", function (event) {
    event.stopPropagation();
    requestFullscreen();
  });

  shell.classList.toggle("app-mobile", isMobile);
  document.documentElement.classList.toggle("app-swipe-mode", swipeToHideToolbars);

  // No context menu on long-press / right click over the game
  shell.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  var api = {
    version: TEMPLATE_VERSION,
    instance: null,
    boot: boot,
    getState: getState,
    exitFullscreen: exitFullscreen,
    // Called from Unity outside a user gesture, so it runs on the next tap, click or key press
    requestFullscreenOnNextGesture: function () {
      fullscreenPending = true;
    },
    onChange: function (listener) {
      listeners.push(listener);
    },
  };
  window.ApplayduWebApp = api;

  update();
})();
