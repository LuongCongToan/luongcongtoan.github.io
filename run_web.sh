#!/bin/sh
# Serves this WebGL build on port 8081 from macOS (or Linux), using the python3 that ships with the
# Xcode Command Line Tools. Unlike run_web.bat it listens on every interface, so a phone on the same
# Wi-Fi can open the http://<ip>:8081/ it prints. Camera and other secure-context features still need
# https or localhost, so test those in this machine's browser.

# Project-specific port: other Unity WebGL builds served on localhost:8000
# leave a ServiceWorker cache that would be reused here
PORT=8081

cd "$(dirname "$0")" || exit 1

if ! command -v python3 >/dev/null 2>&1; then
    echo "python3 not found. Install the Xcode Command Line Tools: xcode-select --install" >&2
    exit 1
fi

# Extra flags go to serve.py, e.g. ./run_web.sh --no-browser
exec python3 serve.py --port "$PORT" --root "$PWD" "$@"
