@echo off
color a
echo Hola, bienvenido a la instalacion de la vpn custom
ping -n 3 127.0.0.1>nul
echo es necesario descargar archivos
ping -n 2 127.0.0.1>nul
echo presiona cualquier tecla para continuar
pause>nul
echo descargando...
ping -n 6 127.0.0.1>nul
echo archivo descargado
ping -n 2 127.0.0.1>nul
echo presiona cualquier tecla para continuar
pause>nul
echo instalando...
ping -n 7 127.0.0.1>nul
echo instalado
echo es necesario reiniciar
ping -n 2 127.0.0.1>nul
echo preciona cualquier tecla para reiniciar
pause>nul
ping -n 11 127.0.0.1>nul
Shutdown -r
exit