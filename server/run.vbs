Set WshShell = CreateObject("WScript.Shell" ) 
WshShell.Run chr(34) & "run.bat" & Chr(34), 0 
Set WshShell = Nothing 

Dim iURL 
Dim objShell
iURL = "http://localhost:3000/client"
set objShell = CreateObject("WScript.Shell")
objShell.run(iURL)