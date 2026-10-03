@echo off
rem Serves this WebGL build on http://localhost:8081 using Windows' built-in PowerShell,
rem so it runs on any Windows 10/11 PC without installing anything.

rem Project-specific port: other Unity WebGL builds served on localhost:8000
rem leave a ServiceWorker cache that would be reused here
set PORT=8081

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1" -Port %PORT% -Root "%~dp0."

pause
