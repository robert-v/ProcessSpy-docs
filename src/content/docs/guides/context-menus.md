---
title: Context Menus
---

## Process Context Menu
Right-clicking on a process in the process list opens a context menu with various actions:
- **Bring to Front**: Brings the selected process's window to the front (if applicable).
- **Search Online**: Opens a web browser to search for the selected process's name.
- **Show in Finder**: Opens the Finder at the location of the selected process's executable.
- **Copy**:
  - **PID**: Copies the PID of the selected process to the clipboard.
  - **Name**: Copies the name of the selected process to the clipboard.
  - **Command**: Copies the command (without arguments) used to start the selected process to the clipboard. To get the full command including arguments, use the bottom pane.
  - **Path**: Copies the full path of the selected process's executable to the clipboard.
  - **Version**: Copies the version of the selected process's executable to the clipboard. Disabled if version information is not available.
- **Start History Recording**: Starts recording historical data (CPU %, Resident Memory and Threads) for the selected process.
- **Stop History Recording**: Stops recording historical data for the selected process.
- **Export History**: Exports the recorded history of the selected process as a CSV file.
- **Send Signal** (requires appropriate permissions):
  - **Pause**: Pauses the selected process by sending SIGSTOP signal 
  - **Resume**: Resumes the selected paused process by sending SIGCONT signal
  - **User 1**: Sends SIGUSR1 signal to the selected process.
  - **User 2**: Sends SIGUSR2 signal to the selected process.
  - **Hangup**: Sends SIGHUP signal to the selected process.
  - **Terminate**: Sends SIGTERM signal to the selected process to request a graceful termination.
  - **Kill**: Sends SIGKILL signal to the selected process to forcefully terminate it.
  - **Interrupt**: Sends SIGINT sto the selected process to request a graceful termination.
  - **Quit**: Sends SIGQUIT signal to the selected process to request a graceful termination with a core dump.

## File Context Menu (Bottom Pane - Files Section)
Right-clicking on a file entry in the bottom pane's Files section opens a context menu with the following actions:
- **Show in Finder**: Opens the Finder at the location of the selected file.
- **Open With**: Generates a list of available applications to open the selected file type. If no applications are available, the list is empty.
- **Copy Path**: Copies the full path of the selected file to the clipboard.

## Connection Context Menu (Bottom Pane - Connections Section)
Right-clicking on a connection entry in the bottom pane's Connections section opens a context menu with the following actions:
- **Copy Source**: Copies the local address of the selected connection to the clipboard.
- **Copy Destination**: Copies the remote address of the selected connection to the clipboard.

## Dylib Context Menu (Bottom Pane - Dylibs Section)
Right-clicking on a dylib entry in the bottom pane's Dylibs section opens a context menu with the following actions:
- **Show in Finder**: Opens the Finder at the location of the selected dylib.
- **Copy Path**: Copies the full path of the selected dylib to the clipboard.
