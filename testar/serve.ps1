# Minimal static file server for the WebGL build, using only what ships with Windows.
# Serves correct MIME types (application/wasm etc.) so Unity can stream-compile the wasm.
param(
    [int]$Port = 8080,
    [string]$Root = $PSScriptRoot,
    [switch]$NoBrowser
)

$ErrorActionPreference = 'Stop'
$Root = [System.IO.Path]::GetFullPath($Root)

$mimeTypes = @{
    '.html' = 'text/html; charset=utf-8'
    '.htm' = 'text/html; charset=utf-8'
    '.js' = 'application/javascript'
    '.mjs' = 'application/javascript'
    '.css' = 'text/css'
    '.json' = 'application/json'
    '.webmanifest' = 'application/manifest+json'
    '.wasm' = 'application/wasm'
    '.data' = 'application/octet-stream'
    '.task' = 'application/octet-stream'
    '.bin' = 'application/octet-stream'
    '.png' = 'image/png'
    '.jpg' = 'image/jpeg'
    '.jpeg' = 'image/jpeg'
    '.gif' = 'image/gif'
    '.svg' = 'image/svg+xml'
    '.ico' = 'image/x-icon'
    '.mp3' = 'audio/mpeg'
    '.mp4' = 'video/mp4'
    '.txt' = 'text/plain; charset=utf-8'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
try {
    $listener.Start()
} catch {
    Write-Host "Error: could not listen on port $Port ($($_.Exception.Message))" -ForegroundColor Red
    exit 1
}

$url = "http://localhost:$Port/"
Write-Host "Serving $Root"
Write-Host "Open $url  (close this window to stop)"
if (-not $NoBrowser) { Start-Process $url }

# The PWA template's ServiceWorker.js serves everything cache-first, so a rebuild
# stays invisible until Ctrl+F5. Locally we answer it with a worker that wipes
# its caches, unregisters itself and reloads the page if it was serving stale files.
$killServiceWorker = [System.Text.Encoding]::UTF8.GetBytes(@'
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.registration.unregister();
    if (keys.length === 0) return;
    const windows = await self.clients.matchAll({ type: 'window' });
    windows.forEach((client) => client.navigate(client.url));
})()));
'@)

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    try {
        $relPath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath).TrimStart('/')
        if ($relPath -eq '') { $relPath = 'index.html' }
        if ($relPath -eq 'ServiceWorker.js') {
            $response.ContentType = 'application/javascript'
            $response.Headers['Cache-Control'] = 'no-store'
            $response.ContentLength64 = $killServiceWorker.Length
            $response.OutputStream.Write($killServiceWorker, 0, $killServiceWorker.Length)
            continue
        }
        $filePath = [System.IO.Path]::GetFullPath((Join-Path $Root $relPath))
        if ((Test-Path $filePath -PathType Container)) { $filePath = Join-Path $filePath 'index.html' }

        # Block requests that escape the served folder (e.g. /../secret)
        $inRoot = $filePath.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase)
        if (-not $inRoot -or -not (Test-Path $filePath -PathType Leaf)) {
            $response.StatusCode = 404
            Write-Host "404 $($request.Url.AbsolutePath)" -ForegroundColor Yellow
        } else {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
            # Compressed builds without decompression fallback need Content-Encoding,
            # with the MIME type of the file inside (e.g. x.wasm.gz -> application/wasm)
            $encodings = @{ '.gz' = 'gzip'; '.br' = 'br' }
            if ($encodings.ContainsKey($ext)) {
                $response.Headers['Content-Encoding'] = $encodings[$ext]
                $ext = [System.IO.Path]::GetExtension([System.IO.Path]::GetFileNameWithoutExtension($filePath)).ToLowerInvariant()
            }
            $contentType = $mimeTypes[$ext]
            if (-not $contentType) { $contentType = 'application/octet-stream' }
            $response.ContentType = $contentType
            # No caching, so a rebuild shows up on refresh
            $response.Headers['Cache-Control'] = 'no-cache'

            $stream = [System.IO.File]::OpenRead($filePath)
            try {
                $response.ContentLength64 = $stream.Length
                $stream.CopyTo($response.OutputStream)
            } finally {
                $stream.Dispose()
            }
        }
    } catch {
        # Browser closed the connection mid-transfer; nothing to do
    } finally {
        $response.Close()
    }
}
