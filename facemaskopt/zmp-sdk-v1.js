// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3way1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bb7d832e87e97a78";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"l3OqJ":[function(require,module,exports) {
var _apis = require("zmp-sdk/apis");
window.checkCameraPermission = function _checkCameraPermission() {
    (0, _apis.checkZaloCameraPermission)({
        success: ({ userAllow })=>{
            if (userAllow) // được phép sử dụng camera
            UnityInstance.SendMessage("ZaloCameraPermission", "OnCameraPermissionGranted");
        },
        fail: (err)=>{
            // xử lý khi gọi api thất bại
            UnityInstance.SendMessage("ZaloCameraPermission", "OnCameraPermissionDenied");
            console.log(err);
        }
    });
};
window.requestZaloCameraPermission = function _requestCameraPermission() {
    requestCameraPermission({
        success: ({ userAllow, message })=>{
            if (userAllow) console.log("camera permission granted");
        },
        fail: (err)=>{
            console.log(err);
        }
    });
};
window.getAppInfo = function getZaloApplication() {
    console.log("getZaloApplication ===========");
    (0, _apis.getAppInfo)({
        success: (data)=>{
            // xử lý khi gọi api thành công
            const { name, version } = data;
        },
        fail: (error)=>{
            // xử lý khi gọi api thất bại
            console.log(error);
        }
    });
};

},{"zmp-sdk/apis":"7TMXe"}],"7TMXe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "login", ()=>(0, _loginJs.login));
parcelHelpers.export(exports, "EventName", ()=>(0, _enumJs.Events));
parcelHelpers.export(exports, "Events", ()=>(0, _enumJs.Events));
parcelHelpers.export(exports, "getAccessToken", ()=>(0, _getAccessTokenJs.getAccessToken));
parcelHelpers.export(exports, "getVersion", ()=>(0, _getVersionJs.getVersion));
parcelHelpers.export(exports, "getSystemInfo", ()=>(0, _getSystemInfoJs.getSystemInfo));
parcelHelpers.export(exports, "setNavigationBarTitle", ()=>(0, _setNavigationBarTitleJs.setNavigationBarTitle));
parcelHelpers.export(exports, "setNavigationBarColor", ()=>(0, _setNavigationBarColorJs.setNavigationBarColor));
parcelHelpers.export(exports, "setNavigationBarLeftButton", ()=>(0, _setNavigationBarLeftButtonJs.setNavigationBarLeftButton));
parcelHelpers.export(exports, "setStorage", ()=>(0, _setStorageJs.setStorage));
parcelHelpers.export(exports, "getStorage", ()=>(0, _getStorageJs.getStorage));
parcelHelpers.export(exports, "getStorageInfo", ()=>(0, _getStorageInfoJs.getStorageInfo));
parcelHelpers.export(exports, "removeStorage", ()=>(0, _removeStorageJs.removeStorage));
parcelHelpers.export(exports, "clearStorage", ()=>(0, _clearStorageJs.clearStorage));
parcelHelpers.export(exports, "getUserInfo", ()=>(0, _getUserInfoJs.getUserInfo));
parcelHelpers.export(exports, "getNetworkType", ()=>(0, _getNetworkTypeJs.getNetworkType));
parcelHelpers.export(exports, "onNetworkStatusChange", ()=>(0, _onNetworkStatusChangeJs.onNetworkStatusChange));
parcelHelpers.export(exports, "startBeaconDiscovery", ()=>(0, _startBeaconDiscoveryJs.startBeaconDiscovery));
parcelHelpers.export(exports, "stopBeaconDiscovery", ()=>(0, _stopBeaconDiscoveryJs.stopBeaconDiscovery));
parcelHelpers.export(exports, "getBeacons", ()=>(0, _getBeaconsJs.getBeacons));
parcelHelpers.export(exports, "closeApp", ()=>(0, _closeAppJs.closeApp));
parcelHelpers.export(exports, "scanQRCode", ()=>(0, _scanQRCodeJs.scanQRCode));
parcelHelpers.export(exports, "openProfile", ()=>(0, _openProfileJs.openProfile));
parcelHelpers.export(exports, "openChat", ()=>(0, _openChatJs.openChat));
parcelHelpers.export(exports, "openPostFeed", ()=>(0, _openPostFeedJs.openPostFeed));
parcelHelpers.export(exports, "followOA", ()=>(0, _followOAJs.followOA));
parcelHelpers.export(exports, "unfollowOA", ()=>(0, _unfollowOAJs.unfollowOA));
parcelHelpers.export(exports, "openShareSheet", ()=>(0, _openShareSheetJs.openShareSheet));
parcelHelpers.export(exports, "requestCameraPermission", ()=>(0, _requestCameraPermissionJs.requestCameraPermission));
parcelHelpers.export(exports, "createShortcut", ()=>(0, _createShortcutJs.createShortcut));
parcelHelpers.export(exports, "openBioAuthentication", ()=>(0, _openBioAuthenticationJs.openBioAuthentication));
parcelHelpers.export(exports, "checkStateBioAuthentication", ()=>(0, _checkStateBioAuthenticationJs.checkStateBioAuthentication));
parcelHelpers.export(exports, "showToast", ()=>(0, _showToastJs.showToast));
parcelHelpers.export(exports, "hideKeyboard", ()=>(0, _hideKeyboardJs.hideKeyboard));
parcelHelpers.export(exports, "openPhone", ()=>(0, _openPhoneJs.openPhone));
parcelHelpers.export(exports, "openSMS", ()=>(0, _openSMSJs.openSMS));
parcelHelpers.export(exports, "viewOAQr", ()=>(0, _viewOAQrJs.viewOAQr));
parcelHelpers.export(exports, "keepScreen", ()=>(0, _keepScreenJs.keepScreen));
parcelHelpers.export(exports, "onKeepScreen", ()=>(0, _onKeepScreenJs.onKeepScreen));
parcelHelpers.export(exports, "offKeepScreen", ()=>(0, _offKeepScreenJs.offKeepScreen));
parcelHelpers.export(exports, "saveImageToGallery", ()=>(0, _saveImageToGalleryJs.saveImageToGallery));
parcelHelpers.export(exports, "openMiniApp", ()=>(0, _openMiniAppJs.openMiniApp));
parcelHelpers.export(exports, "vibrate", ()=>(0, _vibrateJs.vibrate));
parcelHelpers.export(exports, "openWebview", ()=>(0, _openWebviewJs.openWebview));
parcelHelpers.export(exports, "getRouteParams", ()=>(0, _getRouteParamsJs.getRouteParams));
parcelHelpers.export(exports, "getAppInfo", ()=>(0, _getAppInfoJs.getAppInfo));
parcelHelpers.export(exports, "sendDataToPreviousMiniApp", ()=>(0, _sendDataToPreviousMiniAppJs.sendDataToPreviousMiniApp));
parcelHelpers.export(exports, "getPhoneNumber", ()=>(0, _getPhoneNumberJs.getPhoneNumber));
parcelHelpers.export(exports, "openProfilePicker", ()=>(0, _openProfilePickerJs.openProfilePicker));
parcelHelpers.export(exports, "connectWifi", ()=>(0, _connectWifiJs.connectWifi));
parcelHelpers.export(exports, "openMediaPicker", ()=>(0, _openMediaPickerJs.openMediaPicker));
parcelHelpers.export(exports, "getShareableLink", ()=>(0, _getShareableLinkJs.getShareableLink));
parcelHelpers.export(exports, "closeLoading", ()=>(0, _closeLoadingJs.closeLoading));
parcelHelpers.export(exports, "requestUpdateZalo", ()=>(0, _requestUpdateZaloJs.requestUpdateZalo));
parcelHelpers.export(exports, "onConfirmToExit", ()=>(0, _onConfirmToExitJs.onConfirmToExit));
parcelHelpers.export(exports, "offConfirmToExit", ()=>(0, _offConfirmToExitJs.offConfirmToExit));
parcelHelpers.export(exports, "getDeviceId", ()=>(0, _getDeviceIdJs.getDeviceId));
parcelHelpers.export(exports, "getDeviceIdAsync", ()=>(0, _getDeviceIdAsyncJs.getDeviceIdAsync));
parcelHelpers.export(exports, "getContext", ()=>(0, _getContextJs.getContext));
parcelHelpers.export(exports, "getContextAsync", ()=>(0, _getContextAsyncJs.getContextAsync));
parcelHelpers.export(exports, "getAuthCode", ()=>(0, _getAuthCodeJs.getAuthCode));
parcelHelpers.export(exports, "getZPIToken", ()=>(0, _getZPITokenJs.getZPIToken));
parcelHelpers.export(exports, "setAccessToken", ()=>(0, _setAccessTokenJs.setAccessToken));
parcelHelpers.export(exports, "openOutApp", ()=>(0, _openOutAppJs.openOutApp));
parcelHelpers.export(exports, "chooseImage", ()=>(0, _chooseImageJs.chooseImage));
parcelHelpers.export(exports, "getLocation", ()=>(0, _getLocationJs.getLocation));
parcelHelpers.export(exports, "onCallbackData", ()=>(0, _onCallbackDataJs.onCallbackData));
parcelHelpers.export(exports, "createOrder", ()=>(0, _createOrderJs.createOrder));
parcelHelpers.export(exports, "checkTransaction", ()=>(0, _checkTransactionJs.checkTransaction));
parcelHelpers.export(exports, "events", ()=>(0, _eventsJs.events));
parcelHelpers.export(exports, "setAndroidBottomNavigationBar", ()=>(0, _setAndroidBottomNavigationBarJs.setAndroidBottomNavigationBar));
parcelHelpers.export(exports, "setIOSBottomSafeArea", ()=>(0, _setIOSBottomSafeAreaJs.setIOSBottomSafeArea));
parcelHelpers.export(exports, "setStatusBar", ()=>(0, _setStatusBarJs.setStatusBar));
parcelHelpers.export(exports, "configAppView", ()=>(0, _configAppViewJs.configAppView));
parcelHelpers.export(exports, "createOrderIAP", ()=>(0, _createOrderIAPJs.createOrderIAP));
parcelHelpers.export(exports, "minimizeApp", ()=>(0, _minimizeAppJs.minimizeApp));
parcelHelpers.export(exports, "openPermissionSetting", ()=>(0, _openPermissionSettingJs.openPermissionSetting));
parcelHelpers.export(exports, "favoriteApp", ()=>(0, _favoriteAppJs.favoriteApp));
parcelHelpers.export(exports, "openGroupList", ()=>(0, _openGroupListJs.openGroupList));
parcelHelpers.export(exports, "requestSendNotification", ()=>(0, _requestSendNotificationJs.requestSendNotification));
parcelHelpers.export(exports, "addRating", ()=>(0, _addRatingJs.addRating));
parcelHelpers.export(exports, "interactOA", ()=>(0, _interactOAJs.interactOA));
parcelHelpers.export(exports, "interactOa", ()=>(0, _interactOAJs.interactOA));
parcelHelpers.export(exports, "isAllowedInteractWithOA", ()=>(0, _checkIsAllowedInteractWithOAJs.checkIsAllowedInteractWithOA));
parcelHelpers.export(exports, "getSetting", ()=>(0, _getSettingJs.getSetting));
parcelHelpers.export(exports, "authorize", ()=>(0, _authorizeJs.authorize));
parcelHelpers.export(exports, "checkZaloCameraPermission", ()=>(0, _checkZaloCameraPermissionJs.checkZaloCameraPermission));
parcelHelpers.export(exports, "getUserID", ()=>(0, _getUserIDJs.getUserID));
var _loginJs = require("./apis/login.js");
var _enumJs = require("./types/enum.js");
var _getAccessTokenJs = require("./apis/getAccessToken.js");
var _getVersionJs = require("./apis/getVersion.js");
var _getSystemInfoJs = require("./apis/getSystemInfo.js");
var _setNavigationBarTitleJs = require("./apis/setNavigationBarTitle.js");
var _setNavigationBarColorJs = require("./apis/setNavigationBarColor.js");
var _setNavigationBarLeftButtonJs = require("./apis/setNavigationBarLeftButton.js");
var _setStorageJs = require("./apis/setStorage.js");
var _getStorageJs = require("./apis/getStorage.js");
var _getStorageInfoJs = require("./apis/getStorageInfo.js");
var _removeStorageJs = require("./apis/removeStorage.js");
var _clearStorageJs = require("./apis/clearStorage.js");
var _getUserInfoJs = require("./apis/getUserInfo.js");
var _getNetworkTypeJs = require("./apis/getNetworkType.js");
var _onNetworkStatusChangeJs = require("./apis/onNetworkStatusChange.js");
var _startBeaconDiscoveryJs = require("./apis/startBeaconDiscovery.js");
var _stopBeaconDiscoveryJs = require("./apis/stopBeaconDiscovery.js");
var _getBeaconsJs = require("./apis/getBeacons.js");
var _closeAppJs = require("./apis/closeApp.js");
var _scanQRCodeJs = require("./apis/scanQRCode.js");
var _openProfileJs = require("./apis/openProfile.js");
var _openChatJs = require("./apis/openChat.js");
var _openPostFeedJs = require("./apis/openPostFeed.js");
var _followOAJs = require("./apis/followOA.js");
var _unfollowOAJs = require("./apis/unfollowOA.js");
var _openShareSheetJs = require("./apis/openShareSheet.js");
var _requestCameraPermissionJs = require("./apis/requestCameraPermission.js");
var _createShortcutJs = require("./apis/createShortcut.js");
var _openBioAuthenticationJs = require("./apis/openBioAuthentication.js");
var _checkStateBioAuthenticationJs = require("./apis/checkStateBioAuthentication.js");
var _showToastJs = require("./apis/showToast.js");
var _hideKeyboardJs = require("./apis/hideKeyboard.js");
var _openPhoneJs = require("./apis/openPhone.js");
var _openSMSJs = require("./apis/openSMS.js");
var _viewOAQrJs = require("./apis/viewOAQr.js");
var _keepScreenJs = require("./apis/keepScreen.js");
var _onKeepScreenJs = require("./apis/onKeepScreen.js");
var _offKeepScreenJs = require("./apis/offKeepScreen.js");
var _saveImageToGalleryJs = require("./apis/saveImageToGallery.js");
var _openMiniAppJs = require("./apis/openMiniApp.js");
var _vibrateJs = require("./apis/vibrate.js");
var _openWebviewJs = require("./apis/openWebview.js");
var _getRouteParamsJs = require("./apis/getRouteParams.js");
var _getAppInfoJs = require("./apis/getAppInfo.js");
var _sendDataToPreviousMiniAppJs = require("./apis/sendDataToPreviousMiniApp.js");
var _getPhoneNumberJs = require("./apis/getPhoneNumber.js");
var _openProfilePickerJs = require("./apis/openProfilePicker.js");
var _connectWifiJs = require("./apis/connectWifi.js");
var _openMediaPickerJs = require("./apis/openMediaPicker.js");
var _getShareableLinkJs = require("./apis/getShareableLink.js");
var _closeLoadingJs = require("./apis/closeLoading.js");
var _requestUpdateZaloJs = require("./apis/requestUpdateZalo.js");
var _onConfirmToExitJs = require("./apis/onConfirmToExit.js");
var _offConfirmToExitJs = require("./apis/offConfirmToExit.js");
var _getDeviceIdJs = require("./apis/getDeviceId.js");
var _getDeviceIdAsyncJs = require("./apis/getDeviceIdAsync.js");
var _getContextJs = require("./apis/getContext.js");
var _getContextAsyncJs = require("./apis/getContextAsync.js");
var _getAuthCodeJs = require("./apis/getAuthCode.js");
var _getZPITokenJs = require("./apis/getZPIToken.js");
var _setAccessTokenJs = require("./apis/setAccessToken.js");
var _openOutAppJs = require("./apis/openOutApp.js");
var _chooseImageJs = require("./apis/chooseImage.js");
var _getLocationJs = require("./apis/getLocation.js");
var _onCallbackDataJs = require("./apis/onCallbackData.js");
var _createOrderJs = require("./apis/createOrder.js");
var _checkTransactionJs = require("./apis/checkTransaction.js");
var _eventsJs = require("./apis/events.js");
var _setAndroidBottomNavigationBarJs = require("./apis/setAndroidBottomNavigationBar.js");
var _setIOSBottomSafeAreaJs = require("./apis/setIOSBottomSafeArea.js");
var _setStatusBarJs = require("./apis/setStatusBar.js");
var _configAppViewJs = require("./apis/configAppView.js");
var _createOrderIAPJs = require("./apis/createOrderIAP.js");
var _minimizeAppJs = require("./apis/minimizeApp.js");
var _openPermissionSettingJs = require("./apis/openPermissionSetting.js");
var _favoriteAppJs = require("./apis/favoriteApp.js");
var _openGroupListJs = require("./apis/openGroupList.js");
var _requestSendNotificationJs = require("./apis/requestSendNotification.js");
var _addRatingJs = require("./apis/addRating.js");
var _interactOAJs = require("./apis/interactOA.js");
var _checkIsAllowedInteractWithOAJs = require("./apis/checkIsAllowedInteractWithOA.js");
var _getSettingJs = require("./apis/getSetting.js");
var _authorizeJs = require("./apis/authorize.js");
var _checkZaloCameraPermissionJs = require("./apis/checkZaloCameraPermission.js");
var _getUserIDJs = require("./apis/getUserID.js");
(0, _loginJs.login)();

},{"./apis/login.js":"4LaVI","./types/enum.js":false,"./apis/getAccessToken.js":false,"./apis/getVersion.js":false,"./apis/getSystemInfo.js":false,"./apis/setNavigationBarTitle.js":false,"./apis/setNavigationBarColor.js":false,"./apis/setNavigationBarLeftButton.js":false,"./apis/setStorage.js":false,"./apis/getStorage.js":false,"./apis/getStorageInfo.js":false,"./apis/removeStorage.js":false,"./apis/clearStorage.js":false,"./apis/getUserInfo.js":false,"./apis/getNetworkType.js":false,"./apis/onNetworkStatusChange.js":false,"./apis/startBeaconDiscovery.js":false,"./apis/stopBeaconDiscovery.js":false,"./apis/getBeacons.js":false,"./apis/closeApp.js":false,"./apis/scanQRCode.js":false,"./apis/openProfile.js":false,"./apis/openChat.js":false,"./apis/openPostFeed.js":false,"./apis/followOA.js":false,"./apis/unfollowOA.js":false,"./apis/openShareSheet.js":false,"./apis/requestCameraPermission.js":false,"./apis/createShortcut.js":false,"./apis/openBioAuthentication.js":false,"./apis/checkStateBioAuthentication.js":false,"./apis/showToast.js":false,"./apis/hideKeyboard.js":false,"./apis/openPhone.js":false,"./apis/openSMS.js":false,"./apis/viewOAQr.js":false,"./apis/keepScreen.js":false,"./apis/onKeepScreen.js":false,"./apis/offKeepScreen.js":false,"./apis/saveImageToGallery.js":false,"./apis/openMiniApp.js":false,"./apis/vibrate.js":false,"./apis/openWebview.js":false,"./apis/getRouteParams.js":false,"./apis/getAppInfo.js":"fmZ1f","./apis/sendDataToPreviousMiniApp.js":false,"./apis/getPhoneNumber.js":false,"./apis/openProfilePicker.js":false,"./apis/connectWifi.js":false,"./apis/openMediaPicker.js":false,"./apis/getShareableLink.js":false,"./apis/closeLoading.js":false,"./apis/requestUpdateZalo.js":false,"./apis/onConfirmToExit.js":false,"./apis/offConfirmToExit.js":false,"./apis/getDeviceId.js":false,"./apis/getDeviceIdAsync.js":false,"./apis/getContext.js":false,"./apis/getContextAsync.js":false,"./apis/getAuthCode.js":false,"./apis/getZPIToken.js":false,"./apis/setAccessToken.js":false,"./apis/openOutApp.js":false,"./apis/chooseImage.js":false,"./apis/getLocation.js":false,"./apis/onCallbackData.js":false,"./apis/createOrder.js":false,"./apis/checkTransaction.js":false,"./apis/events.js":false,"./apis/setAndroidBottomNavigationBar.js":false,"./apis/setIOSBottomSafeArea.js":false,"./apis/setStatusBar.js":false,"./apis/configAppView.js":false,"./apis/createOrderIAP.js":false,"./apis/minimizeApp.js":false,"./apis/openPermissionSetting.js":false,"./apis/favoriteApp.js":false,"./apis/openGroupList.js":false,"./apis/requestSendNotification.js":false,"./apis/addRating.js":false,"./apis/interactOA.js":false,"./apis/checkIsAllowedInteractWithOA.js":false,"./apis/getSetting.js":false,"./apis/authorize.js":false,"./apis/checkZaloCameraPermission.js":"8v5NK","./apis/getUserID.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4LaVI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "login", ()=>m);
var _asyncToGeneratorMjsJs = require("./../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _indexJs = require("../appEnv/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _notFoundJs = require("../common/notFound.js");
var _notFoundJsDefault = parcelHelpers.interopDefault(_notFoundJs);
var _decoratorJs = require("../utils/decorator.js");
var _tokenJs = require("../common/token.js");
var _tokenJsDefault = parcelHelpers.interopDefault(_tokenJs);
var _constantsJs = require("../constants.js");
var _tslibEs6Js = require("./../external/tslib/tslib.es6.js");
function m(o) {
    return c.apply(this, arguments);
}
function c() {
    return (c = (0, _asyncToGeneratorMjsJsDefault.default)(function(m) {
        return (0, _tslibEs6Js.__generator)(this, function(c) {
            return [
                2,
                (0, _decoratorJs.functionHandler)("login", [], [
                    m
                ], (0, _asyncToGeneratorMjsJsDefault.default)(function() {
                    return (0, _tslibEs6Js.__generator)(this, function(o) {
                        switch(o.label){
                            case 0:
                                return (0, _indexJsDefault.default).isMp ? [
                                    4,
                                    (0, _tokenJsDefault.default).jumpAndGetToken((0, _constantsJs.COOKIE_NAME).ZOAUTH)
                                ] : [
                                    3,
                                    2
                                ];
                            case 1:
                                return o.sent(), [
                                    2,
                                    "Success"
                                ];
                            case 2:
                                return (0, _indexJsDefault.default).isMpWeb ? [
                                    2,
                                    Promise.resolve("")
                                ] : [
                                    2,
                                    Promise.reject((0, _notFoundJsDefault.default)("login", {}))
                                ];
                        }
                    });
                }))
            ];
        });
    })).apply(this, arguments);
}

},{"./../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","../appEnv/index.js":"gwpxL","../common/notFound.js":"dqwdY","../utils/decorator.js":"6mOw4","../common/token.js":"4rqJX","../constants.js":"fNy4G","./../external/tslib/tslib.es6.js":"f0cFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lkTC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>t);
function n(n, t, r, e, o, i, u) {
    try {
        var a = n[i](u), c = a.value;
    } catch (n) {
        return void r(n);
    }
    a.done ? t(c) : Promise.resolve(c).then(e, o);
}
function t(t) {
    return function() {
        var r = this, e = arguments;
        return new Promise(function(o, i) {
            var u = t.apply(r, e);
            function a(t) {
                n(u, o, i, a, c, "next", t);
            }
            function c(t) {
                n(u, o, i, a, c, "throw", t);
            }
            a(void 0);
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gwpxL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEnv", ()=>(0, _getEnvJsDefault.default));
parcelHelpers.export(exports, "default", ()=>o);
var _getEnvJs = require("./getEnv.js");
var _getEnvJsDefault = parcelHelpers.interopDefault(_getEnvJs);
var e, o = (null === (e = (0, _getEnvJsDefault.default)()) || void 0 === e ? void 0 : e.appEnv) || {};

},{"./getEnv.js":"4G0wJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4G0wJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>s);
var _constantsJs = require("../constants.js");
var _silentJs = require("../utils/silent.js");
var _silentJsDefault = parcelHelpers.interopDefault(_silentJs);
var _enumJs = require("../types/enum.js");
var e = function(i) {
    return i.isAndroid ? (0, _enumJs.PlatformType).android : i.isIOS ? (0, _enumJs.PlatformType).iOS : (0, _enumJs.PlatformType).unknown;
};
function r(i) {
    var o = i.split("zalo")[1];
    return o && o.replace(" ", "").split("/")[1] || "";
}
function s() {
    var n = function() {
        var n = (0, _silentJsDefault.default)(function() {
            return window.navigator.userAgent.toLowerCase();
        })();
        if (n) {
            var s, a = function(i) {
                return {
                    isAndroid: /android/i.test(i) && !/iemobile/.test(i),
                    isIOS: /iphone|ios|ipad|ipod/.test(i) && !/iemobile/.test(i),
                    isMobile: /android|iphone|ios|ipad|ipod|iemobile/.test(i),
                    isZalo: /zalo/.test(i)
                };
            }(n);
            return {
                appEnv: (s = new URL(window.location.href).searchParams.get("env"), {
                    isMp: window.location.hostname.includes((0, _constantsJs.mpDomain)) && ("TESTING_LOCAL" == s || window.location.pathname.startsWith((0, _constantsJs.mpPath))),
                    isMpWeb: window.location.hostname.includes("localhost")
                }),
                platform: a,
                platformName: e(a),
                zaloVersion: r(n).trim()
            };
        }
    }();
    if (n) return n;
}

},{"../constants.js":"fNy4G","../utils/silent.js":"jk2qm","../types/enum.js":"dFF7D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNy4G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ACTION", ()=>n);
parcelHelpers.export(exports, "ACTION_LEFT_BUTTON_TYPE", ()=>L);
parcelHelpers.export(exports, "APIS", ()=>o);
parcelHelpers.export(exports, "APP_ID", ()=>a);
parcelHelpers.export(exports, "ApiCallStage", ()=>E);
parcelHelpers.export(exports, "COMMON_NATIVE_ERROR_CODE", ()=>r);
parcelHelpers.export(exports, "COOKIE_NAME", ()=>N);
parcelHelpers.export(exports, "DEFAULT_HEADER_COLOR", ()=>d);
parcelHelpers.export(exports, "DEFAULT_TEXT_ALIGN", ()=>h);
parcelHelpers.export(exports, "HIDE_ACTION_BAR", ()=>m);
parcelHelpers.export(exports, "IAP_ERROR", ()=>M);
parcelHelpers.export(exports, "MEDIA_PICKER_LIMIT", ()=>_);
parcelHelpers.export(exports, "MESSAGES", ()=>s);
parcelHelpers.export(exports, "MINI_APP_INTERNAL_LINK", ()=>A);
parcelHelpers.export(exports, "MINI_APP_LINK", ()=>T);
parcelHelpers.export(exports, "PAYMENT_APIS", ()=>P);
parcelHelpers.export(exports, "PAYMENT_H5_URL", ()=>p);
parcelHelpers.export(exports, "PRORATION_MODE", ()=>U);
parcelHelpers.export(exports, "RESPONSE", ()=>S);
parcelHelpers.export(exports, "RESPONSE_CODE", ()=>R);
parcelHelpers.export(exports, "SHOW_ACTION_BAR", ()=>c);
parcelHelpers.export(exports, "STORAGE_LIMIT", ()=>D);
parcelHelpers.export(exports, "TEXT_ALIGN_TYPE", ()=>l);
parcelHelpers.export(exports, "ZALO_SUPPORT_SHARE_MULTI_IMAGE_VERSION", ()=>t);
parcelHelpers.export(exports, "ZALO_SUPPORT_STORAGE_VERSION", ()=>C);
parcelHelpers.export(exports, "ZAPP_ID", ()=>O);
parcelHelpers.export(exports, "mpDomain", ()=>I);
parcelHelpers.export(exports, "mpPath", ()=>i);
var E, e = 1048576, _ = 1 * e, O = window.zAppID, a = window.APP_ID, T = "https://zalo.me/s", A = "https://h5.zdn.vn/zapps", I = "h5.zdn.vn", i = "/zapps", N = {
    ZOAUTH: "h5.zdn.vn_zoauth",
    ZACC_SESSION: "h5.zdn.vn_zacc_session",
    JS_TOKEN: "h5.zdn.vn_zlink3rd",
    ZOAUTH_VRF: "h5.zdn.vn_zoauth_vrf",
    DEVICE_ID: "h5.zdn.vn_deviceID",
    CONTEXT_ID: "h5.zdn.vn_contextID",
    CONTEXT_TYPE: "h5.zdn.vn_contextType",
    UTOKEN_ZPI: "h5.zdn.vn_utoken_zpi",
    GTOKEN_ZPI: "h5.zdn.vn_gtoken_zpi",
    ZPP_ZPI: "h5.zdn.vn_zpp_zpi",
    ZPT_ZPI: "h5.zdn.vn_zpt_zpi"
}, o = {
    GET_USER_INFO: "https://graph.zalo.me/v2.0/me",
    GET_ACCESS_TOKEN: "https://h5.zalo.me/openapi/access_token",
    GET_ACCESS_TOKEN_V3: "https://oauth.zaloapp.com/v3/access_token",
    GET_LIST_USER_INFO: "https://graph.zalo.me/v2.0/me/friends/list",
    CREATE_ORDER: "https://payment-mini.zalo.me/api/order/create",
    GET_APP_INFO: "https://h5.zalo.me/apps/get-info",
    SEND_ACTION_LOG: "https://h5.zalo.me/log/async",
    CREATE_SHARE_LINK: "https://h5.zalo.me/openapi/create-sharelink",
    CHECK_INTERACT_OA: "https://h5.zalo.me/openapi/check-interact-oa",
    GET_AUTH_SETTING: "https://h5.zalo.me/apis/users/auth-settings"
};
!function(E) {
    E.REQUEST = "REQUEST", E.MODIFIED_REQUEST = "MODIFIED_REQUEST", E.RESPONSE = "RESPONSE", E.MODIFIED_RESPONSE = "MODIFIED_RESPONSE", E.NOT_FOUND = "NOT_FOUND";
}(E || (E = {}));
var R = {
    SUCCESS: 0,
    UNKNOWN_ERROR: -2000,
    BAD_REQUEST: -1400,
    INTERNAL_SERVER_ERROR: -1500,
    UNAUTHORIZED: -1401,
    FORBIDDEN: -1403,
    CLIENT_NOT_SUPPORT: -1404,
    TIME_OUT: -1408,
    DECODE_FAILED: -2001,
    USER_DENIED: -2002,
    USER_CANCEL: -2003,
    MEDIA_PICKER_FAIL: -2004,
    SAVE_IMAGE_FAIL: -2005
}, s = {
    SUCCESS: "Success",
    UNKNOWN_ERROR: "Unknown error. Please try again later.",
    TIME_OUT: "Request timeout. Please try again later.",
    LOGIN_REQUIRED: "Please login (https://miniapp.zalo.me/docs/api/login) before to call this api",
    LOGIN_FAILED: "Login failed",
    NOT_PERMISSION: "You don't have permission to call this api",
    CLIENT_NOT_SUPPORT: "This API is not supported in this version of Zalo",
    DECODE_FAILED: "Can not decode id. Please check your params again.",
    INVALID_PARAM: "Invalid parameter",
    USER_DENIED: "User denied",
    USER_CANCEL: "User cancel",
    NEED_USER_AUTH: "User Authentication Required. Please grant User Authentication permission before requesting User Permission",
    MEDIA_PICKER_FAIL: "Unable to pick media",
    SAVE_IMAGE_FAIL: "Unable to save image",
    ANDROID_ONLY: "This API only works on android device",
    IOS_ONLY: "This API only works on iOS device"
}, S = {
    SUCCESS: {
        code: R.SUCCESS,
        message: s.SUCCESS
    },
    UNKNOWN_ERROR: {
        code: R.UNKNOWN_ERROR,
        message: s.UNKNOWN_ERROR
    },
    UNAUTHORIZED: {
        code: R.UNAUTHORIZED,
        message: s.LOGIN_REQUIRED
    },
    FORBIDDEN: {
        code: R.FORBIDDEN,
        message: s.NOT_PERMISSION
    },
    CLIENT_NOT_SUPPORT: {
        code: R.CLIENT_NOT_SUPPORT,
        message: s.CLIENT_NOT_SUPPORT
    },
    DECODE_FAILED: {
        code: R.DECODE_FAILED,
        message: s.DECODE_FAILED
    },
    TIME_OUT: {
        code: R.TIME_OUT,
        message: s.TIME_OUT
    },
    USER_DENIED: {
        code: R.USER_DENIED,
        message: s.USER_DENIED
    },
    USER_CANCEL: {
        code: R.USER_CANCEL,
        message: s.USER_CANCEL
    }
}, n = {
    GET_DOWNLOADED_STICKER: {
        haveCallback: !0
    },
    OPEN_SHARE_STICKER: {},
    OPEN_PROFILE: {
        requireAccessToken: !0
    },
    OPEN_FEED_DETAIL: {},
    OPEN_FRIEND_RADA: {},
    OPEN_INAPP: {},
    OPEN_OUTAPP: {
        requireAccessToken: !0
    },
    OPEN_PAGE: {},
    OPEN_PHOTODETAIL: {},
    OPEN_GALARY: {},
    OPEN_GAMECENTER: {},
    OPEN_GAMENEWS: {},
    OPEN_TAB_CONTACT: {},
    OPEN_TAB_SOCIAL: {},
    OPEN_FRIENDSUGGEST: {},
    OPEN_GROUPLIST: {},
    OPEN_NEARBY: {},
    OPEN_ROOM: {},
    OPEN_STICKERSTORE: {},
    OPEN_CREATECHAT: {},
    COPY_LINK_CATESTICKER: {},
    REQUEST_BUY_STICKER: {},
    OPEN_CHAT: {
        requireAccessToken: !0
    },
    OPEN_TAB_CHAT: {},
    OPEN_CHATGROUP: {},
    OPEN_ADDFRIEND: {},
    OPEN_TAB_MORE: {},
    OPEN_POSTFEED: {
        requireAccessToken: !0
    },
    OPEN_LOGINDEVICES: {},
    OPEN_SENDSTICKER: {},
    REPORT_ABUSE: {
        haveCallback: !0
    },
    FOLLOW_OA: {
        haveCallback: !0,
        requireAccessToken: !0
    },
    UNFOLLOW_OA: {
        haveCallback: !0,
        requireAccessToken: !0
    },
    OPEN_GAMEDETAIL: {},
    OPEN_SHARESHEET: {
        haveCallback: !0,
        requireAccessToken: !0
    },
    REQUEST_PERMISSION_CAMERA: {
        errorList: {
            android: {
                "-2": {
                    mapTo: S.USER_DENIED
                }
            },
            iOS: {
                "-2": {
                    mapTo: S.USER_DENIED
                }
            }
        }
    },
    CHANGE_TITLE_HEADER: {
        skipJump: !0
    },
    WEBVIEW_CLEARCACHE: {},
    WEBVIEW_CONFIRMCACHE: {},
    WEBVIEW_ISVISIBLE: {},
    WEBVIEW_NETWORKTYPE: {
        skipJump: !0
    },
    CHANGE_BUTTON_HEADER: {},
    CREATE_OPTIONS_MENU: {
        skipJump: !0,
        haveCallback: !0
    },
    CREATE_SHORTCUT: {
        requireAccessToken: !0
    },
    CHANGE_ACTIONBAR_LEFTBUTTON_TYPE: {
        skipJump: !0,
        haveCallback: !0
    },
    WINDOW_CLOSE: {
        skipJump: !0,
        haveCallback: !0
    },
    WEBVIEW_CHECKRESERROR: {},
    IAP_REQUESTPAYMENT: {
        haveCallback: !0
    },
    ZBROWSER_GETSTATS: {},
    ZBROWSER_JSBRIDGE: {
        skipJump: !0,
        haveCallback: !0
    },
    PROMPT_AUTHENTICATION: {},
    CHANGE_ACTIONBAR_COLOR: {
        skipJump: !0
    },
    PROMPT_AUTHENTICATION_CHECK_STATE: {},
    OPEN_APPSTORE: {},
    GET_LOCATION: {
        haveCallback: !0,
        errorList: {
            android: {
                "-1": {
                    mapTo: S.USER_DENIED
                }
            },
            iOS: {
                "-1": {
                    mapTo: S.USER_DENIED
                }
            }
        }
    },
    QUERY_LOCATION_HIDE: {
        haveCallback: !0
    },
    SHOW_TOAST: {
        haveCallback: !0
    },
    OPEN_APP: {},
    HIDE_KEYBOARD: {},
    OPEN_PHONE: {},
    OPEN_QR: {},
    OPEN_SMS: {},
    VIEW_MYQR: {
        haveCallback: !0,
        requireAccessToken: !0
    },
    KEEP_SCREEN: {
        haveCallback: !0
    },
    CHANGE_AUTOROTATE: {
        skipJump: !0
    },
    CHECK_APP_INSTALLED: {},
    QUERY_SHOW: {},
    QUERY_HIDE: {},
    OPEN_INAPPRW: {},
    ZALORUN_GETTRACKINGSTATUS: {
        haveCallback: !0
    },
    ZALORUN_SETTRACKINGSTATUS: {
        haveCallback: !0
    },
    ZALORUN_GETDAYSTEP: {
        haveCallback: !0
    },
    ZALORUN_FORCESUBMITDATA: {
        haveCallback: !0
    },
    ZALORUN_SETWEIGHT: {
        haveCallback: !0
    },
    OPEN_PROFILE_EXT: {},
    DOWNLOAD_CATE: {
        haveCallback: !0
    },
    JUMP_LOGIN: {
        skipJump: !0,
        whiteList: !0
    },
    OPEN_ADTIMA_ADS_INTERSTITIAL: {},
    OPEN_ADTIMA_ADS: {},
    GET_ADIDCLIENT: {},
    SCAN_IBEACON: {},
    INTERACTIVE_VIBRATION: {},
    SAVE_IMAGE_GALLERY: {
        versionLive: {
            iOS: 408
        },
        errorList: {
            android: {
                "-101": {
                    mapTo: {
                        code: R.SAVE_IMAGE_FAIL,
                        message: s.SAVE_IMAGE_FAIL
                    },
                    needMoreDetail: !0
                },
                "-102": {
                    mapTo: {
                        code: R.SAVE_IMAGE_FAIL,
                        message: s.SAVE_IMAGE_FAIL
                    },
                    needMoreDetail: !0
                }
            },
            iOS: {
                "-10": {
                    mapTo: {
                        code: R.SAVE_IMAGE_FAIL,
                        message: s.SAVE_IMAGE_FAIL
                    },
                    needMoreDetail: !0
                }
            }
        }
    },
    OPEN_MP: {
        versionLive: {
            iOS: 402
        }
    },
    CHANGE_ACTIONBAR: {
        versionLive: {
            iOS: 402
        },
        skipJump: !0
    },
    ZBROWSER_MPDS: {
        versionLive: {
            iOS: 402
        }
    },
    WEBVIEW_SET_RESULT: {
        versionLive: {
            iOS: 416
        }
    },
    MP_GET_NUMBER: {
        versionLive: {
            iOS: 416
        },
        errorList: {
            android: {
                "-1": {
                    mapTo: S.USER_DENIED
                },
                "-101": {
                    mapTo: S.USER_DENIED
                }
            },
            iOS: {
                "-1": {
                    mapTo: S.USER_DENIED
                },
                "-10": {
                    mapTo: S.USER_DENIED
                }
            }
        }
    },
    MP_OPEN_PROFILE_PICKER: {
        requireAccessToken: !0,
        versionLive: {
            iOS: 432
        },
        errorList: {
            android: {
                "-101": {
                    mapTo: S.USER_CANCEL
                }
            },
            iOS: {
                "-101": {
                    mapTo: S.USER_CANCEL
                }
            }
        }
    },
    GET_SUPPORTED_ACTIONS: {
        whiteList: !0
    },
    MP_JOIN_WIFI: {
        versionLive: {
            android: 0,
            iOS: 0
        },
        havePermission: !1,
        whiteList: !1
    },
    PICK_MEDIA: {
        requireAccessToken: !0,
        versionLive: {
            iOS: 440
        },
        errorList: {
            android: {
                "-101": {
                    mapTo: S.USER_CANCEL
                },
                999: {
                    mapTo: {
                        code: R.MEDIA_PICKER_FAIL,
                        message: s.MEDIA_PICKER_FAIL
                    },
                    needMoreDetail: !0
                }
            },
            iOS: {
                "-10": {
                    mapTo: {
                        code: R.MEDIA_PICKER_FAIL,
                        message: s.MEDIA_PICKER_FAIL
                    }
                }
            }
        }
    },
    MP_CLOSE_LOADINGVIEW: {
        skipJump: !0
    },
    CHANGE_BOTTOMBAR: {
        skipJump: !0
    },
    MA_MENU_MINIMIZE: {
        skipJump: !1,
        versionLive: {
            iOS: 520
        }
    },
    MA_MENU_PERMISSION: {
        skipJump: !1,
        versionLive: {
            iOS: 520
        }
    },
    MA_MENU_FAVORITES: {
        skipJump: !1,
        versionLive: {
            iOS: 520
        }
    },
    MP_SEND_NOTIFICATION: {
        skipJump: !1,
        versionLive: {
            iOS: 530
        },
        errorList: {
            android: {
                "-1": {
                    mapTo: S.USER_DENIED
                }
            },
            iOS: {
                "-1": {
                    mapTo: S.USER_DENIED
                }
            }
        }
    },
    MP_ADD_RATING: {
        skipJump: !1
    },
    MP_ADD_MYFAVORITES: {
        skipJump: !1
    },
    MP_INTERACT_OA: {
        skipJump: !1
    },
    MP_USER_AUTHORIZE: {
        skipJump: !1
    }
}, r = {
    android: {
        "-4": S.DECODE_FAILED,
        "-5": S.CLIENT_NOT_SUPPORT,
        "-14": S.TIME_OUT
    },
    iOS: {
        "-9": S.DECODE_FAILED,
        "-5": S.CLIENT_NOT_SUPPORT,
        "-14": S.TIME_OUT
    }
}, t = {
    android: 12100615,
    iOS: 460,
    wp: 0,
    unknown: 0
}, C = {
    android: 12100571,
    iOS: 400,
    wp: 0,
    unknown: 0
}, D = 5 * e, P = {
    CREATE_ORDER: "https://payment-mini.zalo.me/api/order/create",
    CREATE_IAP_ORDER: "https://payment-mini.zalo.me/api/order/iap-create",
    GET_TRANSACTION: "https://payment-mini.zalo.me/api/transaction",
    GET_ORDER_STATUS: "https://payment-mini.zalo.me/api/transaction/get-status"
}, p = "https://payment-mini.zalo.me", U = {
    UNKNOW: "UNKNOW",
    DEFERRED: "DEFERRED",
    IMMEDIATE_AND_CHARGE_FULL_PRICE: "IMMEDIATE_AND_CHARGE_FULL_PRICE"
}, L = {
    SHOW_BACK: 0,
    HIDE_BACK: 3,
    SHOW_HOME: 1,
    HIDE_HOME: 0
}, c = 5, m = 6, l = {
    LEFT: 0,
    CENTER: 1
}, d = "#1843EF", h = l.LEFT, M = {
    "-12101": "Invalid params",
    "-12102": "Session expire",
    "-12103": "Not permission",
    "-12104": "Not Authorize",
    "-12105": "Unknown exception",
    "-12106": "Cannot create order",
    "-12107": "Transaction not found",
    "-12108": "Cannot update order",
    "-12109": "Cannot decode param",
    "-12110": "Version not support",
    "-12111": "Receipt expire",
    "-12112": "Product not found",
    "-12113": "Subscription other GW",
    "-12114": "Product already subcription",
    "-12115": "Not exist",
    "-12116": "Already exist",
    "-12117": "Not allow",
    "-12118": "Not permit",
    "-12119": "Internal error",
    "-2": "Unable to pay",
    "-6": "Unable to register",
    "-7": "Registered account",
    "-832": "Purchased by another account",
    "-833": "Register for another account",
    "-834": "Unable to register",
    "-2010": "System is maintaining",
    "-3999": "Not in Vietnam",
    "-12129": "Purchased by another account",
    123: "An error has occurred"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jk2qm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>o);
var _asyncToGeneratorMjsJs = require("./../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _toConsumableArrayMjsJs = require("./../external/@swc/helpers/src/_to_consumable_array.mjs.js");
var _toConsumableArrayMjsJsDefault = parcelHelpers.interopDefault(_toConsumableArrayMjsJs);
var _tslibEs6Js = require("./../external/tslib/tslib.es6.js");
function o(r) {
    return function() {
        for(var n = arguments.length, o = new Array(n), s = 0; s < n; s++)o[s] = arguments[s];
        try {
            return r.apply(void 0, (0, _toConsumableArrayMjsJsDefault.default)(o));
        } catch (r) {
            return "undefined" != typeof console && console.error && console.error(r), null;
        }
    };
}
o.async = function(o) {
    return (0, _asyncToGeneratorMjsJsDefault.default)(function() {
        var r, s, t, l, c = arguments;
        return (0, _tslibEs6Js.__generator)(this, function(n) {
            switch(n.label){
                case 0:
                    for(r = c.length, s = new Array(r), t = 0; t < r; t++)s[t] = c[t];
                    n.label = 1;
                case 1:
                    return n.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]), [
                        4,
                        o.apply(void 0, (0, _toConsumableArrayMjsJsDefault.default)(s))
                    ];
                case 2:
                    return [
                        2,
                        n.sent()
                    ];
                case 3:
                    return l = n.sent(), "undefined" != typeof console && console.error && console.error(l), [
                        2,
                        null
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
};

},{"./../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","./../external/@swc/helpers/src/_to_consumable_array.mjs.js":"hybD6","./../external/tslib/tslib.es6.js":"f0cFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hybD6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>a);
var _arrayWithoutHolesMjsJs = require("./_array_without_holes.mjs.js");
var _arrayWithoutHolesMjsJsDefault = parcelHelpers.interopDefault(_arrayWithoutHolesMjsJs);
var _iterableToArrayMjsJs = require("./_iterable_to_array.mjs.js");
var _iterableToArrayMjsJsDefault = parcelHelpers.interopDefault(_iterableToArrayMjsJs);
var _nonIterableSpreadMjsJs = require("./_non_iterable_spread.mjs.js");
var _nonIterableSpreadMjsJsDefault = parcelHelpers.interopDefault(_nonIterableSpreadMjsJs);
var _unsupportedIterableToArrayMjsJs = require("./_unsupported_iterable_to_array.mjs.js");
var _unsupportedIterableToArrayMjsJsDefault = parcelHelpers.interopDefault(_unsupportedIterableToArrayMjsJs);
function a(a) {
    return (0, _arrayWithoutHolesMjsJsDefault.default)(a) || (0, _iterableToArrayMjsJsDefault.default)(a) || (0, _unsupportedIterableToArrayMjsJsDefault.default)(a) || (0, _nonIterableSpreadMjsJsDefault.default)();
}

},{"./_array_without_holes.mjs.js":"8MCyc","./_iterable_to_array.mjs.js":"ifcw2","./_non_iterable_spread.mjs.js":"6VzZ0","./_unsupported_iterable_to_array.mjs.js":"cC8LV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8MCyc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>a);
var _arrayLikeToArrayMjsJs = require("./_array_like_to_array.mjs.js");
var _arrayLikeToArrayMjsJsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayMjsJs);
function a(a) {
    if (Array.isArray(a)) return (0, _arrayLikeToArrayMjsJsDefault.default)(a);
}

},{"./_array_like_to_array.mjs.js":"hQBSe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQBSe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>n);
function n(n, r) {
    (null == r || r > n.length) && (r = n.length);
    for(var e = 0, t = new Array(r); e < r; e++)t[e] = n[e];
    return t;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ifcw2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>r);
function r(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6VzZ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>e);
function e() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cC8LV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>t);
var _arrayLikeToArrayMjsJs = require("./_array_like_to_array.mjs.js");
var _arrayLikeToArrayMjsJsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayMjsJs);
function t(t, e) {
    if (t) {
        if ("string" == typeof t) return (0, _arrayLikeToArrayMjsJsDefault.default)(t, e);
        var o = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(o) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? (0, _arrayLikeToArrayMjsJsDefault.default)(t, e) : void 0;
    }
}

},{"./_array_like_to_array.mjs.js":"hQBSe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f0cFO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__generator", ()=>e);
function e(e, r) {
    var t, n, o, l, a = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    };
    return l = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
        return this;
    }), l;
    function u(u) {
        return function(i) {
            return function(u) {
                if (t) throw new TypeError("Generator is already executing.");
                for(; l && (l = 0, u[0] && (a = 0)), a;)try {
                    if (t = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
                    switch(n = 0, o && (u = [
                        2 & u[0],
                        o.value
                    ]), u[0]){
                        case 0:
                        case 1:
                            o = u;
                            break;
                        case 4:
                            return a.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            a.label++, n = u[1], u = [
                                0
                            ];
                            continue;
                        case 7:
                            u = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                a.label = u[1];
                                break;
                            }
                            if (6 === u[0] && a.label < o[1]) {
                                a.label = o[1], o = u;
                                break;
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2], a.ops.push(u);
                                break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                    }
                    u = r.call(e, a);
                } catch (e) {
                    u = [
                        6,
                        e
                    ], n = 0;
                } finally{
                    t = o = 0;
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                };
            }([
                u,
                i
            ]);
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFF7D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AndroidBottomNavigationBarType", ()=>s);
parcelHelpers.export(exports, "ChatType", ()=>t);
parcelHelpers.export(exports, "Events", ()=>o);
parcelHelpers.export(exports, "IAPPayType", ()=>d);
parcelHelpers.export(exports, "IOSSafeAreaBottomType", ()=>h);
parcelHelpers.export(exports, "JumpStatus", ()=>a);
parcelHelpers.export(exports, "MediaPickerType", ()=>p);
parcelHelpers.export(exports, "NetworkType", ()=>e);
parcelHelpers.export(exports, "OrientationType", ()=>u);
parcelHelpers.export(exports, "PlatformType", ()=>n);
parcelHelpers.export(exports, "PostFeedType", ()=>c);
parcelHelpers.export(exports, "ProfileType", ()=>i);
parcelHelpers.export(exports, "ProrationMode", ()=>m);
parcelHelpers.export(exports, "ShareSheetType", ()=>l);
parcelHelpers.export(exports, "StatusBarType", ()=>f);
parcelHelpers.export(exports, "TextAlignType", ()=>_);
parcelHelpers.export(exports, "VibrateType", ()=>r);
var e, n, o, a, i, t, c, l, u, r, p, d, m, f, s, h, _;
!function(e) {
    e.none = "none", e.wifi = "wifi", e.cellular = "cellular", e.unknown = "unknown";
}(e || (e = {})), function(e) {
    e.wp = "wp", e.android = "android", e.iOS = "iOS", e.unknown = "unknown";
}(n || (n = {})), function(e) {
    e.AppPaused = "h5.event.paused", e.AppResumed = "h5.event.resumed", e.NetworkChanged = "h5.event.connection.changed", e.OnDataCallback = "h5.event.webview.result", e.WebviewClosed = "h5.event.webview.close", e.OpenApp = "h5.event.open.mp", e.AppClose = "h5.event.action.close", e.PaymentCallback = "payment.callback", e.PaymentResult = "action.payment.result";
}(o || (o = {})), function(e) {
    e.DOING = "doing", e.DONE = "done";
}(a || (a = {})), function(e) {
    e[e.user = 1] = "user", e[e.oa = 0] = "oa", e[e.aliasOA = 2] = "aliasOA";
}(i || (i = {})), function(e) {
    e[e.user = 1] = "user", e[e.oa = 0] = "oa";
}(t || (t = {})), function(e) {
    e[e.image = 1] = "image", e[e.link = 4] = "link", e[e.profile = 5] = "profile";
}(c || (c = {})), function(e) {
    e[e.image = 1] = "image", e[e.gif = 11] = "gif", e[e.video = 12] = "video", e[e.link = 4] = "link", e[e.oa = 5] = "oa", e[e.zmp = 20] = "zmp", e[e.multi_image = 21] = "multi_image", e[e.zmp_deep_link = 4] = "zmp_deep_link";
}(l || (l = {})), function(e) {
    e[e.auto = 1] = "auto", e[e.portrait = 2] = "portrait", e[e.landscape = 3] = "landscape";
}(u || (u = {})), function(e) {
    e[e.oneShot = 0] = "oneShot";
}(r || (r = {})), function(e) {
    e[e.zcamera = 3] = "zcamera", e[e.zcamera_photo = 1] = "zcamera_photo", e[e.zcamera_video = 2] = "zcamera_video", e[e.zcamera_scan = 7] = "zcamera_scan", e[e.photo = 4] = "photo", e[e.video = 5] = "video", e[e.file = 6] = "file";
}(p || (p = {})), function(e) {
    e.SUBSCRIPTION = "SUBSCRIPTION", e.ONETIME = "ONETIME";
}(d || (d = {})), function(e) {
    e[e.UNKNOW = 0] = "UNKNOW", e[e.DEFERRED = 1] = "DEFERRED", e[e.IMMEDIATE_AND_CHARGE_FULL_PRICE = 2] = "IMMEDIATE_AND_CHARGE_FULL_PRICE";
}(m || (m = {})), function(e) {
    e[e.normal = 1] = "normal", e[e.hidden = 0] = "hidden", e[e.transparent = 2] = "transparent";
}(f || (f = {})), function(e) {
    e[e.show = 1] = "show", e[e.hide = 0] = "hide";
}(s || (s = {})), function(e) {
    e[e.show = 1] = "show", e[e.hide = 0] = "hide";
}(h || (h = {})), function(e) {
    e[e.left = 0] = "left", e[e.center = 1] = "center";
}(_ || (_ = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqwdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>o);
var _constantsJs = require("../constants.js");
var _loggerJs = require("./logger.js");
var o = function(o, t) {
    var a, s = {
        error: -1404,
        errorMessage: "".concat(o, " is not found")
    };
    null == t || null === (a = t.fail) || void 0 === a || a.call(t, s), (0, _loggerJs.logger)({
        stage: (0, _constantsJs.ApiCallStage).NOT_FOUND,
        type: "error",
        name: o,
        request: t,
        state: "fail",
        response: s
    });
};

},{"../constants.js":"fNy4G","./logger.js":"grjYH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grjYH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logger", ()=>e);
function e(n) {
    e.on && e.engine(n);
}
e.on = !1, e.engine = function(e) {
    var n = e.name, o = e.type, t = e.state, i = e.request, r = e.response, s = e.stage;
    console[o]([
        n,
        s,
        t,
        i,
        r
    ].filter(Boolean).map(function(e) {
        return "object" == typeof e ? JSON.stringify(e) : e;
    }).join("; "));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mOw4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "functionHandler", ()=>e);
var _toConsumableArrayMjsJs = require("./../external/@swc/helpers/src/_to_consumable_array.mjs.js");
var _toConsumableArrayMjsJsDefault = parcelHelpers.interopDefault(_toConsumableArrayMjsJs);
var _commonJs = require("./common.js");
var _errorHandlerJs = require("./errorHandler.js");
var _lodashJs = require("./lodash.js");
var _lodashJsDefault = parcelHelpers.interopDefault(_lodashJs);
var _responseJs = require("./response.js");
function e(e, t, a, u) {
    var l, c, f = Array.isArray(a) && a.length > 0 && (null === (l = a[0]) || void 0 === l ? void 0 : l.success), m = Array.isArray(a) && a.length > 0 && (null === (c = a[0]) || void 0 === c ? void 0 : c.fail);
    try {
        var d = a;
        t.length > 0 && t.forEach(function(r, s) {
            var t = r.safeParse(a[s]);
            if (!t.success) {
                var u, l = null === (u = t.error) || void 0 === u ? void 0 : u.issues, c = (0, _commonJs.generateErrorMessage)(l), f = (0, _responseJs.apiResponse).error.badRequest(c);
                throw f.detail = l, (0, _errorHandlerJs.errorHandler)(f, e);
            }
            d.push(t.data);
        });
        var v = u.apply(void 0, (0, _toConsumableArrayMjsJsDefault.default)(d));
        return (0, _lodashJsDefault.default).isPromise(v) ? new Promise(function(r, o) {
            v.then(function(o) {
                if (!(0, _lodashJsDefault.default).isNull(f) && (0, _lodashJsDefault.default).isFunction(f)) return f(o);
                r(v);
            }).catch(function(r) {
                var n = (0, _errorHandlerJs.errorHandler)(r, e);
                if (!(0, _lodashJsDefault.default).isNull(m) && (0, _lodashJsDefault.default).isFunction(m)) return m(n);
                o(n);
            });
        }) : v;
    } catch (r) {
        if (!(0, _lodashJsDefault.default).isNull(m) && (0, _lodashJsDefault.default).isFunction(m)) return m(r);
        throw (0, _errorHandlerJs.errorHandler)(r, e);
    }
}

},{"./../external/@swc/helpers/src/_to_consumable_array.mjs.js":"hybD6","./common.js":"1HpFN","./errorHandler.js":"dKo6k","./lodash.js":"28xEQ","./response.js":"4HKAY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1HpFN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcLocalStorageSize", ()=>g);
parcelHelpers.export(exports, "checkIOSSupportAction", ()=>s);
parcelHelpers.export(exports, "convertStatusBarTypeToNumber", ()=>h);
parcelHelpers.export(exports, "generateErrorMessage", ()=>d);
parcelHelpers.export(exports, "getDynamicAPIByAction", ()=>j);
parcelHelpers.export(exports, "getMetaValue", ()=>l);
parcelHelpers.export(exports, "getStatusbarType", ()=>v);
parcelHelpers.export(exports, "isRequireUserAuthentication", ()=>y);
parcelHelpers.export(exports, "parseJSON", ()=>f);
parcelHelpers.export(exports, "serialize", ()=>c);
parcelHelpers.export(exports, "stringToData", ()=>p);
parcelHelpers.export(exports, "stringifyData", ()=>m);
var _typeOfMjsJs = require("./../external/@swc/helpers/src/_type_of.mjs.js");
var _typeOfMjsJsDefault = parcelHelpers.interopDefault(_typeOfMjsJs);
var _constantsJs = require("../constants.js");
var _debugJs = require("./debug.js");
var _debugJsDefault = parcelHelpers.interopDefault(_debugJs);
var _lodashJs = require("./lodash.js");
var _lodashJsDefault = parcelHelpers.interopDefault(_lodashJs);
var _enumJs = require("../types/enum.js");
var _tokenJs = require("../common/token.js");
var _tokenJsDefault = parcelHelpers.interopDefault(_tokenJs);
var _getEnvJs = require("../appEnv/getEnv.js");
var _getEnvJsDefault = parcelHelpers.interopDefault(_getEnvJs);
var u = (0, _debugJsDefault.default)("zmp:utils:common"), c = function(r) {
    if ((0, _lodashJsDefault.default).isObject(JSON) && JSON.stringify) return JSON.stringify(r);
    if (void 0 === r) return "undefined";
    if (null === r) return "null";
    try {
        if ("string" == typeof r || null !== r.constructor.toString().match(/string/i)) return '"' + r.replace(/"/g, '\\"') + '"';
    } catch (r) {
        console.log(r);
    }
    var n;
    if (null !== Object.prototype.toString.call(r).match(/array/i)) {
        n = [];
        for(var t = r.length, o = 0; o < t; o++)n.push(c(r[o]));
        return "[" + n.join(",") + "]";
    }
    if ("object" == typeof r) {
        for(var i in n = [], r)n.push('"' + i + '":' + c(r[i]));
        return "{" + n.join(",") + "}";
    }
    return r.toString();
}, s = function(r) {
    var t, e, o = (0, _constantsJs.ACTION)[r], i = (null === (t = (0, _getEnvJsDefault.default)()) || void 0 === t ? void 0 : t.zaloVersion) || 0, u = "versionLive" in o && (null == o || null === (e = o.versionLive) || void 0 === e ? void 0 : e.iOS) || 0;
    return !!(Array.isArray(window.ignoreCheckSupport) && window.ignoreCheckSupport.length > 0 && window.ignoreCheckSupport.includes(r)) || Number(i) >= u;
}, p = function(n) {
    try {
        if (n) {
            u(n);
            var t = n.replace(/\\/g, "").replace(/&#39;/g, "'");
            try {
                t = decodeURIComponent(atob(n));
            } catch (r) {}
            return u("formattedValue", t, JSON.parse(t), (0, _typeOfMjsJsDefault.default)(JSON.parse(t))), JSON.parse(t);
        }
        return null;
    } catch (r) {
        return u("parse json error:", r), n;
    }
}, f = function(r) {
    if ((0, _lodashJsDefault.default).isObject(JSON) && JSON.parse && (0, _lodashJsDefault.default).isString(r)) {
        var n = r.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\x00/g, "");
        return JSON.parse(n, function(r, n) {
            return n;
        });
    }
    return (0, _lodashJsDefault.default).isObject(r) ? r : new Function("return " + r)();
}, l = function(r) {
    for(var n = document.getElementsByTagName("meta"), t = 0; t < n.length; t++)if (n[t].getAttribute("name") === r || n[t].getAttribute("property") === r) return n[t].getAttribute("content");
    return "";
}, m = function(r) {
    return btoa(encodeURIComponent(JSON.stringify(r)));
}, g = function(r, n) {
    var t, e = 0;
    for(t in r){
        var o = t.split("_")[0];
        r.hasOwnProperty(t) && (n && o !== n || (e += 2 * (r[t].length + t.length)));
    }
    return e;
};
function d(r) {
    return r.map(function(r, n) {
        var t = r.path.length > 0 ? r.path.map(function(r, n) {
            return n > 0 ? "[".concat(r, "]") : r;
        }).join("") : "arg";
        return "Error ".concat(n + 1, ": Code: ").concat(r.code, " ~ Path: ").concat(t, " ~ Message: ").concat(r.message);
    }).join(" | ");
}
var v = function(r) {
    return r === (0, _enumJs.StatusBarType).hidden ? "hidden" : r === (0, _enumJs.StatusBarType).transparent ? "transparent" : "normal";
}, h = function(r) {
    return "hidden" === r ? (0, _enumJs.StatusBarType).hidden : "transparent" === r ? (0, _enumJs.StatusBarType).transparent : (0, _enumJs.StatusBarType).normal;
}, j = function(r) {
    if (void 0 !== r) {
        var n = (0, _tokenJsDefault.default).miniProgramConfig;
        return ((null == n ? void 0 : n.dynamicApis) || []).find(function(n) {
            return n.action === r && !1 === n.clientHandle;
        });
    }
}, y = function(r) {
    if (void 0 === r) return !1;
    var n = (0, _tokenJsDefault.default).miniProgramConfig;
    return ((null == n ? void 0 : n.requiredAuthenList) || []).indexOf(r) >= 0;
};

},{"./../external/@swc/helpers/src/_type_of.mjs.js":"7WZGo","../constants.js":"fNy4G","./debug.js":"b9c6Q","./lodash.js":"28xEQ","../types/enum.js":"dFF7D","../common/token.js":"4rqJX","../appEnv/getEnv.js":"4G0wJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7WZGo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>o);
function o(o) {
    return o && o.constructor === Symbol ? "symbol" : typeof o;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9c6Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>n);
function n(n) {
    return "function" == typeof window.Debug ? window.Debug(n) : function() {
        for(var n = arguments.length, e = new Array(n), o = 0; o < n; o++)e[o] = arguments[o];
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28xEQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>u);
var n = Object.prototype.toString;
var t = "[object Null]", e = "[object Undefined]";
function r(r) {
    return null == r ? void 0 === r ? e : t : function(t) {
        return n.call(t);
    }(r);
}
function o(n) {
    return null != n && "object" == typeof n;
}
var u = {
    isEmpty: function(n) {
        return null == n || "object" == typeof n && 0 === Object.keys(n).length || "string" == typeof n && 0 === n.trim().length;
    },
    isNull: function(n) {
        return null === n;
    },
    isUndefined: function(n) {
        return void 0 === n;
    },
    isFunction: function(n) {
        return "function" == typeof n;
    },
    isObject: function(n) {
        return null !== n && ("function" == typeof n || "object" == typeof n);
    },
    isString: function(n) {
        return null != n && "string" == typeof n.valueOf();
    },
    isNumber: function(n) {
        return "number" == typeof n || o(n) && "[object Number]" == r(n);
    },
    isArray: function(n) {
        return Array.isArray(n);
    },
    isRegExp: function(n) {
        return o(n) && "[object RegExp]" == r(n);
    },
    get: function(n, t) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, r = function(e) {
            return String.prototype.split.call(t, e).filter(Boolean).reduce(function(n, t) {
                return null != n ? n[t] : n;
            }, n);
        }, o = r(/[,[\]]+?/) || r(/[,[\].]+?/);
        return void 0 === o || o === n ? e : o;
    },
    isPromise: function(n) {
        return !!n && ("object" == typeof n || "function" == typeof n) && "function" == typeof n.then;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rqJX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>A);
var _asyncToGeneratorMjsJs = require("./../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _classCallCheckMjsJs = require("./../external/@swc/helpers/src/_class_call_check.mjs.js");
var _classCallCheckMjsJsDefault = parcelHelpers.interopDefault(_classCallCheckMjsJs);
var _createClassMjsJs = require("./../external/@swc/helpers/src/_create_class.mjs.js");
var _createClassMjsJsDefault = parcelHelpers.interopDefault(_createClassMjsJs);
var _objectSpreadMjsJs = require("./../external/@swc/helpers/src/_object_spread.mjs.js");
var _objectSpreadMjsJsDefault = parcelHelpers.interopDefault(_objectSpreadMjsJs);
var _lodashJs = require("../utils/lodash.js");
var _lodashJsDefault = parcelHelpers.interopDefault(_lodashJs);
var _constantsJs = require("../constants.js");
var _loggerJs = require("./logger.js");
var _zaloNativeJs = require("./call/zaloNative.js");
var _zaloNativeJsDefault = parcelHelpers.interopDefault(_zaloNativeJs);
var _responseJs = require("../utils/response.js");
var _utilsJs = require("./utils.js");
var _commonJs = require("../utils/common.js");
var _tslibEs6Js = require("./../external/tslib/tslib.es6.js");
var _enumJs = require("../types/enum.js");
var _authorizeJs = require("../apis/authorize.js");
var _getSettingJs = require("../apis/getSetting.js");
var v = function() {
    function v() {
        (0, _classCallCheckMjsJsDefault.default)(this, v), this._jumpStatus = void 0, this.WAITING_QUEUE = [], this.getAccessTokenCount = 0, this._accessToken = "", this._jsAccessToken = "", this.refreshToken = "", this._cookies = [], this.accessTokenExpiresIn = 0, this.prevGetAccessTokenTimestamp = (new Date).getTime(), this.manualSetAccessToken = !1, this._miniProgramConfig = {};
    }
    var A = v.prototype;
    return A.jump = function() {
        var n = this;
        return (0, _asyncToGeneratorMjsJsDefault.default)(function() {
            return (0, _tslibEs6Js.__generator)(this, function(e) {
                return [
                    2,
                    new Promise(function(e, t) {
                        n._jumpStatus ? n._jumpStatus === (0, _enumJs.JumpStatus).DONE ? e((0, _enumJs.JumpStatus).DONE) : e((0, _enumJs.JumpStatus).DOING) : (n._jumpStatus = (0, _enumJs.JumpStatus).DOING, (0, _loggerJs.logger)({
                            stage: (0, _constantsJs.ApiCallStage).REQUEST,
                            type: "log",
                            name: "jump"
                        }), (0, _zaloNativeJsDefault.default)("JUMP_LOGIN", {}, {
                            success: function(t) {
                                var s = t.data;
                                n._miniProgramConfig = (null == s ? void 0 : s.miniProgramConfig) || {};
                                var o = (null == s ? void 0 : s.cookiesOAuthLogins) || [], i = o.find(function(e) {
                                    return e.name === (0, _constantsJs.COOKIE_NAME).JS_TOKEN;
                                });
                                i && (n._jsAccessToken = i.value, window.ZJSBridge.setJSToken && window.ZJSBridge.setJSToken(i.value)), n._cookies = o;
                                var c = n._cookies.find(function(e) {
                                    return e.name === (0, _constantsJs.COOKIE_NAME).ZOAUTH;
                                });
                                (null == c ? void 0 : c.value) || (0, _utilsJs.sendLogData)([
                                    {
                                        action: "action.jump.login",
                                        error: -102,
                                        message: "no zoauth",
                                        data: {}
                                    }
                                ]), e((0, _enumJs.JumpStatus).DONE);
                            },
                            fail: function(e) {
                                (0, _utilsJs.sendLogData)([
                                    {
                                        action: "action.jump.login",
                                        error: -101,
                                        message: e.message || "jump error",
                                        data: {}
                                    }
                                ]), t(e);
                            }
                        }, {
                            skipJump: !0
                        }));
                    })
                ];
            });
        })();
    }, A.loginZaloV3 = function(n, t, s) {
        var o = this;
        return (0, _asyncToGeneratorMjsJsDefault.default)(function() {
            var r;
            return (0, _tslibEs6Js.__generator)(this, function(c) {
                switch(c.label){
                    case 0:
                        return r = "".concat((0, _constantsJs.APIS).GET_ACCESS_TOKEN_V3, "?app_id=").concat(t, "&redirect_uri=").concat((0, _constantsJs.MINI_APP_INTERNAL_LINK), "/").concat(n, "/&code=").concat(s, "&isSDK=true"), [
                            4,
                            fetch(r).then((a = (0, _asyncToGeneratorMjsJsDefault.default)(function(e) {
                                var n, t, s;
                                return (0, _tslibEs6Js.__generator)(this, function(r) {
                                    switch(r.label){
                                        case 0:
                                            return [
                                                4,
                                                e.json()
                                            ];
                                        case 1:
                                            return n = r.sent(), t = null == n ? void 0 : n.access_token, o._accessToken = t, s = 1e3 * parseInt(n.expires_in), o.accessTokenExpiresIn = s, o.prevGetAccessTokenTimestamp = (new Date).getTime(), window.ZJSBridge.setZAccSession && window.ZJSBridge.setZAccSession(o._accessToken || ""), [
                                                2,
                                                t
                                            ];
                                    }
                                });
                            }), function(e) {
                                return a.apply(this, arguments);
                            }))
                        ];
                    case 1:
                        return [
                            2,
                            c.sent()
                        ];
                }
                var a;
            });
        })();
    }, A.loginZaloV4 = function(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", c = this;
        return (0, _asyncToGeneratorMjsJsDefault.default)(function() {
            var a, u;
            return (0, _tslibEs6Js.__generator)(this, function(l) {
                switch(l.label){
                    case 0:
                        return (a = new URLSearchParams).append("app_id", n), a.append("code", t), a.append("code_verifier", r), (0, _lodashJsDefault.default).isNull(c.refreshToken) || 0 === c.refreshToken.length ? a.append("grant_type", "authorization_code") : (a.append("grant_type", "refresh_token"), a.append("refresh_token", c.refreshToken || "")), u = {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }, [
                            4,
                            fetch((0, _constantsJs.APIS).GET_ACCESS_TOKEN, (0, _objectSpreadMjsJsDefault.default)({
                                method: "POST",
                                body: a
                            }, u)).then((m = (0, _asyncToGeneratorMjsJsDefault.default)(function(e) {
                                var n, t, s, o;
                                return (0, _tslibEs6Js.__generator)(this, function(r) {
                                    switch(r.label){
                                        case 0:
                                            return [
                                                4,
                                                e.json()
                                            ];
                                        case 1:
                                            return n = r.sent(), t = (null == n ? void 0 : n.access_token) || "", s = (null == n ? void 0 : n.refresh_token) || "", c.refreshToken = s, c._accessToken = t, o = 1e3 * parseInt(null == n ? void 0 : n.expires_in), c.accessTokenExpiresIn = o, c.prevGetAccessTokenTimestamp = (new Date).getTime(), window.ZJSBridge.setZAccSession && window.ZJSBridge.setZAccSession(t), [
                                                2,
                                                t
                                            ];
                                    }
                                });
                            }), function(e) {
                                return m.apply(this, arguments);
                            }))
                        ];
                    case 1:
                        return [
                            2,
                            l.sent()
                        ];
                }
                var m;
            });
        })();
    }, A.getAccessToken = function() {
        var n = this;
        return (0, _asyncToGeneratorMjsJsDefault.default)(function() {
            var t, s, o, i, u, l, m;
            function p() {
                return h.apply(this, arguments);
            }
            function h() {
                return (h = (0, _asyncToGeneratorMjsJsDefault.default)(function() {
                    return (0, _tslibEs6Js.__generator)(this, function(e) {
                        switch(e.label){
                            case 0:
                                return [
                                    4,
                                    new Promise(function(e) {
                                        var n = setInterval(function() {
                                            (s.getAccessTokenCount <= 1 || s._accessToken) && (e("done"), clearInterval(n));
                                        }, 200);
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    e.sent()
                                ];
                        }
                    });
                })).apply(this, arguments);
            }
            return (0, _tslibEs6Js.__generator)(this, function(e) {
                switch(e.label){
                    case 0:
                        return t = (new Date).getTime() - n.prevGetAccessTokenTimestamp, (s = n).getAccessTokenCount++, n.getAccessTokenCount > 1 ? [
                            4,
                            p()
                        ] : [
                            3,
                            2
                        ];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return n.manualSetAccessToken || n._accessToken.length > 0 && t < n.accessTokenExpiresIn ? (s.getAccessTokenCount--, [
                            2,
                            Promise.resolve(n._accessToken)
                        ]) : (n.accessToken = "", [
                            4,
                            n.jumpAndGetToken((0, _constantsJs.COOKIE_NAME).ZOAUTH)
                        ]);
                    case 3:
                        return o = e.sent(), [
                            4,
                            n.jumpAndGetToken((0, _constantsJs.COOKIE_NAME).ZOAUTH_VRF)
                        ];
                    case 4:
                        return i = e.sent(), u = "zmp.getaccesstoken.fail", [
                            4,
                            n.verifyUserAuthorized()
                        ];
                    case 5:
                        if (!e.sent()) throw s.getAccessTokenCount--, (0, _utilsJs.sendLogData)([
                            {
                                action: u,
                                error: -104,
                                message: "no user auth",
                                data: {}
                            }
                        ]), (0, _responseJs.apiResponse).error.loginFailed("User Authentication Required");
                        if (!o) return [
                            3,
                            13
                        ];
                        e.label = 6;
                    case 6:
                        return e.trys.push([
                            6,
                            11,
                            ,
                            12
                        ]), i ? [
                            4,
                            n.loginZaloV4((0, _constantsJs.APP_ID), o, i)
                        ] : [
                            3,
                            8
                        ];
                    case 7:
                        return l = e.sent(), [
                            3,
                            10
                        ];
                    case 8:
                        return [
                            4,
                            n.loginZaloV3((0, _constantsJs.APP_ID), (0, _constantsJs.ZAPP_ID), o)
                        ];
                    case 9:
                        l = e.sent(), e.label = 10;
                    case 10:
                        return [
                            3,
                            12
                        ];
                    case 11:
                        return m = e.sent(), l = "", console.log("Can not get access token", m), (0, _utilsJs.sendLogData)([
                            {
                                action: u,
                                error: -103,
                                message: String(m) || "Can not get access token",
                                data: {}
                            }
                        ]), [
                            3,
                            12
                        ];
                    case 12:
                        return s.getAccessTokenCount--, l || (0, _utilsJs.sendLogData)([
                            {
                                action: u,
                                error: -101,
                                message: "no accessToken",
                                data: {}
                            }
                        ]), [
                            2,
                            Promise.resolve(n._accessToken)
                        ];
                    case 13:
                        throw s.getAccessTokenCount--, (0, _utilsJs.sendLogData)([
                            {
                                action: u,
                                error: -102,
                                message: "no oauth",
                                data: {}
                            }
                        ]), (0, _responseJs.apiResponse).error.loginFailed("Zalo app has not been activated");
                }
            });
        })();
    }, A.verifyUserAuthorized = function() {
        var n = this;
        return (0, _asyncToGeneratorMjsJsDefault.default)(function() {
            var e, t, s, o, r, i;
            return (0, _tslibEs6Js.__generator)(this, function(c) {
                switch(c.label){
                    case 0:
                        if (t = !0, !1 !== (null === (e = n._miniProgramConfig) || void 0 === e ? void 0 : e.userAuthorized)) return [
                            3,
                            6
                        ];
                        c.label = 1;
                    case 1:
                        return c.trys.push([
                            1,
                            5,
                            ,
                            6
                        ]), (s = (0, _commonJs.getDynamicAPIByAction)("action.mp.user.authorize")) && s.isSupported ? [
                            4,
                            (0, _getSettingJs.getSetting)()
                        ] : [
                            3,
                            4
                        ];
                    case 2:
                        return !1 !== (null == (r = c.sent()) || null === (o = r.authSetting) || void 0 === o ? void 0 : o["scope.userInfo"]) ? [
                            3,
                            4
                        ] : [
                            4,
                            (0, _authorizeJs.authorize)()
                        ];
                    case 3:
                        i = c.sent(), t = (null == i ? void 0 : i["scope.userInfo"]) || !1, c.label = 4;
                    case 4:
                        return [
                            3,
                            6
                        ];
                    case 5:
                        return c.sent(), t = !1, [
                            3,
                            6
                        ];
                    case 6:
                        return [
                            2,
                            t
                        ];
                }
            });
        })();
    }, A.setAccessToken = function(e) {
        this.manualSetAccessToken = !0, this._accessToken = e, window.ZJSBridge.setZAccSession && window.ZJSBridge.setZAccSession(e);
    }, A.getJSAccessToken = function() {
        var n = this;
        return (0, _asyncToGeneratorMjsJsDefault.default)(function() {
            var e;
            return (0, _tslibEs6Js.__generator)(this, function(t) {
                switch(t.label){
                    case 0:
                        return n._jsAccessToken.length > 0 ? [
                            2,
                            Promise.resolve(n._jsAccessToken)
                        ] : [
                            4,
                            n.jumpAndGetToken((0, _constantsJs.COOKIE_NAME).JS_TOKEN)
                        ];
                    case 1:
                        return e = t.sent(), [
                            2,
                            Promise.resolve(e)
                        ];
                }
            });
        })();
    }, A.getSync = function(e) {
        var n;
        return null === (n = this._cookies.find(function(n) {
            return n.name === e;
        })) || void 0 === n ? void 0 : n.value;
    }, A.jumpAndGetToken = function(n) {
        var t, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = this;
        return new Promise((t = (0, _asyncToGeneratorMjsJsDefault.default)(function(e) {
            var t, i, c, a;
            return (0, _tslibEs6Js.__generator)(this, function(u) {
                switch(u.label){
                    case 0:
                        return !s && r._cookies.length > 0 ? (0, _lodashJsDefault.default).isString(n) ? (t = r._cookies.find(function(e) {
                            return e.name === n;
                        }), [
                            2,
                            e(null == t ? void 0 : t.value)
                        ]) : [
                            2,
                            e("")
                        ] : (s && r._jumpStatus === (0, _enumJs.JumpStatus).DONE && (r._jumpStatus = void 0), i = {
                            name: n,
                            cb: function(n) {
                                return e(n);
                            }
                        }, [
                            4,
                            r.jump()
                        ]);
                    case 1:
                        return (c = u.sent()) === (0, _enumJs.JumpStatus).DONE ? (r._jumpStatus = c, r.WAITING_QUEUE.length && (r.WAITING_QUEUE.forEach(function(e) {
                            var n = r._cookies.find(function(n) {
                                return n.name === e.name;
                            });
                            e.cb(null == n ? void 0 : n.value);
                        }), r.WAITING_QUEUE = []), a = r._cookies.find(function(e) {
                            return e.name === i.name;
                        }), i.cb(null == a ? void 0 : a.value)) : r.WAITING_QUEUE.push(i), [
                            2
                        ];
                }
            });
        }), function(e) {
            return t.apply(this, arguments);
        }));
    }, v.getInstance = function() {
        return v.instance || (v.instance = new v), v.instance;
    }, (0, _createClassMjsJsDefault.default)(v, [
        {
            key: "jumpStatus",
            get: function() {
                return this._jumpStatus;
            }
        },
        {
            key: "accessToken",
            set: function(e) {
                this._accessToken = e, window.ZJSBridge.setZAccSession && window.ZJSBridge.setZAccSession(e);
            }
        },
        {
            key: "miniProgramConfig",
            get: function() {
                return this._miniProgramConfig;
            }
        }
    ]), v;
}(), A = v.getInstance();

},{"./../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","./../external/@swc/helpers/src/_class_call_check.mjs.js":"k3skc","./../external/@swc/helpers/src/_create_class.mjs.js":"aAy0d","./../external/@swc/helpers/src/_object_spread.mjs.js":"lcsba","../utils/lodash.js":"28xEQ","../constants.js":"fNy4G","./logger.js":"grjYH","./call/zaloNative.js":"hgDp1","../utils/response.js":"4HKAY","./utils.js":"xTmE8","../utils/common.js":"1HpFN","./../external/tslib/tslib.es6.js":"f0cFO","../types/enum.js":"dFF7D","../apis/authorize.js":"f1x2q","../apis/getSetting.js":"1s58O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k3skc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>a);
function a(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAy0d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>r);
function e(e, r) {
    for(var n = 0; n < r.length; n++){
        var t = r[n];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
    }
}
function r(r, n, t) {
    return n && e(r.prototype, n), t && e(r, t), r;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lcsba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>t);
var _definePropertyMjsJs = require("./_define_property.mjs.js");
var _definePropertyMjsJsDefault = parcelHelpers.interopDefault(_definePropertyMjsJs);
function t(t) {
    for(var r = 1; r < arguments.length; r++){
        var n = null != arguments[r] ? arguments[r] : {}, o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
        }))), o.forEach(function(r) {
            (0, _definePropertyMjsJsDefault.default)(t, r, n[r]);
        });
    }
    return t;
}

},{"./_define_property.mjs.js":"loSmW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loSmW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>e);
function e(e, r, n) {
    return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = n, e;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgDp1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>E);
var _asyncToGeneratorMjsJs = require("./../../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _constantsJs = require("../../constants.js");
var _lodashJs = require("../../utils/lodash.js");
var _lodashJsDefault = parcelHelpers.interopDefault(_lodashJs);
var _eventEmitterJs = require("../eventEmitter.js");
var _commonJs = require("../../utils/common.js");
var _tokenJs = require("../token.js");
var _tokenJsDefault = parcelHelpers.interopDefault(_tokenJs);
var _utilsJs = require("../utils.js");
var _getSettingJs = require("../apis/general/getSetting.js");
var _getSettingJsDefault = parcelHelpers.interopDefault(_getSettingJs);
var _getEnvJs = require("../../appEnv/getEnv.js");
var _getEnvJsDefault = parcelHelpers.interopDefault(_getEnvJs);
var _tslibEs6Js = require("./../../external/tslib/tslib.es6.js");
var _enumJs = require("../../types/enum.js");
var h, I, b, T, M, j, E = (b = (0, _getEnvJsDefault.default)(), T = {}, M = (0, _eventEmitterJs.MPEEmitter).getInstance(), j = [], (0, _eventEmitterJs.onActionMessage)(function(o) {
    var e = o.serialId, a = (0, _commonJs.parseJSON)(o.result), r = (0, _commonJs.getDynamicAPIByAction)(null == a ? void 0 : a.action), i = (0, _lodashJsDefault.default).isEmpty(null == a ? void 0 : a.error_code) ? 0 : null == a ? void 0 : a.error_code, l = null == a ? void 0 : a.error_message, c = (null == a ? void 0 : a.data) || a;
    if (r && 0 === i) {
        var u = JSON.parse(null == a ? void 0 : a.data);
        i = (0, _lodashJsDefault.default).isEmpty(null == u ? void 0 : u.error_code) ? 0 : null == u ? void 0 : u.error_code, l = null == u ? void 0 : u.error_message, c = (null == u ? void 0 : u.data) || u;
    }
    var d = {
        error_code: i,
        error_message: l,
        data: c,
        action: (null == a ? void 0 : a.action) || o.actionName
    };
    if (e && T[e]) {
        var m = T[e], v = m.callback, p = m.timeout, f = m.isMultiCallback, _ = m.options;
        !function(o, e) {
            var a = e || {}, r = a.success, i = a.fail;
            0 === o.error_code ? (0, _lodashJsDefault.default).isFunction(r) && r(o) : (0, _lodashJsDefault.default).isFunction(i) && i(o);
        }(d, v), !f && delete T[e], p && clearTimeout(p);
        var g = {
            action: null == d ? void 0 : d.action,
            error: null == d ? void 0 : d.error_code,
            message: null == d ? void 0 : d.error_message,
            data: {}
        };
        try {
            if ("action.open.inapp" === d.action || "action.open.outapp" === d.action) {
                var h = new URL(null == _ ? void 0 : _.url), I = "".concat(h.protocol, "//").concat(h.host).concat(h.pathname);
                g.data = {
                    url: I
                };
            }
            if ("action.follow.oa" === d.action || "action.unfollow.oa" === d.action) {
                var b = null == _ ? void 0 : _.uid;
                g.data = {
                    uid: b
                };
            }
            if ("action.open.chat" === d.action) {
                var M = null == _ ? void 0 : _.uId, E = null == _ ? void 0 : _.type;
                g.data = {
                    uid: M,
                    openChatType: E
                };
            }
        } catch (o) {}
        j.push(g);
    }
}), M.on((0, _enumJs.Events).AppPaused, function() {
    if (j.length > 0) {
        var o = j;
        j = [], (0, _utilsJs.sendLogData)(o);
    }
}), h ? clearInterval(h) : h = setInterval(function() {
    if (j.length > 0) {
        var o = j;
        j = [], (0, _utilsJs.sendLogData)(o);
    }
}, 5e3), I = (0, _asyncToGeneratorMjsJsDefault.default)(function(o, r, i, n) {
    var v, f, g, h, I, M, j, E, N, S, k, w, O, U, y, C, A, J, P, R, L, Z, D, F, H;
    return (0, _tslibEs6Js.__generator)(this, function(_) {
        switch(_.label){
            case 0:
                return f = Math.floor(1e6 * Math.random()), g = "".concat(o, "_").concat(f), h = "action.".concat(o.replace(/\_/g, ".").toLowerCase()), (null == n ? void 0 : n.actionName) && n.actionName.length > 0 && (h = null == n ? void 0 : n.actionName), I = (null == n ? void 0 : n.isMultiCallback) || !1, M = !1 !== (null == n ? void 0 : n.timeout) && ((null == n ? void 0 : n.timeout) || !0), j = (null == n ? void 0 : n.haveActionCallback) || !1, E = (null == n ? void 0 : n.skipJump) || !1, N = (null == n ? void 0 : n.requireAccessToken) || !1, S = (0, _commonJs.isRequireUserAuthentication)(h), r && i && (T[g] = {
                    options: r,
                    callback: i,
                    isMultiCallback: I
                }, M && j && (T[g].timeout = setTimeout(function() {
                    var t = {
                        serialId: g,
                        result: {
                            error_code: (0, _constantsJs.RESPONSE_CODE).TIME_OUT,
                            error_message: (0, _constantsJs.MESSAGES).TIME_OUT,
                            data: {
                                timeout: M
                            },
                            action: o
                        }
                    };
                    return (0, _eventEmitterJs.fireActionMessage)(t), null;
                }, !0 === M ? 8e3 : 1e3 * M))), S ? [
                    4,
                    (0, _getSettingJsDefault.default)()
                ] : [
                    3,
                    2
                ];
            case 1:
                if (!1 === (null == (w = _.sent()) || null === (k = w.authSetting) || void 0 === k ? void 0 : k["scope.userInfo"])) return U = {
                    serialId: g,
                    result: {
                        error_code: (0, _constantsJs.RESPONSE_CODE).UNAUTHORIZED,
                        error_message: (0, _constantsJs.MESSAGES).NEED_USER_AUTH,
                        data: {
                            isMobile: null == b || null === (O = b.platform) || void 0 === O ? void 0 : O.isMobile
                        },
                        action: o
                    }
                }, (0, _eventEmitterJs.fireActionMessage)(U), [
                    2
                ];
                _.label = 2;
            case 2:
                return y = (0, _commonJs.getDynamicAPIByAction)(h), !(null == b || null === (v = b.platform) || void 0 === v ? void 0 : v.isMobile) || !o || (0, _lodashJsDefault.default).isUndefined(ZaloJavaScriptInterface) || b.platform.isIOS && !(0, _commonJs.checkIOSSupportAction)(o) || y && !1 === y.isSupported ? (A = {
                    serialId: g,
                    result: {
                        error_code: (0, _constantsJs.RESPONSE_CODE).CLIENT_NOT_SUPPORT,
                        error_message: (0, _constantsJs.MESSAGES).CLIENT_NOT_SUPPORT,
                        data: {
                            isMobile: null == b || null === (C = b.platform) || void 0 === C ? void 0 : C.isMobile
                        },
                        action: o
                    }
                }, (0, _eventEmitterJs.fireActionMessage)(A), [
                    2
                ]) : (J = (0, _commonJs.serialize)(r), E ? [
                    3,
                    4
                ] : [
                    4,
                    (0, _tokenJsDefault.default).getJSAccessToken()
                ]);
            case 3:
                return R = _.sent(), [
                    3,
                    5
                ];
            case 4:
                R = "", _.label = 5;
            case 5:
                P = R, _.label = 6;
            case 6:
                return _.trys.push([
                    6,
                    10,
                    ,
                    11
                ]), E || !N ? [
                    3,
                    8
                ] : [
                    4,
                    (0, _tokenJsDefault.default).getAccessToken()
                ];
            case 7:
                return Z = _.sent(), [
                    3,
                    9
                ];
            case 8:
                Z = "", _.label = 9;
            case 9:
                return L = Z, [
                    3,
                    11
                ];
            case 10:
                return D = _.sent(), F = {
                    serialId: g,
                    result: {
                        error_code: null == D ? void 0 : D.code,
                        error_message: null == D ? void 0 : D.message,
                        action: o
                    }
                }, (0, _eventEmitterJs.fireActionMessage)(F), [
                    2
                ];
            case 11:
                return H = b.platform.isIOS ? window.onNativeMessage(g, h) : 'window.onNativeMessage("'.concat(g, '", "').concat(h, '")'), [
                    2,
                    ZaloJavaScriptInterface.jsCall(P, h, L, J, H)
                ];
        }
    });
}), function(o, e, a, t) {
    return I.apply(this, arguments);
});

},{"./../../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","../../constants.js":"fNy4G","../../utils/lodash.js":"28xEQ","../eventEmitter.js":"74Qp7","../../utils/common.js":"1HpFN","../token.js":"4rqJX","../utils.js":"xTmE8","../apis/general/getSetting.js":"hGZ1d","../../appEnv/getEnv.js":"4G0wJ","./../../external/tslib/tslib.es6.js":"f0cFO","../../types/enum.js":"dFF7D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74Qp7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MPEEmitter", ()=>p);
parcelHelpers.export(exports, "fireActionMessage", ()=>f);
parcelHelpers.export(exports, "onActionMessage", ()=>u);
var _classCallCheckMjsJs = require("./../external/@swc/helpers/src/_class_call_check.mjs.js");
var _classCallCheckMjsJsDefault = parcelHelpers.interopDefault(_classCallCheckMjsJs);
var _getMjsJs = require("./../external/@swc/helpers/src/_get.mjs.js");
var _getMjsJsDefault = parcelHelpers.interopDefault(_getMjsJs);
var _getPrototypeOfMjsJs = require("./../external/@swc/helpers/src/_get_prototype_of.mjs.js");
var _getPrototypeOfMjsJsDefault = parcelHelpers.interopDefault(_getPrototypeOfMjsJs);
var _inheritsMjsJs = require("./../external/@swc/helpers/src/_inherits.mjs.js");
var _inheritsMjsJsDefault = parcelHelpers.interopDefault(_inheritsMjsJs);
var _createSuperMjsJs = require("./../external/@swc/helpers/src/_create_super.mjs.js");
var _createSuperMjsJsDefault = parcelHelpers.interopDefault(_createSuperMjsJs);
var _indexJs = require("./../external/eventemitter3/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _debugJs = require("../utils/debug.js");
var _debugJsDefault = parcelHelpers.interopDefault(_debugJs);
var _commonJs = require("../utils/common.js");
var _constantsJs = require("../constants.js");
var _enumJs = require("../types/enum.js");
var l = "ACTION_CALLBACK";
var p = function(a) {
    (0, _inheritsMjsJsDefault.default)(i, a);
    var c = (0, _createSuperMjsJsDefault.default)(i);
    function i() {
        var e;
        return (0, _classCallCheckMjsJsDefault.default)(this, i), (e = c.apply(this, arguments)).debug = (0, _debugJsDefault.default)("zmp:event-emitter"), e;
    }
    var p = i.prototype;
    return p.h5ConfirmHandleEvent = function(t, e, n) {
        ZaloJavaScriptInterface.jsH5EventCallback(t, e, n || "");
    }, p.on = function(t, o, r) {
        var a = this;
        if (t === l || t === (0, _enumJs.Events).PaymentCallback) return (0, _getMjsJsDefault.default)((0, _getPrototypeOfMjsJsDefault.default)(i.prototype), "on", this).call(this, t, o, r);
        this.debug("register ".concat(String(t), ": ").concat(r));
        return (0, _getMjsJsDefault.default)((0, _getPrototypeOfMjsJsDefault.default)(i.prototype), "on", this).call(this, t, function(e, n) {
            a.h5ConfirmHandleEvent(e, t, r), o(n);
        }, r);
    }, p.once = function(t, o, r) {
        var a = this;
        if (t === l) return (0, _getMjsJsDefault.default)((0, _getPrototypeOfMjsJsDefault.default)(i.prototype), "once", this).call(this, t, o, r);
        this.debug("register once ".concat(String(t), ": ").concat(r));
        return (0, _getMjsJsDefault.default)((0, _getPrototypeOfMjsJsDefault.default)(i.prototype), "once", this).call(this, t, function(e, n) {
            a.h5ConfirmHandleEvent(e, t, r), o(n);
        }, r);
    }, i.getInstance = function() {
        return i.instance || (i.instance = new i), i.instance;
    }, i;
}((0, _indexJsDefault.default));
function u(t) {
    p.getInstance().on(l, t);
}
function f(t) {
    p.getInstance().emit(l, t);
}
window.onNativeMessage = function(t, e) {
    return function(n) {
        f({
            serialId: t,
            actionName: e,
            result: n
        });
    };
}, window.zaloJSV2 = {
    zalo_h5_event_handler: function(t, e, n) {
        var o = (0, _debugJsDefault.default)("zmp:zalo_h5_event_handler");
        o("eventId: ".concat(t, ", eventName: ").concat(e, ", eventData: ").concat(n));
        var r = (0, _commonJs.stringToData)(n);
        o("stringToData", r);
        var a = function(t, e) {
            try {
                if (t === (0, _enumJs.Events).OpenApp) {
                    var n = e.url, o = new URL(n), r = o.pathname.split("/zapps/".concat((0, _constantsJs.APP_ID)))[1];
                    return {
                        path: "".concat(r || "/").concat(o.search)
                    };
                }
                return e;
            } catch (t) {
                return e;
            }
        }(e, r);
        p.getInstance().emit(e, t, a);
    }
}, window.zaloNative2JS = {
    nativeCall: function(t, e, n) {
        p.getInstance().emit((0, _enumJs.Events).PaymentCallback, t, e, n);
    }
};

},{"./../external/@swc/helpers/src/_class_call_check.mjs.js":"k3skc","./../external/@swc/helpers/src/_get.mjs.js":"hH5J0","./../external/@swc/helpers/src/_get_prototype_of.mjs.js":"5A8O0","./../external/@swc/helpers/src/_inherits.mjs.js":"1y9vA","./../external/@swc/helpers/src/_create_super.mjs.js":"l503x","./../external/eventemitter3/index.js":"1JDfX","../utils/debug.js":"b9c6Q","../utils/common.js":"1HpFN","../constants.js":"fNy4G","../types/enum.js":"dFF7D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hH5J0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>r);
var _superPropBaseMjsJs = require("./_super_prop_base.mjs.js");
var _superPropBaseMjsJsDefault = parcelHelpers.interopDefault(_superPropBaseMjsJs);
function t(r, n, f) {
    return t = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, r, n) {
        var f = (0, _superPropBaseMjsJsDefault.default)(t, r);
        if (f) {
            var o = Object.getOwnPropertyDescriptor(f, r);
            return o.get ? o.get.call(n || t) : o.value;
        }
    }, t(r, n, f);
}
function r(e, r, n) {
    return t(e, r, n);
}

},{"./_super_prop_base.mjs.js":"6czCr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6czCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>o);
var _getPrototypeOfMjsJs = require("./_get_prototype_of.mjs.js");
var _getPrototypeOfMjsJsDefault = parcelHelpers.interopDefault(_getPrototypeOfMjsJs);
function o(o, r) {
    for(; !Object.prototype.hasOwnProperty.call(o, r) && null !== (o = (0, _getPrototypeOfMjsJsDefault.default)(o)););
    return o;
}

},{"./_get_prototype_of.mjs.js":"5A8O0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5A8O0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>e);
function t(e) {
    return t = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, t(e);
}
function e(e) {
    return t(e);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1y9vA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>e);
var _setPrototypeOfMjsJs = require("./_set_prototype_of.mjs.js");
var _setPrototypeOfMjsJsDefault = parcelHelpers.interopDefault(_setPrototypeOfMjsJs);
function e(e, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), o && (0, _setPrototypeOfMjsJsDefault.default)(e, o);
}

},{"./_set_prototype_of.mjs.js":"lNtHB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lNtHB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>n);
function t(n, r) {
    return t = Object.setPrototypeOf || function(t, n) {
        return t.__proto__ = n, t;
    }, t(n, r);
}
function n(n, r) {
    return t(n, r);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l503x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>s);
var _isNativeReflectConstructMjsJs = require("./_is_native_reflect_construct.mjs.js");
var _isNativeReflectConstructMjsJsDefault = parcelHelpers.interopDefault(_isNativeReflectConstructMjsJs);
var _getPrototypeOfMjsJs = require("./_get_prototype_of.mjs.js");
var _getPrototypeOfMjsJsDefault = parcelHelpers.interopDefault(_getPrototypeOfMjsJs);
var _possibleConstructorReturnMjsJs = require("./_possible_constructor_return.mjs.js");
var _possibleConstructorReturnMjsJsDefault = parcelHelpers.interopDefault(_possibleConstructorReturnMjsJs);
function s(s) {
    var e = (0, _isNativeReflectConstructMjsJsDefault.default)();
    return function() {
        var t, c = (0, _getPrototypeOfMjsJsDefault.default)(s);
        if (e) {
            var i = (0, _getPrototypeOfMjsJsDefault.default)(this).constructor;
            t = Reflect.construct(c, arguments, i);
        } else t = c.apply(this, arguments);
        return (0, _possibleConstructorReturnMjsJsDefault.default)(this, t);
    };
}

},{"./_is_native_reflect_construct.mjs.js":"3ADol","./_get_prototype_of.mjs.js":"5A8O0","./_possible_constructor_return.mjs.js":"3w5rK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ADol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>t);
function t() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch (t) {
        return !1;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3w5rK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>i);
var _assertThisInitializedMjsJs = require("./_assert_this_initialized.mjs.js");
var _assertThisInitializedMjsJsDefault = parcelHelpers.interopDefault(_assertThisInitializedMjsJs);
var _typeOfMjsJs = require("./_type_of.mjs.js");
var _typeOfMjsJsDefault = parcelHelpers.interopDefault(_typeOfMjsJs);
function i(i, e) {
    return !e || "object" !== (0, _typeOfMjsJsDefault.default)(e) && "function" != typeof e ? (0, _assertThisInitializedMjsJsDefault.default)(i) : e;
}

},{"./_assert_this_initialized.mjs.js":"jrUng","./_type_of.mjs.js":"7WZGo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jrUng":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>e);
function e(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JDfX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__moduleExports", ()=>t);
parcelHelpers.export(exports, "default", ()=>n);
var _commonjsHelpersJs = require("../../_virtual/_commonjsHelpers.js");
var t = (0, _commonjsHelpersJs.createCommonjsModule)(function(e) {
    var t = Object.prototype.hasOwnProperty, n = "~";
    function r() {}
    function o(e, t, n) {
        this.fn = e, this.context = t, this.once = n || !1;
    }
    function s(e, t, r, s, i) {
        if ("function" != typeof r) throw new TypeError("The listener must be a function");
        var c = new o(r, s || e, i), f = n ? n + t : t;
        return e._events[f] ? e._events[f].fn ? e._events[f] = [
            e._events[f],
            c
        ] : e._events[f].push(c) : (e._events[f] = c, e._eventsCount++), e;
    }
    function i(e, t) {
        0 == --e._eventsCount ? e._events = new r : delete e._events[t];
    }
    function c() {
        this._events = new r, this._eventsCount = 0;
    }
    Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (n = !1)), c.prototype.eventNames = function() {
        var e, r, o = [];
        if (0 === this._eventsCount) return o;
        for(r in e = this._events)t.call(e, r) && o.push(n ? r.slice(1) : r);
        return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o;
    }, c.prototype.listeners = function(e) {
        var t = n ? n + e : e, r = this._events[t];
        if (!r) return [];
        if (r.fn) return [
            r.fn
        ];
        for(var o = 0, s = r.length, i = new Array(s); o < s; o++)i[o] = r[o].fn;
        return i;
    }, c.prototype.listenerCount = function(e) {
        var t = n ? n + e : e, r = this._events[t];
        return r ? r.fn ? 1 : r.length : 0;
    }, c.prototype.emit = function(e, t, r, o, s, i) {
        var c = n ? n + e : e;
        if (!this._events[c]) return !1;
        var f, a, u = this._events[c], l = arguments.length;
        if (u.fn) {
            switch(u.once && this.removeListener(e, u.fn, void 0, !0), l){
                case 1:
                    return u.fn.call(u.context), !0;
                case 2:
                    return u.fn.call(u.context, t), !0;
                case 3:
                    return u.fn.call(u.context, t, r), !0;
                case 4:
                    return u.fn.call(u.context, t, r, o), !0;
                case 5:
                    return u.fn.call(u.context, t, r, o, s), !0;
                case 6:
                    return u.fn.call(u.context, t, r, o, s, i), !0;
            }
            for(a = 1, f = new Array(l - 1); a < l; a++)f[a - 1] = arguments[a];
            u.fn.apply(u.context, f);
        } else {
            var v, p = u.length;
            for(a = 0; a < p; a++)switch(u[a].once && this.removeListener(e, u[a].fn, void 0, !0), l){
                case 1:
                    u[a].fn.call(u[a].context);
                    break;
                case 2:
                    u[a].fn.call(u[a].context, t);
                    break;
                case 3:
                    u[a].fn.call(u[a].context, t, r);
                    break;
                case 4:
                    u[a].fn.call(u[a].context, t, r, o);
                    break;
                default:
                    if (!f) for(v = 1, f = new Array(l - 1); v < l; v++)f[v - 1] = arguments[v];
                    u[a].fn.apply(u[a].context, f);
            }
        }
        return !0;
    }, c.prototype.on = function(e, t, n) {
        return s(this, e, t, n, !1);
    }, c.prototype.once = function(e, t, n) {
        return s(this, e, t, n, !0);
    }, c.prototype.removeListener = function(e, t, r, o) {
        var s = n ? n + e : e;
        if (!this._events[s]) return this;
        if (!t) return i(this, s), this;
        var c = this._events[s];
        if (c.fn) c.fn !== t || o && !c.once || r && c.context !== r || i(this, s);
        else {
            for(var f = 0, a = [], u = c.length; f < u; f++)(c[f].fn !== t || o && !c[f].once || r && c[f].context !== r) && a.push(c[f]);
            a.length ? this._events[s] = 1 === a.length ? a[0] : a : i(this, s);
        }
        return this;
    }, c.prototype.removeAllListeners = function(e) {
        var t;
        return e ? (t = n ? n + e : e, this._events[t] && i(this, t)) : (this._events = new r, this._eventsCount = 0), this;
    }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = n, c.EventEmitter = c, e.exports = c;
}), n = t;

},{"../../_virtual/_commonjsHelpers.js":"fM5e9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fM5e9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCommonjsModule", ()=>r);
function r(r, t) {
    return r(t = {
        exports: {}
    }, t.exports), t.exports;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"xTmE8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelToSnakeCase", ()=>d);
parcelHelpers.export(exports, "getAppInfo", ()=>i);
parcelHelpers.export(exports, "sendLogData", ()=>c);
var _asyncToGeneratorMjsJs = require("./../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _queryStringJs = require("../utils/query-string.js");
var _queryStringJsDefault = parcelHelpers.interopDefault(_queryStringJs);
var _constantsJs = require("../constants.js");
var _lodashJs = require("../utils/lodash.js");
var _lodashJsDefault = parcelHelpers.interopDefault(_lodashJs);
var _requestJs = require("../utils/request.js");
var _requestJsDefault = parcelHelpers.interopDefault(_requestJs);
var _tslibEs6Js = require("./../external/tslib/tslib.es6.js");
var s, i = (s = (0, _asyncToGeneratorMjsJsDefault.default)(function(r, o, s) {
    var i, c, d, p;
    return (0, _tslibEs6Js.__generator)(this, function(a) {
        switch(a.label){
            case 0:
                return i = {
                    appId: r,
                    versionStatus: o
                }, (0, _lodashJsDefault.default).isUndefined(s) || (i.currentVersion = s), c = (0, _queryStringJsDefault.default).appendToUrl((0, _constantsJs.APIS).GET_APP_INFO, i), [
                    4,
                    fetch(c, {
                        credentials: "include"
                    })
                ];
            case 1:
                return (d = a.sent()).ok ? [
                    4,
                    d.json()
                ] : [
                    3,
                    3
                ];
            case 2:
                if ((p = a.sent()).err < 0 || !p.data) throw new Error(p);
                return [
                    2,
                    {
                        name: p.data.name,
                        version: p.data.version,
                        description: p.data.description,
                        appUrl: p.data.appUrl,
                        qrCodeUrl: p.data.qrCodeUrl,
                        logoUrl: p.data.logoUrl
                    }
                ];
            case 3:
                throw new Error("Can't get app info");
        }
    });
}), function(r, t, e) {
    return s.apply(this, arguments);
});
function c(r) {
    try {
        var t = r.map(function(r) {
            return {
                action: r.action,
                error: r.error,
                message: r.message,
                data: r.data
            };
        });
        (0, _requestJsDefault.default).execute((0, _constantsJs.APIS).SEND_ACTION_LOG, "post", {
            appId: window.APP_ID,
            data: JSON.stringify(t)
        }, function() {}), window.zmpSentry && window.zmpSentry.captureMessage("Result from native", {
            extra: {
                data: r
            }
        });
    } catch (r) {}
}
var d = function(r) {
    return r.replace(/[A-Z]/g, function(r) {
        return "_".concat(r.toLowerCase());
    });
};

},{"./../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","../utils/query-string.js":"hMuIl","../constants.js":"fNy4G","../utils/lodash.js":"28xEQ","../utils/request.js":"eNiPL","./../external/tslib/tslib.es6.js":"f0cFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hMuIl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>o);
var _typeOfMjsJs = require("./../external/@swc/helpers/src/_type_of.mjs.js");
var _typeOfMjsJsDefault = parcelHelpers.interopDefault(_typeOfMjsJs);
function n(e) {
    var n = [];
    for(var o in e)if (e.hasOwnProperty(o)) {
        var r = e[o];
        if (void 0 === r) return;
        if (null === r) return void n.push(o);
        n.push(encodeURIComponent(o) + "=" + encodeURIComponent(r));
    }
    return n.join("&");
}
var o = {
    encode: n,
    decode: function(e, n) {
        var o = {};
        if ("" === e) return o;
        for(var r = e.split("&"), t = 0; t < r.length; t++){
            var i = r[t].split("=", 2), p = decodeURIComponent(i[0]);
            if (n && Object.prototype.hasOwnProperty.call(o, p)) throw new URIError("Duplicate key: " + p);
            o[p] = 2 === i.length ? decodeURIComponent(i[1]) : null;
        }
        return o;
    },
    appendToUrl: function(e, o) {
        return e + (-1 !== e.indexOf("?") ? "&" : "?") + ("string" == typeof o ? o : n(o));
    },
    getParameterByName: function(e, n) {
        n || (n = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
        var o = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(n);
        return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null;
    },
    getParamsAsObject: function(e) {
        var n = {};
        return e ? (e.split("&").map(function(e) {
            var o = e.split("=");
            o && 2 == o.length && (n[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")));
        }), n) : n;
    },
    toQueryString: function(n) {
        if (!n) return "";
        if ("object" != (void 0 === n || void 0 === n ? "undefined" : (0, _typeOfMjsJsDefault.default)(n))) return n;
        var o = Object.keys(n), r = [];
        return o.map(function(o) {
            var t = n[o], i = [
                o,
                t = "object" == (void 0 === t || void 0 === t ? "undefined" : (0, _typeOfMjsJsDefault.default)(t)) ? JSON.stringify(t) : encodeURIComponent(t)
            ].join("=");
            r.push(i);
        }), r.join("&");
    }
};

},{"./../external/@swc/helpers/src/_type_of.mjs.js":"7WZGo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNiPL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>u);
var _queryStringJs = require("./query-string.js");
var _queryStringJsDefault = parcelHelpers.interopDefault(_queryStringJs);
var t = {}, n = function(e, n, r) {
    var o = n || "default";
    return function() {
        return (o in t ? t[o](e, r) : e).apply(this, arguments);
    };
};
n.setWrapper = function(e) {
    t[arguments.length <= 1 || void 0 === arguments[1] ? "default" : arguments[1]] = e;
};
var r = {
    error: {
        code: 1,
        error_subcode: 1357046,
        message: "Received Invalid JSON reply.",
        type: "http"
    }
};
function o(e) {
    try {
        return null === e ? r : JSON.parse(e);
    } catch (e) {
        return r;
    }
}
var u = {
    execute: function(t, r, u, s) {
        u.suppress_http_code = 1;
        var a = (0, _queryStringJsDefault.default).encode(u);
        "post" != r && (t = (0, _queryStringJsDefault.default).appendToUrl(t, a), a = "");
        var i = function(e, t) {
            if (!self.XMLHttpRequest) return null;
            var r = new XMLHttpRequest, o = function() {};
            if (!("withCredentials" in r)) return null;
            r.open(e, t, !0), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            var u = {
                send: function(e) {
                    r.send(e);
                }
            }, s = n(function() {
                s = o, "onload" in u && u.onload(r);
            }, "entry", "XMLHttpRequest:load"), a = n(function() {
                a = o, "onerror" in u && u.onerror(r);
            }, "entry", "XMLHttpRequest:error");
            return r.onload = function() {
                s();
            }, r.onerror = function() {
                a();
            }, r.onreadystatechange = function() {
                4 == r.readyState && (200 == r.status ? s() : a());
            }, u;
        }(r, t);
        return !!i && (i.onload = function(e) {
            s(o(e.responseText));
        }, i.onerror = function(e) {
            e.responseText ? s(o(e.responseText)) : s({
                error: {
                    code: 1,
                    error_subcode: 1357045,
                    message: "unknown error (empty response)",
                    status: e.status,
                    type: "http"
                }
            });
        }, i.send(a), !0);
    }
};

},{"./query-string.js":"hMuIl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGZ1d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>m);
parcelHelpers.export(exports, "getAuthenSettings", ()=>c);
var _asyncToGeneratorMjsJs = require("./../../../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _objectSpreadMjsJs = require("./../../../external/@swc/helpers/src/_object_spread.mjs.js");
var _objectSpreadMjsJsDefault = parcelHelpers.interopDefault(_objectSpreadMjsJs);
var _constantsJs = require("../../../constants.js");
var _tokenJs = require("../../token.js");
var _tokenJsDefault = parcelHelpers.interopDefault(_tokenJs);
var _errorHandlerJs = require("../../../utils/errorHandler.js");
var _tslibEs6Js = require("./../../../external/tslib/tslib.es6.js");
var u, c = (u = (0, _asyncToGeneratorMjsJsDefault.default)(function(e) {
    var r;
    return (0, _tslibEs6Js.__generator)(this, function(n) {
        switch(n.label){
            case 0:
                return r = {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        authorization: "Bearer ".concat(e)
                    }
                }, [
                    4,
                    fetch((0, _constantsJs.APIS).GET_AUTH_SETTING, (0, _objectSpreadMjsJsDefault.default)({
                        method: "GET"
                    }, r))
                ];
            case 1:
                return [
                    4,
                    n.sent().json()
                ];
            case 2:
                return [
                    2,
                    n.sent()
                ];
        }
    });
}), function(e) {
    return u.apply(this, arguments);
}), m = (0, _asyncToGeneratorMjsJsDefault.default)(function() {
    return (0, _tslibEs6Js.__generator)(this, function(t) {
        var s;
        return [
            2,
            new Promise((s = (0, _asyncToGeneratorMjsJsDefault.default)(function(e, t) {
                var s, u, m, l;
                return (0, _tslibEs6Js.__generator)(this, function(a) {
                    switch(a.label){
                        case 0:
                            return a.trys.push([
                                0,
                                3,
                                ,
                                4
                            ]), [
                                4,
                                (0, _tokenJsDefault.default).jumpAndGetToken()
                            ];
                        case 1:
                            return a.sent(), (u = null === (s = (0, _tokenJsDefault.default).miniProgramConfig) || void 0 === s ? void 0 : s.jwt) || t(new (0, _errorHandlerJs.AppError)((0, _constantsJs.RESPONSE_CODE).UNAUTHORIZED, (0, _constantsJs.MESSAGES).LOGIN_REQUIRED, "getSetting")), [
                                4,
                                c(u)
                            ];
                        case 2:
                            return (m = a.sent()) && 0 === m.err ? e({
                                authSetting: m.data
                            }) : t(new (0, _errorHandlerJs.AppError)(m.err, m.msg, "getSetting")), [
                                3,
                                4
                            ];
                        case 3:
                            return l = a.sent(), t(l), [
                                3,
                                4
                            ];
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            }), function(e, t) {
                return s.apply(this, arguments);
            }))
        ];
    });
});

},{"./../../../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","./../../../external/@swc/helpers/src/_object_spread.mjs.js":"lcsba","../../../constants.js":"fNy4G","../../token.js":"4rqJX","../../../utils/errorHandler.js":"dKo6k","./../../../external/tslib/tslib.es6.js":"f0cFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dKo6k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppError", ()=>n);
parcelHelpers.export(exports, "errorHandler", ()=>r);
var _classCallCheckMjsJs = require("./../external/@swc/helpers/src/_class_call_check.mjs.js");
var _classCallCheckMjsJsDefault = parcelHelpers.interopDefault(_classCallCheckMjsJs);
var _instanceofMjsJs = require("./../external/@swc/helpers/src/_instanceof.mjs.js");
var _instanceofMjsJsDefault = parcelHelpers.interopDefault(_instanceofMjsJs);
var _lodashJs = require("./lodash.js");
var _lodashJsDefault = parcelHelpers.interopDefault(_lodashJs);
var _constantsJs = require("../constants.js");
var n = function() {
    function s(e, o, i, n) {
        (0, _classCallCheckMjsJsDefault.default)(this, s), this.code = e, this.message = o, this.api = i, this.detail = n;
    }
    var e = s.prototype;
    return e.toString = function() {
        return "api: ".concat(String(this.api), "; code: ").concat(this.code, "; message: ").concat(JSON.stringify(this.message));
    }, e.toJSON = function() {
        return {
            code: this.code,
            message: this.message,
            api: this.api,
            detail: this.detail
        };
    }, s;
}(), r = function(t, r) {
    return (0, _instanceofMjsJsDefault.default)(t, n) ? function(t, s) {
        return t.api = s, t.toJSON();
    }(t, r) : function(t, r) {
        return (0, _instanceofMjsJsDefault.default)(t, Error) ? new n((0, _constantsJs.RESPONSE_CODE).UNKNOWN_ERROR, t.message, r).toJSON() : (0, _lodashJsDefault.default).isEmpty(null == t ? void 0 : t.message) || (0, _lodashJsDefault.default).isEmpty(null == t ? void 0 : t.code) ? new n((0, _constantsJs.RESPONSE_CODE).UNKNOWN_ERROR, (0, _constantsJs.MESSAGES).UNKNOWN_ERROR, r, t).toJSON() : new n(t.code, t.message, r, t.detail).toJSON();
    }(t, r);
};

},{"./../external/@swc/helpers/src/_class_call_check.mjs.js":"k3skc","./../external/@swc/helpers/src/_instanceof.mjs.js":"aZyMi","./lodash.js":"28xEQ","../constants.js":"fNy4G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZyMi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>n);
function n(n, e) {
    return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](n) : n instanceof e;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4HKAY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "apiResponse", ()=>o);
var _constantsJs = require("../constants.js");
var _errorHandlerJs = require("./errorHandler.js");
var o = {
    success: function(r, t) {
        return {
            code: (0, _constantsJs.RESPONSE_CODE).SUCCESS,
            message: t || (0, _constantsJs.MESSAGES).SUCCESS,
            data: r || {}
        };
    },
    error: {
        badRequest: function(e) {
            return new (0, _errorHandlerJs.AppError)((0, _constantsJs.RESPONSE_CODE).BAD_REQUEST, e);
        },
        loginFailed: function(r) {
            return new (0, _errorHandlerJs.AppError)((0, _constantsJs.RESPONSE_CODE).UNAUTHORIZED, "".concat((0, _constantsJs.MESSAGES).LOGIN_FAILED, ": ").concat(r));
        },
        loginRequired: function() {
            return new (0, _errorHandlerJs.AppError)((0, _constantsJs.RESPONSE_CODE).UNAUTHORIZED, (0, _constantsJs.MESSAGES).LOGIN_REQUIRED);
        },
        cannotGetShareInfo: function() {
            return new (0, _errorHandlerJs.AppError)((0, _constantsJs.RESPONSE_CODE).INTERNAL_SERVER_ERROR, "Can not get app info to share");
        },
        createIAPOrderFailed: function(n) {
            var o = Object.keys((0, _constantsJs.IAP_ERROR)).find(function(e) {
                return e === n.toString();
            });
            return new (0, _errorHandlerJs.AppError)(n, o || (0, _constantsJs.MESSAGES).UNKNOWN_ERROR);
        },
        clientNotSupport: function() {
            return new (0, _errorHandlerJs.AppError)((0, _constantsJs.RESPONSE_CODE).CLIENT_NOT_SUPPORT, (0, _constantsJs.MESSAGES).CLIENT_NOT_SUPPORT);
        }
    }
};

},{"../constants.js":"fNy4G","./errorHandler.js":"dKo6k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f1x2q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "authorize", ()=>p);
var _asyncToGeneratorMjsJs = require("./../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _indexJs = require("../appEnv/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _notFoundJs = require("../common/notFound.js");
var _notFoundJsDefault = parcelHelpers.interopDefault(_notFoundJs);
var _decoratorJs = require("../utils/decorator.js");
var _authorizeJs = require("../common/apis/general/authorize.js");
var _authorizeJsDefault = parcelHelpers.interopDefault(_authorizeJs);
var _indexMjsJs = require("./../external/zod/lib/index.mjs.js");
var _indexMjsJsDefault = parcelHelpers.interopDefault(_indexMjsJs);
var _tslibEs6Js = require("./../external/tslib/tslib.es6.js");
var u = [
    (0, _indexMjsJs.object)({
        scopes: (0, _indexMjsJsDefault.default).array((0, _indexMjsJs.string)()).max(2).optional()
    }).optional()
];
function p(o) {
    return c.apply(this, arguments);
}
function c() {
    return c = (0, _asyncToGeneratorMjsJsDefault.default)(function(n) {
        return (0, _tslibEs6Js.__generator)(this, function(i) {
            var a;
            return [
                2,
                (0, _decoratorJs.functionHandler)("authorize", u, [
                    n
                ], (a = (0, _asyncToGeneratorMjsJsDefault.default)(function(o) {
                    var e;
                    return (0, _tslibEs6Js.__generator)(this, function(n) {
                        switch(n.label){
                            case 0:
                                return (0, _indexJsDefault.default).isMp ? (e = null == o ? void 0 : o.scopes, [
                                    4,
                                    (0, _authorizeJsDefault.default)(null != e ? e : void 0)
                                ]) : [
                                    3,
                                    2
                                ];
                            case 1:
                                return [
                                    2,
                                    n.sent()
                                ];
                            case 2:
                                return (0, _indexJsDefault.default).isMpWeb ? [
                                    2,
                                    Promise.resolve({})
                                ] : [
                                    2,
                                    Promise.reject((0, _notFoundJsDefault.default)("authorize", {}))
                                ];
                        }
                    });
                }), function(o) {
                    return a.apply(this, arguments);
                }))
            ];
        });
    }), c.apply(this, arguments);
}

},{"./../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","../appEnv/index.js":"gwpxL","../common/notFound.js":"dqwdY","../utils/decorator.js":"6mOw4","../common/apis/general/authorize.js":"9vOtL","./../external/zod/lib/index.mjs.js":"cn5bg","./../external/tslib/tslib.es6.js":"f0cFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vOtL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>u);
var _asyncToGeneratorMjsJs = require("./../../../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _indexJs = require("../../call/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _lodashJs = require("../../../utils/lodash.js");
var _lodashJsDefault = parcelHelpers.interopDefault(_lodashJs);
var _getSettingJs = require("./getSetting.js");
var _getSettingJsDefault = parcelHelpers.interopDefault(_getSettingJs);
var _tslibEs6Js = require("./../../../external/tslib/tslib.es6.js");
var _getEnvJs = require("../../../appEnv/getEnv.js");
var _getEnvJsDefault = parcelHelpers.interopDefault(_getEnvJs);
var r, u = (r = (0, _asyncToGeneratorMjsJsDefault.default)(function(t) {
    return (0, _tslibEs6Js.__generator)(this, function(s) {
        return [
            2,
            new Promise(function(s, r) {
                (0, _indexJsDefault.default)("MP_USER_AUTHORIZE", {
                    scopes: t,
                    forceUpdate: !0
                }, {
                    success: function(t) {
                        var o, r;
                        (0, _lodashJsDefault.default).isEmpty(t) ? (null === (o = (0, _getEnvJsDefault.default)()) || void 0 === o || null === (r = o.platform) || void 0 === r ? void 0 : r.isIOS) && setTimeout(function() {
                            (0, _getSettingJsDefault.default)().then(function(t) {
                                t && s(t.authSetting);
                            });
                        }, 1e3) : s(t);
                    },
                    fail: function(t) {
                        r(t);
                    }
                }, {
                    isMultiCallback: !0,
                    timeout: !1
                });
            })
        ];
    });
}), function(t) {
    return r.apply(this, arguments);
});

},{"./../../../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","../../call/index.js":"kAALe","../../../utils/lodash.js":"28xEQ","./getSetting.js":"hGZ1d","./../../../external/tslib/tslib.es6.js":"f0cFO","../../../appEnv/getEnv.js":"4G0wJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAALe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>f);
var _objectSpreadMjsJs = require("./../../external/@swc/helpers/src/_object_spread.mjs.js");
var _objectSpreadMjsJsDefault = parcelHelpers.interopDefault(_objectSpreadMjsJs);
var _lodashJs = require("../../utils/lodash.js");
var _lodashJsDefault = parcelHelpers.interopDefault(_lodashJs);
var _loggerJs = require("../logger.js");
var _errorHandlerJs = require("../../utils/errorHandler.js");
var _constantsJs = require("../../constants.js");
var _zaloNativeJs = require("./zaloNative.js");
var _zaloNativeJsDefault = parcelHelpers.interopDefault(_zaloNativeJs);
var _tokenJs = require("../token.js");
var _tokenJsDefault = parcelHelpers.interopDefault(_tokenJs);
var _getEnvJs = require("../../appEnv/getEnv.js");
var _getEnvJsDefault = parcelHelpers.interopDefault(_getEnvJs);
var _enumJs = require("../../types/enum.js");
var p, f = (p = function(e) {
    var r, o, i, m = null === (r = (0, _getEnvJsDefault.default)()) || void 0 === r ? void 0 : r.platformName, p = e.action.replace("action.", "").replace(/\./g, "_").toUpperCase(), f = (0, _constantsJs.ACTION)[p], v = (null == f ? void 0 : f.skipJump) || !1, g = (null == f ? void 0 : f.errorList) || {};
    if ("JUMP_LOGIN" === p) return new (0, _errorHandlerJs.AppError)((0, _constantsJs.RESPONSE_CODE).UNKNOWN_ERROR, "Can not get auth code: ".concat(e.error_message));
    if ((0, _tokenJsDefault.default).jumpStatus !== (0, _enumJs.JumpStatus).DONE && !v) return new (0, _errorHandlerJs.AppError)((0, _constantsJs.RESPONSE).UNAUTHORIZED.code, (0, _constantsJs.RESPONSE).UNAUTHORIZED.message);
    if ("permission required!" === String(e.error_message).toLowerCase() || "no permission!" === String(e.error_message).toLowerCase()) return new (0, _errorHandlerJs.AppError)((0, _constantsJs.RESPONSE).FORBIDDEN.code, (0, _constantsJs.RESPONSE).FORBIDDEN.message);
    if (m && (null === (o = (0, _constantsJs.COMMON_NATIVE_ERROR_CODE)[m]) || void 0 === o ? void 0 : o[e.error_code])) return new (0, _errorHandlerJs.AppError)((0, _constantsJs.COMMON_NATIVE_ERROR_CODE)[m][e.error_code].code, (0, _constantsJs.COMMON_NATIVE_ERROR_CODE)[m][e.error_code].message);
    var _ = null == g || null === (i = g[m]) || void 0 === i ? void 0 : i[String(e.error_code)];
    if (_) {
        var j, N, E, O = null === (j = _.mapTo) || void 0 === j ? void 0 : j.message;
        return (null == _ ? void 0 : _.needMoreDetail) && (O = "".concat(null == _ || null === (E = _.mapTo) || void 0 === E ? void 0 : E.message, ": ").concat(e.error_message)), new (0, _errorHandlerJs.AppError)(null === (N = _.mapTo) || void 0 === N ? void 0 : N.code, O);
    }
    return new (0, _errorHandlerJs.AppError)(e.error_code, e.error_message);
}, function(n, t, a, l) {
    var u = function(e, n) {
        function s(s) {
            return function(t) {
                var a = (0, _lodashJsDefault.default).isEmpty(n) ? void 0 : n[s];
                if (a) return (0, _loggerJs.logger)({
                    stage: (0, _constantsJs.ApiCallStage).RESPONSE,
                    type: "log",
                    state: s,
                    name: e,
                    response: t
                }), a("fail" === s ? p(t) : null == t ? void 0 : t.data);
            };
        }
        return (0, _lodashJsDefault.default).isUndefined(e) && (e = ""), Object.assign({}, {
            success: s("success"),
            fail: s("fail")
        });
    }(n, a), d = (0, _constantsJs.ACTION)[n], c = (null == l ? void 0 : l.delay) || 0;
    setTimeout(function() {
        (0, _zaloNativeJsDefault.default)(n, t, u, (0, _objectSpreadMjsJsDefault.default)({}, l, d));
    }, c);
});

},{"./../../external/@swc/helpers/src/_object_spread.mjs.js":"lcsba","../../utils/lodash.js":"28xEQ","../logger.js":"grjYH","../../utils/errorHandler.js":"dKo6k","../../constants.js":"fNy4G","./zaloNative.js":"hgDp1","../token.js":"4rqJX","../../appEnv/getEnv.js":"4G0wJ","../../types/enum.js":"dFF7D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cn5bg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BRAND", ()=>fe);
parcelHelpers.export(exports, "DIRTY", ()=>f);
parcelHelpers.export(exports, "EMPTY_PATH", ()=>l);
parcelHelpers.export(exports, "INVALID", ()=>m);
parcelHelpers.export(exports, "NEVER", ()=>it);
parcelHelpers.export(exports, "OK", ()=>y);
parcelHelpers.export(exports, "ParseStatus", ()=>h);
parcelHelpers.export(exports, "Schema", ()=>T);
parcelHelpers.export(exports, "ZodAny", ()=>L);
parcelHelpers.export(exports, "ZodArray", ()=>K);
parcelHelpers.export(exports, "ZodBigInt", ()=>P);
parcelHelpers.export(exports, "ZodBoolean", ()=>R);
parcelHelpers.export(exports, "ZodBranded", ()=>ye);
parcelHelpers.export(exports, "ZodCatch", ()=>he);
parcelHelpers.export(exports, "ZodDate", ()=>A);
parcelHelpers.export(exports, "ZodDefault", ()=>pe);
parcelHelpers.export(exports, "ZodDiscriminatedUnion", ()=>Y);
parcelHelpers.export(exports, "ZodEffects", ()=>ce);
parcelHelpers.export(exports, "ZodEnum", ()=>ie);
parcelHelpers.export(exports, "ZodError", ()=>n);
parcelHelpers.export(exports, "ZodFirstPartyTypeKind", ()=>xe);
parcelHelpers.export(exports, "ZodFunction", ()=>ae);
parcelHelpers.export(exports, "ZodIntersection", ()=>G);
parcelHelpers.export(exports, "ZodIssueCode", ()=>s);
parcelHelpers.export(exports, "ZodLazy", ()=>se);
parcelHelpers.export(exports, "ZodLiteral", ()=>re);
parcelHelpers.export(exports, "ZodMap", ()=>ee);
parcelHelpers.export(exports, "ZodNaN", ()=>me);
parcelHelpers.export(exports, "ZodNativeEnum", ()=>oe);
parcelHelpers.export(exports, "ZodNever", ()=>V);
parcelHelpers.export(exports, "ZodNull", ()=>D);
parcelHelpers.export(exports, "ZodNullable", ()=>le);
parcelHelpers.export(exports, "ZodNumber", ()=>I);
parcelHelpers.export(exports, "ZodObject", ()=>q);
parcelHelpers.export(exports, "ZodOptional", ()=>ue);
parcelHelpers.export(exports, "ZodParsedType", ()=>t);
parcelHelpers.export(exports, "ZodPipeline", ()=>_e);
parcelHelpers.export(exports, "ZodPromise", ()=>de);
parcelHelpers.export(exports, "ZodRecord", ()=>X);
parcelHelpers.export(exports, "ZodSchema", ()=>T);
parcelHelpers.export(exports, "ZodSet", ()=>te);
parcelHelpers.export(exports, "ZodString", ()=>j);
parcelHelpers.export(exports, "ZodSymbol", ()=>M);
parcelHelpers.export(exports, "ZodTransformer", ()=>ce);
parcelHelpers.export(exports, "ZodTuple", ()=>Q);
parcelHelpers.export(exports, "ZodType", ()=>T);
parcelHelpers.export(exports, "ZodUndefined", ()=>$);
parcelHelpers.export(exports, "ZodUnion", ()=>F);
parcelHelpers.export(exports, "ZodUnknown", ()=>z);
parcelHelpers.export(exports, "ZodVoid", ()=>U);
parcelHelpers.export(exports, "addIssueToContext", ()=>p);
parcelHelpers.export(exports, "any", ()=>Ce);
parcelHelpers.export(exports, "array", ()=>Ae);
parcelHelpers.export(exports, "bigint", ()=>Te);
parcelHelpers.export(exports, "boolean", ()=>Ne);
parcelHelpers.export(exports, "coerce", ()=>nt);
parcelHelpers.export(exports, "custom", ()=>ve);
parcelHelpers.export(exports, "date", ()=>Oe);
parcelHelpers.export(exports, "default", ()=>ot);
parcelHelpers.export(exports, "defaultErrorMap", ()=>i);
parcelHelpers.export(exports, "discriminatedUnion", ()=>Le);
parcelHelpers.export(exports, "effect", ()=>Ge);
parcelHelpers.export(exports, "enum", ()=>Je);
parcelHelpers.export(exports, "function", ()=>Be);
parcelHelpers.export(exports, "getErrorMap", ()=>c);
parcelHelpers.export(exports, "getParsedType", ()=>a);
parcelHelpers.export(exports, "instanceof", ()=>be);
parcelHelpers.export(exports, "intersection", ()=>ze);
parcelHelpers.export(exports, "isAborted", ()=>_);
parcelHelpers.export(exports, "isAsync", ()=>x);
parcelHelpers.export(exports, "isDirty", ()=>v);
parcelHelpers.export(exports, "isValid", ()=>g);
parcelHelpers.export(exports, "late", ()=>ge);
parcelHelpers.export(exports, "lazy", ()=>qe);
parcelHelpers.export(exports, "literal", ()=>Fe);
parcelHelpers.export(exports, "makeIssue", ()=>u);
parcelHelpers.export(exports, "map", ()=>Ke);
parcelHelpers.export(exports, "nan", ()=>Ze);
parcelHelpers.export(exports, "nativeEnum", ()=>Ye);
parcelHelpers.export(exports, "never", ()=>Pe);
parcelHelpers.export(exports, "null", ()=>je);
parcelHelpers.export(exports, "nullable", ()=>Xe);
parcelHelpers.export(exports, "number", ()=>we);
parcelHelpers.export(exports, "object", ()=>Me);
parcelHelpers.export(exports, "objectUtil", ()=>W);
parcelHelpers.export(exports, "oboolean", ()=>rt);
parcelHelpers.export(exports, "onumber", ()=>st);
parcelHelpers.export(exports, "optional", ()=>Qe);
parcelHelpers.export(exports, "ostring", ()=>at);
parcelHelpers.export(exports, "pipeline", ()=>tt);
parcelHelpers.export(exports, "preprocess", ()=>et);
parcelHelpers.export(exports, "promise", ()=>He);
parcelHelpers.export(exports, "quotelessJson", ()=>r);
parcelHelpers.export(exports, "record", ()=>Ue);
parcelHelpers.export(exports, "set", ()=>We);
parcelHelpers.export(exports, "setErrorMap", ()=>d);
parcelHelpers.export(exports, "strictObject", ()=>$e);
parcelHelpers.export(exports, "string", ()=>ke);
parcelHelpers.export(exports, "symbol", ()=>Se);
parcelHelpers.export(exports, "transformer", ()=>Ge);
parcelHelpers.export(exports, "tuple", ()=>Ve);
parcelHelpers.export(exports, "undefined", ()=>Ee);
parcelHelpers.export(exports, "union", ()=>De);
parcelHelpers.export(exports, "unknown", ()=>Ie);
parcelHelpers.export(exports, "util", ()=>e);
parcelHelpers.export(exports, "void", ()=>Re);
parcelHelpers.export(exports, "z", ()=>ot);
var e;
!function(e) {
    e.assertEqual = (e)=>e, e.assertIs = function(e) {}, e.assertNever = function(e) {
        throw new Error;
    }, e.arrayToEnum = (e)=>{
        const t = {};
        for (const a of e)t[a] = a;
        return t;
    }, e.getValidEnumValues = (t)=>{
        const a = e.objectKeys(t).filter((e)=>"number" != typeof t[t[e]]), s = {};
        for (const e of a)s[e] = t[e];
        return e.objectValues(s);
    }, e.objectValues = (t)=>e.objectKeys(t).map(function(e) {
            return t[e];
        }), e.objectKeys = "function" == typeof Object.keys ? (e)=>Object.keys(e) : (e)=>{
        const t = [];
        for(const a in e)Object.prototype.hasOwnProperty.call(e, a) && t.push(a);
        return t;
    }, e.find = (e, t)=>{
        for (const a of e)if (t(a)) return a;
    }, e.isInteger = "function" == typeof Number.isInteger ? (e)=>Number.isInteger(e) : (e)=>"number" == typeof e && isFinite(e) && Math.floor(e) === e, e.joinValues = function(e, t = " | ") {
        return e.map((e)=>"string" == typeof e ? `'${e}'` : e).join(t);
    }, e.jsonStringifyReplacer = (e, t)=>"bigint" == typeof t ? t.toString() : t;
}(e || (e = {}));
const t = e.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]), a = (e)=>{
    switch(typeof e){
        case "undefined":
            return t.undefined;
        case "string":
            return t.string;
        case "number":
            return isNaN(e) ? t.nan : t.number;
        case "boolean":
            return t.boolean;
        case "function":
            return t.function;
        case "bigint":
            return t.bigint;
        case "symbol":
            return t.symbol;
        case "object":
            return Array.isArray(e) ? t.array : null === e ? t.null : e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch ? t.promise : "undefined" != typeof Map && e instanceof Map ? t.map : "undefined" != typeof Set && e instanceof Set ? t.set : "undefined" != typeof Date && e instanceof Date ? t.date : t.object;
        default:
            return t.unknown;
    }
}, s = e.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]), r = (e)=>JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class n extends Error {
    constructor(e){
        super(), this.issues = [], this.addIssue = (e)=>{
            this.issues = [
                ...this.issues,
                e
            ];
        }, this.addIssues = (e = [])=>{
            this.issues = [
                ...this.issues,
                ...e
            ];
        };
        const t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
    }
    get errors() {
        return this.issues;
    }
    format(e) {
        const t = e || function(e) {
            return e.message;
        }, a = {
            _errors: []
        }, s = (e)=>{
            for (const r of e.issues)if ("invalid_union" === r.code) r.unionErrors.map(s);
            else if ("invalid_return_type" === r.code) s(r.returnTypeError);
            else if ("invalid_arguments" === r.code) s(r.argumentsError);
            else if (0 === r.path.length) a._errors.push(t(r));
            else {
                let e = a, s = 0;
                for(; s < r.path.length;){
                    const a = r.path[s];
                    s === r.path.length - 1 ? (e[a] = e[a] || {
                        _errors: []
                    }, e[a]._errors.push(t(r))) : e[a] = e[a] || {
                        _errors: []
                    }, e = e[a], s++;
                }
            }
        };
        return s(this), a;
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, e.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return 0 === this.issues.length;
    }
    flatten(e = (e)=>e.message) {
        const t = {}, a = [];
        for (const s of this.issues)s.path.length > 0 ? (t[s.path[0]] = t[s.path[0]] || [], t[s.path[0]].push(e(s))) : a.push(e(s));
        return {
            formErrors: a,
            fieldErrors: t
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
n.create = (e)=>new n(e);
const i = (a, r)=>{
    let n;
    switch(a.code){
        case s.invalid_type:
            n = a.received === t.undefined ? "Required" : `Expected ${a.expected}, received ${a.received}`;
            break;
        case s.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(a.expected, e.jsonStringifyReplacer)}`;
            break;
        case s.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${e.joinValues(a.keys, ", ")}`;
            break;
        case s.invalid_union:
            n = "Invalid input";
            break;
        case s.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${e.joinValues(a.options)}`;
            break;
        case s.invalid_enum_value:
            n = `Invalid enum value. Expected ${e.joinValues(a.options)}, received '${a.received}'`;
            break;
        case s.invalid_arguments:
            n = "Invalid function arguments";
            break;
        case s.invalid_return_type:
            n = "Invalid function return type";
            break;
        case s.invalid_date:
            n = "Invalid date";
            break;
        case s.invalid_string:
            "object" == typeof a.validation ? "startsWith" in a.validation ? n = `Invalid input: must start with "${a.validation.startsWith}"` : "endsWith" in a.validation ? n = `Invalid input: must end with "${a.validation.endsWith}"` : e.assertNever(a.validation) : n = "regex" !== a.validation ? `Invalid ${a.validation}` : "Invalid";
            break;
        case s.too_small:
            n = "array" === a.type ? `Array must contain ${a.exact ? "exactly" : a.inclusive ? "at least" : "more than"} ${a.minimum} element(s)` : "string" === a.type ? `String must contain ${a.exact ? "exactly" : a.inclusive ? "at least" : "over"} ${a.minimum} character(s)` : "number" === a.type ? `Number must be ${a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than "}${a.minimum}` : "date" === a.type ? `Date must be ${a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than "}${new Date(a.minimum)}` : "Invalid input";
            break;
        case s.too_big:
            n = "array" === a.type ? `Array must contain ${a.exact ? "exactly" : a.inclusive ? "at most" : "less than"} ${a.maximum} element(s)` : "string" === a.type ? `String must contain ${a.exact ? "exactly" : a.inclusive ? "at most" : "under"} ${a.maximum} character(s)` : "number" === a.type ? `Number must be ${a.exact ? "exactly" : a.inclusive ? "less than or equal to" : "less than"} ${a.maximum}` : "date" === a.type ? `Date must be ${a.exact ? "exactly" : a.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(a.maximum)}` : "Invalid input";
            break;
        case s.custom:
            n = "Invalid input";
            break;
        case s.invalid_intersection_types:
            n = "Intersection results could not be merged";
            break;
        case s.not_multiple_of:
            n = `Number must be a multiple of ${a.multipleOf}`;
            break;
        case s.not_finite:
            n = "Number must be finite";
            break;
        default:
            n = r.defaultError, e.assertNever(a);
    }
    return {
        message: n
    };
};
let o = i;
function d(e) {
    o = e;
}
function c() {
    return o;
}
const u = (e)=>{
    const { data: t, path: a, errorMaps: s, issueData: r } = e, n = [
        ...a,
        ...r.path || []
    ], i = {
        ...r,
        path: n
    };
    let o = "";
    const d = s.filter((e)=>!!e).slice().reverse();
    for (const e of d)o = e(i, {
        data: t,
        defaultError: o
    }).message;
    return {
        ...r,
        path: n,
        message: r.message || o
    };
}, l = [];
function p(e, t) {
    const a = u({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [
            e.common.contextualErrorMap,
            e.schemaErrorMap,
            c(),
            i
        ].filter((e)=>!!e)
    });
    e.common.issues.push(a);
}
class h {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        "valid" === this.value && (this.value = "dirty");
    }
    abort() {
        "aborted" !== this.value && (this.value = "aborted");
    }
    static mergeArray(e, t) {
        const a = [];
        for (const s of t){
            if ("aborted" === s.status) return m;
            "dirty" === s.status && e.dirty(), a.push(s.value);
        }
        return {
            status: e.value,
            value: a
        };
    }
    static async mergeObjectAsync(e, t) {
        const a = [];
        for (const e of t)a.push({
            key: await e.key,
            value: await e.value
        });
        return h.mergeObjectSync(e, a);
    }
    static mergeObjectSync(e, t) {
        const a = {};
        for (const s of t){
            const { key: t, value: r } = s;
            if ("aborted" === t.status) return m;
            if ("aborted" === r.status) return m;
            "dirty" === t.status && e.dirty(), "dirty" === r.status && e.dirty(), (void 0 !== r.value || s.alwaysSet) && (a[t.value] = r.value);
        }
        return {
            status: e.value,
            value: a
        };
    }
}
const m = Object.freeze({
    status: "aborted"
}), f = (e)=>({
        status: "dirty",
        value: e
    }), y = (e)=>({
        status: "valid",
        value: e
    }), _ = (e)=>"aborted" === e.status, v = (e)=>"dirty" === e.status, g = (e)=>"valid" === e.status, x = (e)=>"undefined" != typeof Promise && e instanceof Promise;
var b;
!function(e) {
    e.errToObj = (e)=>"string" == typeof e ? {
            message: e
        } : e || {}, e.toString = (e)=>"string" == typeof e ? e : null == e ? void 0 : e.message;
}(b || (b = {}));
class k {
    constructor(e, t, a, s){
        this.parent = e, this.data = t, this._path = a, this._key = s;
    }
    get path() {
        return this._path.concat(this._key);
    }
}
const w = (e, t)=>{
    if (g(t)) return {
        success: !0,
        data: t.value
    };
    if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        error: new n(e.common.issues)
    };
};
function Z(e) {
    if (!e) return {};
    const { errorMap: t, invalid_type_error: a, required_error: s, description: r } = e;
    if (t && (a || s)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
    if (t) return {
        errorMap: t,
        description: r
    };
    return {
        errorMap: (e, t)=>"invalid_type" !== e.code ? {
                message: t.defaultError
            } : void 0 === t.data ? {
                message: null != s ? s : t.defaultError
            } : {
                message: null != a ? a : t.defaultError
            },
        description: r
    };
}
class T {
    constructor(e){
        this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
    }
    get description() {
        return this._def.description;
    }
    _getType(e) {
        return a(e.data);
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: a(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        };
    }
    _processInputParams(e) {
        return {
            status: new h,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: a(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        };
    }
    _parseSync(e) {
        const t = this._parse(e);
        if (x(t)) throw new Error("Synchronous parse encountered promise.");
        return t;
    }
    _parseAsync(e) {
        const t = this._parse(e);
        return Promise.resolve(t);
    }
    parse(e, t) {
        const a = this.safeParse(e, t);
        if (a.success) return a.data;
        throw a.error;
    }
    safeParse(e, t) {
        var s;
        const r = {
            common: {
                issues: [],
                async: null !== (s = null == t ? void 0 : t.async) && void 0 !== s && s,
                contextualErrorMap: null == t ? void 0 : t.errorMap
            },
            path: (null == t ? void 0 : t.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: a(e)
        }, n = this._parseSync({
            data: e,
            path: r.path,
            parent: r
        });
        return w(r, n);
    }
    async parseAsync(e, t) {
        const a = await this.safeParseAsync(e, t);
        if (a.success) return a.data;
        throw a.error;
    }
    async safeParseAsync(e, t) {
        const s = {
            common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0
            },
            path: (null == t ? void 0 : t.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: a(e)
        }, r = this._parse({
            data: e,
            path: s.path,
            parent: s
        }), n = await (x(r) ? r : Promise.resolve(r));
        return w(s, n);
    }
    refine(e, t) {
        const a = (e)=>"string" == typeof t || void 0 === t ? {
                message: t
            } : "function" == typeof t ? t(e) : t;
        return this._refinement((t, r)=>{
            const n = e(t), i = ()=>r.addIssue({
                    code: s.custom,
                    ...a(t)
                });
            return "undefined" != typeof Promise && n instanceof Promise ? n.then((e)=>!!e || (i(), !1)) : !!n || (i(), !1);
        });
    }
    refinement(e, t) {
        return this._refinement((a, s)=>!!e(a) || (s.addIssue("function" == typeof t ? t(a, s) : t), !1));
    }
    _refinement(e) {
        return new ce({
            schema: this,
            typeName: xe.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        });
    }
    superRefine(e) {
        return this._refinement(e);
    }
    optional() {
        return ue.create(this, this._def);
    }
    nullable() {
        return le.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return K.create(this, this._def);
    }
    promise() {
        return de.create(this, this._def);
    }
    or(e) {
        return F.create([
            this,
            e
        ], this._def);
    }
    and(e) {
        return G.create(this, e, this._def);
    }
    transform(e) {
        return new ce({
            ...Z(this._def),
            schema: this,
            typeName: xe.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        });
    }
    default(e) {
        const t = "function" == typeof e ? e : ()=>e;
        return new pe({
            ...Z(this._def),
            innerType: this,
            defaultValue: t,
            typeName: xe.ZodDefault
        });
    }
    brand() {
        return new ye({
            typeName: xe.ZodBranded,
            type: this,
            ...Z(this._def)
        });
    }
    catch(e) {
        const t = "function" == typeof e ? e : ()=>e;
        return new he({
            ...Z(this._def),
            innerType: this,
            catchValue: t,
            typeName: xe.ZodCatch
        });
    }
    describe(e) {
        return new this.constructor({
            ...this._def,
            description: e
        });
    }
    pipe(e) {
        return _e.create(this, e);
    }
    isOptional() {
        return this.safeParse(void 0).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const N = /^c[^\s-]{8,}$/i, O = /^[a-z][a-z0-9]*$/, S = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, E = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/;
class j extends T {
    constructor(){
        super(...arguments), this._regex = (e, t, a)=>this.refinement((t)=>e.test(t), {
                validation: t,
                code: s.invalid_string,
                ...b.errToObj(a)
            }), this.nonempty = (e)=>this.min(1, b.errToObj(e)), this.trim = ()=>new j({
                ...this._def,
                checks: [
                    ...this._def.checks,
                    {
                        kind: "trim"
                    }
                ]
            });
    }
    _parse(a) {
        this._def.coerce && (a.data = String(a.data));
        if (this._getType(a) !== t.string) {
            const e = this._getOrReturnCtx(a);
            return p(e, {
                code: s.invalid_type,
                expected: t.string,
                received: e.parsedType
            }), m;
        }
        const r = new h;
        let n;
        for (const t of this._def.checks)if ("min" === t.kind) a.data.length < t.value && (n = this._getOrReturnCtx(a, n), p(n, {
            code: s.too_small,
            minimum: t.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: t.message
        }), r.dirty());
        else if ("max" === t.kind) a.data.length > t.value && (n = this._getOrReturnCtx(a, n), p(n, {
            code: s.too_big,
            maximum: t.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: t.message
        }), r.dirty());
        else if ("length" === t.kind) {
            const e = a.data.length > t.value, i = a.data.length < t.value;
            (e || i) && (n = this._getOrReturnCtx(a, n), e ? p(n, {
                code: s.too_big,
                maximum: t.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: t.message
            }) : i && p(n, {
                code: s.too_small,
                minimum: t.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: t.message
            }), r.dirty());
        } else if ("email" === t.kind) E.test(a.data) || (n = this._getOrReturnCtx(a, n), p(n, {
            validation: "email",
            code: s.invalid_string,
            message: t.message
        }), r.dirty());
        else if ("uuid" === t.kind) S.test(a.data) || (n = this._getOrReturnCtx(a, n), p(n, {
            validation: "uuid",
            code: s.invalid_string,
            message: t.message
        }), r.dirty());
        else if ("cuid" === t.kind) N.test(a.data) || (n = this._getOrReturnCtx(a, n), p(n, {
            validation: "cuid",
            code: s.invalid_string,
            message: t.message
        }), r.dirty());
        else if ("cuid2" === t.kind) O.test(a.data) || (n = this._getOrReturnCtx(a, n), p(n, {
            validation: "cuid2",
            code: s.invalid_string,
            message: t.message
        }), r.dirty());
        else if ("url" === t.kind) try {
            new URL(a.data);
        } catch (e) {
            n = this._getOrReturnCtx(a, n), p(n, {
                validation: "url",
                code: s.invalid_string,
                message: t.message
            }), r.dirty();
        }
        else if ("regex" === t.kind) {
            t.regex.lastIndex = 0;
            t.regex.test(a.data) || (n = this._getOrReturnCtx(a, n), p(n, {
                validation: "regex",
                code: s.invalid_string,
                message: t.message
            }), r.dirty());
        } else if ("trim" === t.kind) a.data = a.data.trim();
        else if ("startsWith" === t.kind) a.data.startsWith(t.value) || (n = this._getOrReturnCtx(a, n), p(n, {
            code: s.invalid_string,
            validation: {
                startsWith: t.value
            },
            message: t.message
        }), r.dirty());
        else if ("endsWith" === t.kind) a.data.endsWith(t.value) || (n = this._getOrReturnCtx(a, n), p(n, {
            code: s.invalid_string,
            validation: {
                endsWith: t.value
            },
            message: t.message
        }), r.dirty());
        else if ("datetime" === t.kind) ((i = t).precision ? i.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}Z$`) : 0 === i.precision ? i.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : i.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(a.data) || (n = this._getOrReturnCtx(a, n), p(n, {
            code: s.invalid_string,
            validation: "datetime",
            message: t.message
        }), r.dirty());
        else e.assertNever(t);
        var i;
        return {
            status: r.value,
            value: a.data
        };
    }
    _addCheck(e) {
        return new j({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...b.errToObj(e)
        });
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...b.errToObj(e)
        });
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...b.errToObj(e)
        });
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...b.errToObj(e)
        });
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...b.errToObj(e)
        });
    }
    datetime(e) {
        var t;
        return "string" == typeof e ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
            offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
            ...b.errToObj(null == e ? void 0 : e.message)
        });
    }
    regex(e, t) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...b.errToObj(t)
        });
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...b.errToObj(t)
        });
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...b.errToObj(t)
        });
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...b.errToObj(t)
        });
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...b.errToObj(t)
        });
    }
    length(e, t) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...b.errToObj(t)
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((e)=>"datetime" === e.kind);
    }
    get isEmail() {
        return !!this._def.checks.find((e)=>"email" === e.kind);
    }
    get isURL() {
        return !!this._def.checks.find((e)=>"url" === e.kind);
    }
    get isUUID() {
        return !!this._def.checks.find((e)=>"uuid" === e.kind);
    }
    get isCUID() {
        return !!this._def.checks.find((e)=>"cuid" === e.kind);
    }
    get isCUID2() {
        return !!this._def.checks.find((e)=>"cuid2" === e.kind);
    }
    get minLength() {
        let e = null;
        for (const t of this._def.checks)"min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return e;
    }
    get maxLength() {
        let e = null;
        for (const t of this._def.checks)"max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return e;
    }
}
function C(e, t) {
    const a = (e.toString().split(".")[1] || "").length, s = (t.toString().split(".")[1] || "").length, r = a > s ? a : s;
    return parseInt(e.toFixed(r).replace(".", "")) % parseInt(t.toFixed(r).replace(".", "")) / Math.pow(10, r);
}
j.create = (e)=>{
    var t;
    return new j({
        checks: [],
        typeName: xe.ZodString,
        coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
        ...Z(e)
    });
};
class I extends T {
    constructor(){
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
    }
    _parse(a) {
        this._def.coerce && (a.data = Number(a.data));
        if (this._getType(a) !== t.number) {
            const e = this._getOrReturnCtx(a);
            return p(e, {
                code: s.invalid_type,
                expected: t.number,
                received: e.parsedType
            }), m;
        }
        let r;
        const n = new h;
        for (const t of this._def.checks)if ("int" === t.kind) e.isInteger(a.data) || (r = this._getOrReturnCtx(a, r), p(r, {
            code: s.invalid_type,
            expected: "integer",
            received: "float",
            message: t.message
        }), n.dirty());
        else if ("min" === t.kind) (t.inclusive ? a.data < t.value : a.data <= t.value) && (r = this._getOrReturnCtx(a, r), p(r, {
            code: s.too_small,
            minimum: t.value,
            type: "number",
            inclusive: t.inclusive,
            exact: !1,
            message: t.message
        }), n.dirty());
        else if ("max" === t.kind) (t.inclusive ? a.data > t.value : a.data >= t.value) && (r = this._getOrReturnCtx(a, r), p(r, {
            code: s.too_big,
            maximum: t.value,
            type: "number",
            inclusive: t.inclusive,
            exact: !1,
            message: t.message
        }), n.dirty());
        else "multipleOf" === t.kind ? 0 !== C(a.data, t.value) && (r = this._getOrReturnCtx(a, r), p(r, {
            code: s.not_multiple_of,
            multipleOf: t.value,
            message: t.message
        }), n.dirty()) : "finite" === t.kind ? Number.isFinite(a.data) || (r = this._getOrReturnCtx(a, r), p(r, {
            code: s.not_finite,
            message: t.message
        }), n.dirty()) : e.assertNever(t);
        return {
            status: n.value,
            value: a.data
        };
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, b.toString(t));
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, b.toString(t));
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, b.toString(t));
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, b.toString(t));
    }
    setLimit(e, t, a, s) {
        return new I({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: e,
                    value: t,
                    inclusive: a,
                    message: b.toString(s)
                }
            ]
        });
    }
    _addCheck(e) {
        return new I({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: b.toString(e)
        });
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: b.toString(e)
        });
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: b.toString(e)
        });
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: b.toString(e)
        });
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: b.toString(e)
        });
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: b.toString(t)
        });
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: b.toString(e)
        });
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks)"min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return e;
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks)"max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return e;
    }
    get isInt() {
        return !!this._def.checks.find((t)=>"int" === t.kind || "multipleOf" === t.kind && e.isInteger(t.value));
    }
    get isFinite() {
        let e = null, t = null;
        for (const a of this._def.checks){
            if ("finite" === a.kind || "int" === a.kind || "multipleOf" === a.kind) return !0;
            "min" === a.kind ? (null === t || a.value > t) && (t = a.value) : "max" === a.kind && (null === e || a.value < e) && (e = a.value);
        }
        return Number.isFinite(t) && Number.isFinite(e);
    }
}
I.create = (e)=>new I({
        checks: [],
        typeName: xe.ZodNumber,
        coerce: (null == e ? void 0 : e.coerce) || !1,
        ...Z(e)
    });
class P extends T {
    _parse(e) {
        this._def.coerce && (e.data = BigInt(e.data));
        if (this._getType(e) !== t.bigint) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: s.invalid_type,
                expected: t.bigint,
                received: a.parsedType
            }), m;
        }
        return y(e.data);
    }
}
P.create = (e)=>{
    var t;
    return new P({
        typeName: xe.ZodBigInt,
        coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
        ...Z(e)
    });
};
class R extends T {
    _parse(e) {
        this._def.coerce && (e.data = Boolean(e.data));
        if (this._getType(e) !== t.boolean) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: s.invalid_type,
                expected: t.boolean,
                received: a.parsedType
            }), m;
        }
        return y(e.data);
    }
}
R.create = (e)=>new R({
        typeName: xe.ZodBoolean,
        coerce: (null == e ? void 0 : e.coerce) || !1,
        ...Z(e)
    });
class A extends T {
    _parse(a) {
        this._def.coerce && (a.data = new Date(a.data));
        if (this._getType(a) !== t.date) {
            const e = this._getOrReturnCtx(a);
            return p(e, {
                code: s.invalid_type,
                expected: t.date,
                received: e.parsedType
            }), m;
        }
        if (isNaN(a.data.getTime())) return p(this._getOrReturnCtx(a), {
            code: s.invalid_date
        }), m;
        const r = new h;
        let n;
        for (const t of this._def.checks)"min" === t.kind ? a.data.getTime() < t.value && (n = this._getOrReturnCtx(a, n), p(n, {
            code: s.too_small,
            message: t.message,
            inclusive: !0,
            exact: !1,
            minimum: t.value,
            type: "date"
        }), r.dirty()) : "max" === t.kind ? a.data.getTime() > t.value && (n = this._getOrReturnCtx(a, n), p(n, {
            code: s.too_big,
            message: t.message,
            inclusive: !0,
            exact: !1,
            maximum: t.value,
            type: "date"
        }), r.dirty()) : e.assertNever(t);
        return {
            status: r.value,
            value: new Date(a.data.getTime())
        };
    }
    _addCheck(e) {
        return new A({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: b.toString(t)
        });
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: b.toString(t)
        });
    }
    get minDate() {
        let e = null;
        for (const t of this._def.checks)"min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return null != e ? new Date(e) : null;
    }
    get maxDate() {
        let e = null;
        for (const t of this._def.checks)"max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return null != e ? new Date(e) : null;
    }
}
A.create = (e)=>new A({
        checks: [],
        coerce: (null == e ? void 0 : e.coerce) || !1,
        typeName: xe.ZodDate,
        ...Z(e)
    });
class M extends T {
    _parse(e) {
        if (this._getType(e) !== t.symbol) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: s.invalid_type,
                expected: t.symbol,
                received: a.parsedType
            }), m;
        }
        return y(e.data);
    }
}
M.create = (e)=>new M({
        typeName: xe.ZodSymbol,
        ...Z(e)
    });
class $ extends T {
    _parse(e) {
        if (this._getType(e) !== t.undefined) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: s.invalid_type,
                expected: t.undefined,
                received: a.parsedType
            }), m;
        }
        return y(e.data);
    }
}
$.create = (e)=>new $({
        typeName: xe.ZodUndefined,
        ...Z(e)
    });
class D extends T {
    _parse(e) {
        if (this._getType(e) !== t.null) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: s.invalid_type,
                expected: t.null,
                received: a.parsedType
            }), m;
        }
        return y(e.data);
    }
}
D.create = (e)=>new D({
        typeName: xe.ZodNull,
        ...Z(e)
    });
class L extends T {
    constructor(){
        super(...arguments), this._any = !0;
    }
    _parse(e) {
        return y(e.data);
    }
}
L.create = (e)=>new L({
        typeName: xe.ZodAny,
        ...Z(e)
    });
class z extends T {
    constructor(){
        super(...arguments), this._unknown = !0;
    }
    _parse(e) {
        return y(e.data);
    }
}
z.create = (e)=>new z({
        typeName: xe.ZodUnknown,
        ...Z(e)
    });
class V extends T {
    _parse(e) {
        const a = this._getOrReturnCtx(e);
        return p(a, {
            code: s.invalid_type,
            expected: t.never,
            received: a.parsedType
        }), m;
    }
}
V.create = (e)=>new V({
        typeName: xe.ZodNever,
        ...Z(e)
    });
class U extends T {
    _parse(e) {
        if (this._getType(e) !== t.undefined) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: s.invalid_type,
                expected: t.void,
                received: a.parsedType
            }), m;
        }
        return y(e.data);
    }
}
U.create = (e)=>new U({
        typeName: xe.ZodVoid,
        ...Z(e)
    });
class K extends T {
    _parse(e) {
        const { ctx: a, status: r } = this._processInputParams(e), n = this._def;
        if (a.parsedType !== t.array) return p(a, {
            code: s.invalid_type,
            expected: t.array,
            received: a.parsedType
        }), m;
        if (null !== n.exactLength) {
            const e = a.data.length > n.exactLength.value, t = a.data.length < n.exactLength.value;
            (e || t) && (p(a, {
                code: e ? s.too_big : s.too_small,
                minimum: t ? n.exactLength.value : void 0,
                maximum: e ? n.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: n.exactLength.message
            }), r.dirty());
        }
        if (null !== n.minLength && a.data.length < n.minLength.value && (p(a, {
            code: s.too_small,
            minimum: n.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: n.minLength.message
        }), r.dirty()), null !== n.maxLength && a.data.length > n.maxLength.value && (p(a, {
            code: s.too_big,
            maximum: n.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: n.maxLength.message
        }), r.dirty()), a.common.async) return Promise.all([
            ...a.data
        ].map((e, t)=>n.type._parseAsync(new k(a, e, a.path, t)))).then((e)=>h.mergeArray(r, e));
        const i = [
            ...a.data
        ].map((e, t)=>n.type._parseSync(new k(a, e, a.path, t)));
        return h.mergeArray(r, i);
    }
    get element() {
        return this._def.type;
    }
    min(e, t) {
        return new K({
            ...this._def,
            minLength: {
                value: e,
                message: b.toString(t)
            }
        });
    }
    max(e, t) {
        return new K({
            ...this._def,
            maxLength: {
                value: e,
                message: b.toString(t)
            }
        });
    }
    length(e, t) {
        return new K({
            ...this._def,
            exactLength: {
                value: e,
                message: b.toString(t)
            }
        });
    }
    nonempty(e) {
        return this.min(1, e);
    }
}
var W;
function B(e) {
    if (e instanceof q) {
        const t = {};
        for(const a in e.shape){
            const s = e.shape[a];
            t[a] = ue.create(B(s));
        }
        return new q({
            ...e._def,
            shape: ()=>t
        });
    }
    return e instanceof K ? K.create(B(e.element)) : e instanceof ue ? ue.create(B(e.unwrap())) : e instanceof le ? le.create(B(e.unwrap())) : e instanceof Q ? Q.create(e.items.map((e)=>B(e))) : e;
}
K.create = (e, t)=>new K({
        type: e,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: xe.ZodArray,
        ...Z(t)
    }), function(e) {
    e.mergeShapes = (e, t)=>({
            ...e,
            ...t
        });
}(W || (W = {}));
class q extends T {
    constructor(){
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
    }
    _getCached() {
        if (null !== this._cached) return this._cached;
        const t = this._def.shape(), a = e.objectKeys(t);
        return this._cached = {
            shape: t,
            keys: a
        };
    }
    _parse(e) {
        if (this._getType(e) !== t.object) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: s.invalid_type,
                expected: t.object,
                received: a.parsedType
            }), m;
        }
        const { status: a, ctx: r } = this._processInputParams(e), { shape: n, keys: i } = this._getCached(), o = [];
        if (!(this._def.catchall instanceof V && "strip" === this._def.unknownKeys)) for(const e in r.data)i.includes(e) || o.push(e);
        const d = [];
        for (const e of i){
            const t = n[e], a = r.data[e];
            d.push({
                key: {
                    status: "valid",
                    value: e
                },
                value: t._parse(new k(r, a, r.path, e)),
                alwaysSet: e in r.data
            });
        }
        if (this._def.catchall instanceof V) {
            const e = this._def.unknownKeys;
            if ("passthrough" === e) for (const e of o)d.push({
                key: {
                    status: "valid",
                    value: e
                },
                value: {
                    status: "valid",
                    value: r.data[e]
                }
            });
            else if ("strict" === e) o.length > 0 && (p(r, {
                code: s.unrecognized_keys,
                keys: o
            }), a.dirty());
            else if ("strip" !== e) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
            const e = this._def.catchall;
            for (const t of o){
                const a = r.data[t];
                d.push({
                    key: {
                        status: "valid",
                        value: t
                    },
                    value: e._parse(new k(r, a, r.path, t)),
                    alwaysSet: t in r.data
                });
            }
        }
        return r.common.async ? Promise.resolve().then(async ()=>{
            const e = [];
            for (const t of d){
                const a = await t.key;
                e.push({
                    key: a,
                    value: await t.value,
                    alwaysSet: t.alwaysSet
                });
            }
            return e;
        }).then((e)=>h.mergeObjectSync(a, e)) : h.mergeObjectSync(a, d);
    }
    get shape() {
        return this._def.shape();
    }
    strict(e) {
        return new q({
            ...this._def,
            unknownKeys: "strict",
            ...void 0 !== e ? {
                errorMap: (t, a)=>{
                    var s, r, n, i;
                    const o = null !== (n = null === (r = (s = this._def).errorMap) || void 0 === r ? void 0 : r.call(s, t, a).message) && void 0 !== n ? n : a.defaultError;
                    return "unrecognized_keys" === t.code ? {
                        message: null !== (i = b.errToObj(e).message) && void 0 !== i ? i : o
                    } : {
                        message: o
                    };
                }
            } : {}
        });
    }
    strip() {
        return new q({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new q({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    extend(e) {
        return new q({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...e
                })
        });
    }
    merge(e) {
        return new q({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: ()=>W.mergeShapes(this._def.shape(), e._def.shape()),
            typeName: xe.ZodObject
        });
    }
    setKey(e, t) {
        return this.augment({
            [e]: t
        });
    }
    catchall(e) {
        return new q({
            ...this._def,
            catchall: e
        });
    }
    pick(t) {
        const a = {};
        return e.objectKeys(t).forEach((e)=>{
            t[e] && this.shape[e] && (a[e] = this.shape[e]);
        }), new q({
            ...this._def,
            shape: ()=>a
        });
    }
    omit(t) {
        const a = {};
        return e.objectKeys(this.shape).forEach((e)=>{
            t[e] || (a[e] = this.shape[e]);
        }), new q({
            ...this._def,
            shape: ()=>a
        });
    }
    deepPartial() {
        return B(this);
    }
    partial(t) {
        const a = {};
        return e.objectKeys(this.shape).forEach((e)=>{
            const s = this.shape[e];
            t && !t[e] ? a[e] = s : a[e] = s.optional();
        }), new q({
            ...this._def,
            shape: ()=>a
        });
    }
    required(t) {
        const a = {};
        return e.objectKeys(this.shape).forEach((e)=>{
            if (t && !t[e]) a[e] = this.shape[e];
            else {
                let t = this.shape[e];
                for(; t instanceof ue;)t = t._def.innerType;
                a[e] = t;
            }
        }), new q({
            ...this._def,
            shape: ()=>a
        });
    }
    keyof() {
        return ne(e.objectKeys(this.shape));
    }
}
q.create = (e, t)=>new q({
        shape: ()=>e,
        unknownKeys: "strip",
        catchall: V.create(),
        typeName: xe.ZodObject,
        ...Z(t)
    }), q.strictCreate = (e, t)=>new q({
        shape: ()=>e,
        unknownKeys: "strict",
        catchall: V.create(),
        typeName: xe.ZodObject,
        ...Z(t)
    }), q.lazycreate = (e, t)=>new q({
        shape: e,
        unknownKeys: "strip",
        catchall: V.create(),
        typeName: xe.ZodObject,
        ...Z(t)
    });
class F extends T {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e), a = this._def.options;
        if (t.common.async) return Promise.all(a.map(async (e)=>{
            const a = {
                ...t,
                common: {
                    ...t.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: a
                }),
                ctx: a
            };
        })).then(function(e) {
            for (const t of e)if ("valid" === t.result.status) return t.result;
            for (const a of e)if ("dirty" === a.result.status) return t.common.issues.push(...a.ctx.common.issues), a.result;
            const a = e.map((e)=>new n(e.ctx.common.issues));
            return p(t, {
                code: s.invalid_union,
                unionErrors: a
            }), m;
        });
        {
            let e;
            const r = [];
            for (const s of a){
                const a = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                }, n = s._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: a
                });
                if ("valid" === n.status) return n;
                "dirty" !== n.status || e || (e = {
                    result: n,
                    ctx: a
                }), a.common.issues.length && r.push(a.common.issues);
            }
            if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
            const i = r.map((e)=>new n(e));
            return p(t, {
                code: s.invalid_union,
                unionErrors: i
            }), m;
        }
    }
    get options() {
        return this._def.options;
    }
}
F.create = (e, t)=>new F({
        options: e,
        typeName: xe.ZodUnion,
        ...Z(t)
    });
const J = (e)=>e instanceof se ? J(e.schema) : e instanceof ce ? J(e.innerType()) : e instanceof re ? [
        e.value
    ] : e instanceof ie ? e.options : e instanceof oe ? Object.keys(e.enum) : e instanceof pe ? J(e._def.innerType) : e instanceof $ ? [
        void 0
    ] : e instanceof D ? [
        null
    ] : null;
class Y extends T {
    _parse(e) {
        const { ctx: a } = this._processInputParams(e);
        if (a.parsedType !== t.object) return p(a, {
            code: s.invalid_type,
            expected: t.object,
            received: a.parsedType
        }), m;
        const r = this.discriminator, n = a.data[r], i = this.optionsMap.get(n);
        return i ? a.common.async ? i._parseAsync({
            data: a.data,
            path: a.path,
            parent: a
        }) : i._parseSync({
            data: a.data,
            path: a.path,
            parent: a
        }) : (p(a, {
            code: s.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [
                r
            ]
        }), m);
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    static create(e, t, a) {
        const s = new Map;
        for (const a of t){
            const t = J(a.shape[e]);
            if (!t) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const r of t){
                if (s.has(r)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(r)}`);
                s.set(r, a);
            }
        }
        return new Y({
            typeName: xe.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: s,
            ...Z(a)
        });
    }
}
function H(s, r) {
    const n = a(s), i = a(r);
    if (s === r) return {
        valid: !0,
        data: s
    };
    if (n === t.object && i === t.object) {
        const t = e.objectKeys(r), a = e.objectKeys(s).filter((e)=>-1 !== t.indexOf(e)), n = {
            ...s,
            ...r
        };
        for (const e of a){
            const t = H(s[e], r[e]);
            if (!t.valid) return {
                valid: !1
            };
            n[e] = t.data;
        }
        return {
            valid: !0,
            data: n
        };
    }
    if (n === t.array && i === t.array) {
        if (s.length !== r.length) return {
            valid: !1
        };
        const e = [];
        for(let t = 0; t < s.length; t++){
            const a = H(s[t], r[t]);
            if (!a.valid) return {
                valid: !1
            };
            e.push(a.data);
        }
        return {
            valid: !0,
            data: e
        };
    }
    return n === t.date && i === t.date && +s == +r ? {
        valid: !0,
        data: s
    } : {
        valid: !1
    };
}
class G extends T {
    _parse(e) {
        const { status: t, ctx: a } = this._processInputParams(e), r = (e, r)=>{
            if (_(e) || _(r)) return m;
            const n = H(e.value, r.value);
            return n.valid ? ((v(e) || v(r)) && t.dirty(), {
                status: t.value,
                value: n.data
            }) : (p(a, {
                code: s.invalid_intersection_types
            }), m);
        };
        return a.common.async ? Promise.all([
            this._def.left._parseAsync({
                data: a.data,
                path: a.path,
                parent: a
            }),
            this._def.right._parseAsync({
                data: a.data,
                path: a.path,
                parent: a
            })
        ]).then(([e, t])=>r(e, t)) : r(this._def.left._parseSync({
            data: a.data,
            path: a.path,
            parent: a
        }), this._def.right._parseSync({
            data: a.data,
            path: a.path,
            parent: a
        }));
    }
}
G.create = (e, t, a)=>new G({
        left: e,
        right: t,
        typeName: xe.ZodIntersection,
        ...Z(a)
    });
class Q extends T {
    _parse(e) {
        const { status: a, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== t.array) return p(r, {
            code: s.invalid_type,
            expected: t.array,
            received: r.parsedType
        }), m;
        if (r.data.length < this._def.items.length) return p(r, {
            code: s.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), m;
        !this._def.rest && r.data.length > this._def.items.length && (p(r, {
            code: s.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), a.dirty());
        const n = [
            ...r.data
        ].map((e, t)=>{
            const a = this._def.items[t] || this._def.rest;
            return a ? a._parse(new k(r, e, r.path, t)) : null;
        }).filter((e)=>!!e);
        return r.common.async ? Promise.all(n).then((e)=>h.mergeArray(a, e)) : h.mergeArray(a, n);
    }
    get items() {
        return this._def.items;
    }
    rest(e) {
        return new Q({
            ...this._def,
            rest: e
        });
    }
}
Q.create = (e, t)=>{
    if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Q({
        items: e,
        typeName: xe.ZodTuple,
        rest: null,
        ...Z(t)
    });
};
class X extends T {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(e) {
        const { status: a, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== t.object) return p(r, {
            code: s.invalid_type,
            expected: t.object,
            received: r.parsedType
        }), m;
        const n = [], i = this._def.keyType, o = this._def.valueType;
        for(const e in r.data)n.push({
            key: i._parse(new k(r, e, r.path, e)),
            value: o._parse(new k(r, r.data[e], r.path, e))
        });
        return r.common.async ? h.mergeObjectAsync(a, n) : h.mergeObjectSync(a, n);
    }
    get element() {
        return this._def.valueType;
    }
    static create(e, t, a) {
        return new X(t instanceof T ? {
            keyType: e,
            valueType: t,
            typeName: xe.ZodRecord,
            ...Z(a)
        } : {
            keyType: j.create(),
            valueType: e,
            typeName: xe.ZodRecord,
            ...Z(t)
        });
    }
}
class ee extends T {
    _parse(e) {
        const { status: a, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== t.map) return p(r, {
            code: s.invalid_type,
            expected: t.map,
            received: r.parsedType
        }), m;
        const n = this._def.keyType, i = this._def.valueType, o = [
            ...r.data.entries()
        ].map(([e, t], a)=>({
                key: n._parse(new k(r, e, r.path, [
                    a,
                    "key"
                ])),
                value: i._parse(new k(r, t, r.path, [
                    a,
                    "value"
                ]))
            }));
        if (r.common.async) {
            const e = new Map;
            return Promise.resolve().then(async ()=>{
                for (const t of o){
                    const s = await t.key, r = await t.value;
                    if ("aborted" === s.status || "aborted" === r.status) return m;
                    "dirty" !== s.status && "dirty" !== r.status || a.dirty(), e.set(s.value, r.value);
                }
                return {
                    status: a.value,
                    value: e
                };
            });
        }
        {
            const e = new Map;
            for (const t of o){
                const s = t.key, r = t.value;
                if ("aborted" === s.status || "aborted" === r.status) return m;
                "dirty" !== s.status && "dirty" !== r.status || a.dirty(), e.set(s.value, r.value);
            }
            return {
                status: a.value,
                value: e
            };
        }
    }
}
ee.create = (e, t, a)=>new ee({
        valueType: t,
        keyType: e,
        typeName: xe.ZodMap,
        ...Z(a)
    });
class te extends T {
    _parse(e) {
        const { status: a, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== t.set) return p(r, {
            code: s.invalid_type,
            expected: t.set,
            received: r.parsedType
        }), m;
        const n = this._def;
        null !== n.minSize && r.data.size < n.minSize.value && (p(r, {
            code: s.too_small,
            minimum: n.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: n.minSize.message
        }), a.dirty()), null !== n.maxSize && r.data.size > n.maxSize.value && (p(r, {
            code: s.too_big,
            maximum: n.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: n.maxSize.message
        }), a.dirty());
        const i = this._def.valueType;
        function o(e) {
            const t = new Set;
            for (const s of e){
                if ("aborted" === s.status) return m;
                "dirty" === s.status && a.dirty(), t.add(s.value);
            }
            return {
                status: a.value,
                value: t
            };
        }
        const d = [
            ...r.data.values()
        ].map((e, t)=>i._parse(new k(r, e, r.path, t)));
        return r.common.async ? Promise.all(d).then((e)=>o(e)) : o(d);
    }
    min(e, t) {
        return new te({
            ...this._def,
            minSize: {
                value: e,
                message: b.toString(t)
            }
        });
    }
    max(e, t) {
        return new te({
            ...this._def,
            maxSize: {
                value: e,
                message: b.toString(t)
            }
        });
    }
    size(e, t) {
        return this.min(e, t).max(e, t);
    }
    nonempty(e) {
        return this.min(1, e);
    }
}
te.create = (e, t)=>new te({
        valueType: e,
        minSize: null,
        maxSize: null,
        typeName: xe.ZodSet,
        ...Z(t)
    });
class ae extends T {
    constructor(){
        super(...arguments), this.validate = this.implement;
    }
    _parse(e) {
        const { ctx: a } = this._processInputParams(e);
        if (a.parsedType !== t.function) return p(a, {
            code: s.invalid_type,
            expected: t.function,
            received: a.parsedType
        }), m;
        function r(e, t) {
            return u({
                data: e,
                path: a.path,
                errorMaps: [
                    a.common.contextualErrorMap,
                    a.schemaErrorMap,
                    c(),
                    i
                ].filter((e)=>!!e),
                issueData: {
                    code: s.invalid_arguments,
                    argumentsError: t
                }
            });
        }
        function o(e, t) {
            return u({
                data: e,
                path: a.path,
                errorMaps: [
                    a.common.contextualErrorMap,
                    a.schemaErrorMap,
                    c(),
                    i
                ].filter((e)=>!!e),
                issueData: {
                    code: s.invalid_return_type,
                    returnTypeError: t
                }
            });
        }
        const d = {
            errorMap: a.common.contextualErrorMap
        }, l = a.data;
        return this._def.returns instanceof de ? y(async (...e)=>{
            const t = new n([]), a = await this._def.args.parseAsync(e, d).catch((a)=>{
                throw t.addIssue(r(e, a)), t;
            }), s = await l(...a);
            return await this._def.returns._def.type.parseAsync(s, d).catch((e)=>{
                throw t.addIssue(o(s, e)), t;
            });
        }) : y((...e)=>{
            const t = this._def.args.safeParse(e, d);
            if (!t.success) throw new n([
                r(e, t.error)
            ]);
            const a = l(...t.data), s = this._def.returns.safeParse(a, d);
            if (!s.success) throw new n([
                o(a, s.error)
            ]);
            return s.data;
        });
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...e) {
        return new ae({
            ...this._def,
            args: Q.create(e).rest(z.create())
        });
    }
    returns(e) {
        return new ae({
            ...this._def,
            returns: e
        });
    }
    implement(e) {
        return this.parse(e);
    }
    strictImplement(e) {
        return this.parse(e);
    }
    static create(e, t, a) {
        return new ae({
            args: e || Q.create([]).rest(z.create()),
            returns: t || z.create(),
            typeName: xe.ZodFunction,
            ...Z(a)
        });
    }
}
class se extends T {
    get schema() {
        return this._def.getter();
    }
    _parse(e) {
        const { ctx: t } = this._processInputParams(e);
        return this._def.getter()._parse({
            data: t.data,
            path: t.path,
            parent: t
        });
    }
}
se.create = (e, t)=>new se({
        getter: e,
        typeName: xe.ZodLazy,
        ...Z(t)
    });
class re extends T {
    _parse(e) {
        if (e.data !== this._def.value) {
            const t = this._getOrReturnCtx(e);
            return p(t, {
                received: t.data,
                code: s.invalid_literal,
                expected: this._def.value
            }), m;
        }
        return {
            status: "valid",
            value: e.data
        };
    }
    get value() {
        return this._def.value;
    }
}
function ne(e, t) {
    return new ie({
        values: e,
        typeName: xe.ZodEnum,
        ...Z(t)
    });
}
re.create = (e, t)=>new re({
        value: e,
        typeName: xe.ZodLiteral,
        ...Z(t)
    });
class ie extends T {
    _parse(t) {
        if ("string" != typeof t.data) {
            const a = this._getOrReturnCtx(t), r = this._def.values;
            return p(a, {
                expected: e.joinValues(r),
                received: a.parsedType,
                code: s.invalid_type
            }), m;
        }
        if (-1 === this._def.values.indexOf(t.data)) {
            const e = this._getOrReturnCtx(t), a = this._def.values;
            return p(e, {
                received: e.data,
                code: s.invalid_enum_value,
                options: a
            }), m;
        }
        return y(t.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const e = {};
        for (const t of this._def.values)e[t] = t;
        return e;
    }
    get Values() {
        const e = {};
        for (const t of this._def.values)e[t] = t;
        return e;
    }
    get Enum() {
        const e = {};
        for (const t of this._def.values)e[t] = t;
        return e;
    }
    extract(e) {
        return ie.create(e);
    }
    exclude(e) {
        return ie.create(this.options.filter((t)=>!e.includes(t)));
    }
}
ie.create = ne;
class oe extends T {
    _parse(a) {
        const r = e.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(a);
        if (n.parsedType !== t.string && n.parsedType !== t.number) {
            const t = e.objectValues(r);
            return p(n, {
                expected: e.joinValues(t),
                received: n.parsedType,
                code: s.invalid_type
            }), m;
        }
        if (-1 === r.indexOf(a.data)) {
            const t = e.objectValues(r);
            return p(n, {
                received: n.data,
                code: s.invalid_enum_value,
                options: t
            }), m;
        }
        return y(a.data);
    }
    get enum() {
        return this._def.values;
    }
}
oe.create = (e, t)=>new oe({
        values: e,
        typeName: xe.ZodNativeEnum,
        ...Z(t)
    });
class de extends T {
    unwrap() {
        return this._def.type;
    }
    _parse(e) {
        const { ctx: a } = this._processInputParams(e);
        if (a.parsedType !== t.promise && !1 === a.common.async) return p(a, {
            code: s.invalid_type,
            expected: t.promise,
            received: a.parsedType
        }), m;
        const r = a.parsedType === t.promise ? a.data : Promise.resolve(a.data);
        return y(r.then((e)=>this._def.type.parseAsync(e, {
                path: a.path,
                errorMap: a.common.contextualErrorMap
            })));
    }
}
de.create = (e, t)=>new de({
        type: e,
        typeName: xe.ZodPromise,
        ...Z(t)
    });
class ce extends T {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === xe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(t) {
        const { status: a, ctx: s } = this._processInputParams(t), r = this._def.effect || null;
        if ("preprocess" === r.type) {
            const e = r.transform(s.data);
            return s.common.async ? Promise.resolve(e).then((e)=>this._def.schema._parseAsync({
                    data: e,
                    path: s.path,
                    parent: s
                })) : this._def.schema._parseSync({
                data: e,
                path: s.path,
                parent: s
            });
        }
        const n = {
            addIssue: (e)=>{
                p(s, e), e.fatal ? a.abort() : a.dirty();
            },
            get path () {
                return s.path;
            }
        };
        if (n.addIssue = n.addIssue.bind(n), "refinement" === r.type) {
            const e = (e)=>{
                const t = r.refinement(e, n);
                if (s.common.async) return Promise.resolve(t);
                if (t instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return e;
            };
            if (!1 === s.common.async) {
                const t = this._def.schema._parseSync({
                    data: s.data,
                    path: s.path,
                    parent: s
                });
                return "aborted" === t.status ? m : ("dirty" === t.status && a.dirty(), e(t.value), {
                    status: a.value,
                    value: t.value
                });
            }
            return this._def.schema._parseAsync({
                data: s.data,
                path: s.path,
                parent: s
            }).then((t)=>"aborted" === t.status ? m : ("dirty" === t.status && a.dirty(), e(t.value).then(()=>({
                        status: a.value,
                        value: t.value
                    }))));
        }
        if ("transform" === r.type) {
            if (!1 === s.common.async) {
                const e = this._def.schema._parseSync({
                    data: s.data,
                    path: s.path,
                    parent: s
                });
                if (!g(e)) return e;
                const t = r.transform(e.value, n);
                if (t instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: a.value,
                    value: t
                };
            }
            return this._def.schema._parseAsync({
                data: s.data,
                path: s.path,
                parent: s
            }).then((e)=>g(e) ? Promise.resolve(r.transform(e.value, n)).then((e)=>({
                        status: a.value,
                        value: e
                    })) : e);
        }
        e.assertNever(r);
    }
}
ce.create = (e, t, a)=>new ce({
        schema: e,
        typeName: xe.ZodEffects,
        effect: t,
        ...Z(a)
    }), ce.createWithPreprocess = (e, t, a)=>new ce({
        schema: t,
        effect: {
            type: "preprocess",
            transform: e
        },
        typeName: xe.ZodEffects,
        ...Z(a)
    });
class ue extends T {
    _parse(e) {
        return this._getType(e) === t.undefined ? y(void 0) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ue.create = (e, t)=>new ue({
        innerType: e,
        typeName: xe.ZodOptional,
        ...Z(t)
    });
class le extends T {
    _parse(e) {
        return this._getType(e) === t.null ? y(null) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}
le.create = (e, t)=>new le({
        innerType: e,
        typeName: xe.ZodNullable,
        ...Z(t)
    });
class pe extends T {
    _parse(e) {
        const { ctx: a } = this._processInputParams(e);
        let s = a.data;
        return a.parsedType === t.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
            data: s,
            path: a.path,
            parent: a
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
pe.create = (e, t)=>new pe({
        innerType: e,
        typeName: xe.ZodDefault,
        defaultValue: "function" == typeof t.default ? t.default : ()=>t.default,
        ...Z(t)
    });
class he extends T {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e), a = this._def.innerType._parse({
            data: t.data,
            path: t.path,
            parent: {
                ...t,
                common: {
                    ...t.common,
                    issues: []
                }
            }
        });
        return x(a) ? a.then((e)=>({
                status: "valid",
                value: "valid" === e.status ? e.value : this._def.catchValue()
            })) : {
            status: "valid",
            value: "valid" === a.status ? a.value : this._def.catchValue()
        };
    }
    removeCatch() {
        return this._def.innerType;
    }
}
he.create = (e, t)=>new he({
        innerType: e,
        typeName: xe.ZodCatch,
        catchValue: "function" == typeof t.catch ? t.catch : ()=>t.catch,
        ...Z(t)
    });
class me extends T {
    _parse(e) {
        if (this._getType(e) !== t.nan) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: s.invalid_type,
                expected: t.nan,
                received: a.parsedType
            }), m;
        }
        return {
            status: "valid",
            value: e.data
        };
    }
}
me.create = (e)=>new me({
        typeName: xe.ZodNaN,
        ...Z(e)
    });
const fe = Symbol("zod_brand");
class ye extends T {
    _parse(e) {
        const { ctx: t } = this._processInputParams(e), a = t.data;
        return this._def.type._parse({
            data: a,
            path: t.path,
            parent: t
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class _e extends T {
    _parse(e) {
        const { status: t, ctx: a } = this._processInputParams(e);
        if (a.common.async) return (async ()=>{
            const e = await this._def.in._parseAsync({
                data: a.data,
                path: a.path,
                parent: a
            });
            return "aborted" === e.status ? m : "dirty" === e.status ? (t.dirty(), f(e.value)) : this._def.out._parseAsync({
                data: e.value,
                path: a.path,
                parent: a
            });
        })();
        {
            const e = this._def.in._parseSync({
                data: a.data,
                path: a.path,
                parent: a
            });
            return "aborted" === e.status ? m : "dirty" === e.status ? (t.dirty(), {
                status: "dirty",
                value: e.value
            }) : this._def.out._parseSync({
                data: e.value,
                path: a.path,
                parent: a
            });
        }
    }
    static create(e, t) {
        return new _e({
            in: e,
            out: t,
            typeName: xe.ZodPipeline
        });
    }
}
const ve = (e, t = {}, a)=>e ? L.create().superRefine((s, r)=>{
        if (!e(s)) {
            const e = "function" == typeof t ? t(s) : t, n = "string" == typeof e ? {
                message: e
            } : e;
            r.addIssue({
                code: "custom",
                ...n,
                fatal: a
            });
        }
    }) : L.create(), ge = {
    object: q.lazycreate
};
var xe;
!function(e) {
    e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
}(xe || (xe = {}));
const be = (e, t = {
    message: `Input not instance of ${e.name}`
})=>ve((t)=>t instanceof e, t, !0), ke = j.create, we = I.create, Ze = me.create, Te = P.create, Ne = R.create, Oe = A.create, Se = M.create, Ee = $.create, je = D.create, Ce = L.create, Ie = z.create, Pe = V.create, Re = U.create, Ae = K.create, Me = q.create, $e = q.strictCreate, De = F.create, Le = Y.create, ze = G.create, Ve = Q.create, Ue = X.create, Ke = ee.create, We = te.create, Be = ae.create, qe = se.create, Fe = re.create, Je = ie.create, Ye = oe.create, He = de.create, Ge = ce.create, Qe = ue.create, Xe = le.create, et = ce.createWithPreprocess, tt = _e.create, at = ()=>ke().optional(), st = ()=>we().optional(), rt = ()=>Ne().optional(), nt = {
    string: (e)=>j.create({
            ...e,
            coerce: !0
        }),
    number: (e)=>I.create({
            ...e,
            coerce: !0
        }),
    boolean: (e)=>R.create({
            ...e,
            coerce: !0
        }),
    bigint: (e)=>P.create({
            ...e,
            coerce: !0
        }),
    date: (e)=>A.create({
            ...e,
            coerce: !0
        })
}, it = m;
var ot = Object.freeze({
    __proto__: null,
    defaultErrorMap: i,
    setErrorMap: d,
    getErrorMap: c,
    makeIssue: u,
    EMPTY_PATH: l,
    addIssueToContext: p,
    ParseStatus: h,
    INVALID: m,
    DIRTY: f,
    OK: y,
    isAborted: _,
    isDirty: v,
    isValid: g,
    isAsync: x,
    get util () {
        return e;
    },
    ZodParsedType: t,
    getParsedType: a,
    ZodType: T,
    ZodString: j,
    ZodNumber: I,
    ZodBigInt: P,
    ZodBoolean: R,
    ZodDate: A,
    ZodSymbol: M,
    ZodUndefined: $,
    ZodNull: D,
    ZodAny: L,
    ZodUnknown: z,
    ZodNever: V,
    ZodVoid: U,
    ZodArray: K,
    get objectUtil () {
        return W;
    },
    ZodObject: q,
    ZodUnion: F,
    ZodDiscriminatedUnion: Y,
    ZodIntersection: G,
    ZodTuple: Q,
    ZodRecord: X,
    ZodMap: ee,
    ZodSet: te,
    ZodFunction: ae,
    ZodLazy: se,
    ZodLiteral: re,
    ZodEnum: ie,
    ZodNativeEnum: oe,
    ZodPromise: de,
    ZodEffects: ce,
    ZodTransformer: ce,
    ZodOptional: ue,
    ZodNullable: le,
    ZodDefault: pe,
    ZodCatch: he,
    ZodNaN: me,
    BRAND: fe,
    ZodBranded: ye,
    ZodPipeline: _e,
    custom: ve,
    Schema: T,
    ZodSchema: T,
    late: ge,
    get ZodFirstPartyTypeKind () {
        return xe;
    },
    coerce: nt,
    any: Ce,
    array: Ae,
    bigint: Te,
    boolean: Ne,
    date: Oe,
    discriminatedUnion: Le,
    effect: Ge,
    enum: Je,
    function: Be,
    instanceof: be,
    intersection: ze,
    lazy: qe,
    literal: Fe,
    map: Ke,
    nan: Ze,
    nativeEnum: Ye,
    never: Pe,
    null: je,
    nullable: Xe,
    number: we,
    object: Me,
    oboolean: rt,
    onumber: st,
    optional: Qe,
    ostring: at,
    pipeline: tt,
    preprocess: et,
    promise: He,
    record: Ue,
    set: We,
    strictObject: $e,
    string: ke,
    symbol: Se,
    transformer: Ge,
    tuple: Ve,
    undefined: Ee,
    union: De,
    unknown: Ie,
    void: Re,
    NEVER: it,
    ZodIssueCode: s,
    quotelessJson: r,
    ZodError: n
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1s58O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSetting", ()=>i);
var _asyncToGeneratorMjsJs = require("./../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _indexJs = require("../appEnv/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _notFoundJs = require("../common/notFound.js");
var _notFoundJsDefault = parcelHelpers.interopDefault(_notFoundJs);
var _decoratorJs = require("../utils/decorator.js");
var _getSettingJs = require("../common/apis/general/getSetting.js");
var _getSettingJsDefault = parcelHelpers.interopDefault(_getSettingJs);
var _tslibEs6Js = require("./../external/tslib/tslib.es6.js");
function i(t) {
    return m.apply(this, arguments);
}
function m() {
    return (m = (0, _asyncToGeneratorMjsJsDefault.default)(function(i) {
        return (0, _tslibEs6Js.__generator)(this, function(m) {
            return [
                2,
                (0, _decoratorJs.functionHandler)("getSetting", [], [
                    i
                ], (0, _asyncToGeneratorMjsJsDefault.default)(function() {
                    return (0, _tslibEs6Js.__generator)(this, function(t) {
                        switch(t.label){
                            case 0:
                                return (0, _indexJsDefault.default).isMp ? [
                                    4,
                                    (0, _getSettingJsDefault.default)()
                                ] : [
                                    3,
                                    2
                                ];
                            case 1:
                                return [
                                    2,
                                    t.sent()
                                ];
                            case 2:
                                return (0, _indexJsDefault.default).isMpWeb ? [
                                    2,
                                    Promise.resolve({
                                        authSetting: {}
                                    })
                                ] : [
                                    2,
                                    Promise.reject((0, _notFoundJsDefault.default)("getSetting", {}))
                                ];
                        }
                    });
                }))
            ];
        });
    })).apply(this, arguments);
}

},{"./../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","../appEnv/index.js":"gwpxL","../common/notFound.js":"dqwdY","../utils/decorator.js":"6mOw4","../common/apis/general/getSetting.js":"hGZ1d","./../external/tslib/tslib.es6.js":"f0cFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fmZ1f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAppInfo", ()=>i);
var _asyncToGeneratorMjsJs = require("./../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _indexJs = require("../appEnv/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _notFoundJs = require("../common/notFound.js");
var _notFoundJsDefault = parcelHelpers.interopDefault(_notFoundJs);
var _decoratorJs = require("../utils/decorator.js");
var _getAppInfoJs = require("../common/apis/general/getAppInfo.js");
var _getAppInfoJsDefault = parcelHelpers.interopDefault(_getAppInfoJs);
var _tslibEs6Js = require("./../external/tslib/tslib.es6.js");
function i(r) {
    return p.apply(this, arguments);
}
function p() {
    return (p = (0, _asyncToGeneratorMjsJsDefault.default)(function(i) {
        return (0, _tslibEs6Js.__generator)(this, function(p) {
            return [
                2,
                (0, _decoratorJs.functionHandler)("getAppInfo", [], [
                    i
                ], (0, _asyncToGeneratorMjsJsDefault.default)(function() {
                    return (0, _tslibEs6Js.__generator)(this, function(r) {
                        switch(r.label){
                            case 0:
                                return (0, _indexJsDefault.default).isMp ? [
                                    4,
                                    (0, _getAppInfoJsDefault.default)()
                                ] : [
                                    3,
                                    2
                                ];
                            case 1:
                                return [
                                    2,
                                    r.sent()
                                ];
                            case 2:
                                return (0, _indexJsDefault.default).isMpWeb ? [
                                    2,
                                    Promise.resolve({
                                        description: "",
                                        name: "",
                                        version: "",
                                        appUrl: "",
                                        qrCodeUrl: ""
                                    })
                                ] : [
                                    2,
                                    Promise.reject((0, _notFoundJsDefault.default)("getAppInfo", {}))
                                ];
                        }
                    });
                }))
            ];
        });
    })).apply(this, arguments);
}

},{"./../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","../appEnv/index.js":"gwpxL","../common/notFound.js":"dqwdY","../utils/decorator.js":"6mOw4","../common/apis/general/getAppInfo.js":"e0mQy","./../external/tslib/tslib.es6.js":"f0cFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0mQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>n);
var _asyncToGeneratorMjsJs = require("./../../../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _constantsJs = require("../../../constants.js");
var _utilsJs = require("../../utils.js");
var _getSystemInfoJs = require("./getSystemInfo.js");
var _getSystemInfoJsDefault = parcelHelpers.interopDefault(_getSystemInfoJs);
var _tslibEs6Js = require("./../../../external/tslib/tslib.es6.js");
var n = (0, _asyncToGeneratorMjsJsDefault.default)(function() {
    var s, n, i, m = arguments;
    return (0, _tslibEs6Js.__generator)(this, function(e) {
        switch(e.label){
            case 0:
                return s = m.length > 0 && void 0 !== m[0] ? m[0] : (0, _constantsJs.APP_ID), n = m.length > 1 && void 0 !== m[1] ? m[1] : 0, i = (0, _getSystemInfoJsDefault.default)(), [
                    4,
                    (0, _utilsJs.getAppInfo)(s, n, i.version)
                ];
            case 1:
                return [
                    2,
                    e.sent()
                ];
        }
    });
});

},{"./../../../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","../../../constants.js":"fNy4G","../../utils.js":"xTmE8","./getSystemInfo.js":"43z0c","./../../../external/tslib/tslib.es6.js":"f0cFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"43z0c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>n);
var _commonJs = require("../../../utils/common.js");
var _packageJsonJs = require("../../../package.json.js");
var _getEnvJs = require("../../../appEnv/getEnv.js");
var _getEnvJsDefault = parcelHelpers.interopDefault(_getEnvJs);
function n() {
    var n, e;
    return {
        version: (0, _commonJs.getMetaValue)("version-id") || "",
        apiVersion: (0, _packageJsonJs.version),
        zaloVersion: (null === (n = (0, _getEnvJsDefault.default)()) || void 0 === n ? void 0 : n.zaloVersion) || "",
        platform: (null === (e = (0, _getEnvJsDefault.default)()) || void 0 === e ? void 0 : e.platformName) || "",
        language: navigator.language,
        zaloLanguage: window.zLanguage || "vi",
        zaloTheme: window.zTheme || "light"
    };
}

},{"../../../utils/common.js":"1HpFN","../../../package.json.js":"is42L","../../../appEnv/getEnv.js":"4G0wJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"is42L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>r);
var r = "2.32.4";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8v5NK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkZaloCameraPermission", ()=>t);
var _asyncToGeneratorMjsJs = require("./../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _decoratorJs = require("../utils/decorator.js");
var _checkZaloCameraPermissionJs = require("../common/apis/general/checkZaloCameraPermission.js");
var _checkZaloCameraPermissionJsDefault = parcelHelpers.interopDefault(_checkZaloCameraPermissionJs);
var _tslibEs6Js = require("./../external/tslib/tslib.es6.js");
function t(t) {
    return (0, _decoratorJs.functionHandler)("checkZaloCameraPermission", [], [
        t
    ], (0, _asyncToGeneratorMjsJsDefault.default)(function() {
        return (0, _tslibEs6Js.__generator)(this, function(r) {
            switch(r.label){
                case 0:
                    return [
                        4,
                        (0, _checkZaloCameraPermissionJsDefault.default)()
                    ];
                case 1:
                    return [
                        2,
                        r.sent()
                    ];
            }
        });
    }));
}

},{"./../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","../utils/decorator.js":"6mOw4","../common/apis/general/checkZaloCameraPermission.js":"ibgXI","./../external/tslib/tslib.es6.js":"f0cFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibgXI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>s);
var _asyncToGeneratorMjsJs = require("./../../../external/@swc/helpers/src/_async_to_generator.mjs.js");
var _asyncToGeneratorMjsJsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjsJs);
var _lodashJs = require("../../../utils/lodash.js");
var _lodashJsDefault = parcelHelpers.interopDefault(_lodashJs);
var _responseJs = require("../../../utils/response.js");
var _tslibEs6Js = require("./../../../external/tslib/tslib.es6.js");
var s = (0, _asyncToGeneratorMjsJsDefault.default)(function() {
    return (0, _tslibEs6Js.__generator)(this, function(s) {
        var o;
        return [
            2,
            new Promise((o = (0, _asyncToGeneratorMjsJsDefault.default)(function(r, s) {
                var o;
                return (0, _tslibEs6Js.__generator)(this, function(n) {
                    switch(n.label){
                        case 0:
                            return (0, _lodashJsDefault.default).isUndefined(ZaloJavaScriptInterface) || "function" != typeof ZaloJavaScriptInterface.checkCameraPermission ? [
                                3,
                                2
                            ] : [
                                4,
                                ZaloJavaScriptInterface.checkCameraPermission()
                            ];
                        case 1:
                            return o = n.sent(), [
                                2,
                                r({
                                    userAllow: "grant" === o
                                })
                            ];
                        case 2:
                            return s((0, _responseJs.apiResponse).error.clientNotSupport()), [
                                2
                            ];
                    }
                });
            }), function(r, e) {
                return o.apply(this, arguments);
            }))
        ];
    });
});

},{"./../../../external/@swc/helpers/src/_async_to_generator.mjs.js":"lkTC2","../../../utils/lodash.js":"28xEQ","../../../utils/response.js":"4HKAY","./../../../external/tslib/tslib.es6.js":"f0cFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3way1","l3OqJ"], "l3OqJ", "parcelRequire6eab")

//# sourceMappingURL=index.87e97a78.js.map
