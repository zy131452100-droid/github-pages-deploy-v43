@echo off
cd /d "%~dp0"
set "NODE_EXE=C:\Users\ABCD\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=node"
start "AIGC Portfolio Server" /min "%NODE_EXE%" server.mjs
timeout /t 2 /nobreak >nul
start "" "http://localhost:3000/?v=aigc-gallery-template-59"
