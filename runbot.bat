@echo off
:start
echo Menjalankan Aplikasi Node JS
node index.js

rem Cek kode keluaran dari node
if %errorlevel% neq 0 (
    echo Terjadi Kesalahan Error, Proses Untuk Mencoba Menyalakan Kembali
    timeout /t 5 /nobreak >nul
    goto start
)

echo Aplikasi Berhasil Dijalankan
pause
