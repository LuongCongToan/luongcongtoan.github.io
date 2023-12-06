@echo off


set ip_address_string="IPv4 Address"
rem Uncomment the following line when using older versions of Windows without IPv6 support (by removing "rem")
rem set ip_address_string="IP Address"
REM echo Network Connection Test
set IPv4=127.0.0.1
for /f "usebackq tokens=2 delims=:" %%f in (`ipconfig ^| findstr /c:%ip_address_string%`) do set IPv4=%%f

echo access link: http://%IPv4:~1%:8000

python -m http.server


