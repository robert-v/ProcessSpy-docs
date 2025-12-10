---
title: Table Columns
---

The main table in the application displays various columns that provide essential information about each process. Below is a description of each column:

### PID
Process identifier. Changes to `PID @ timestamp_last_seen` when the process is finished.

### Name
This column along with process name contains the following information depending on current settings:
- Icon - shows process icon when available
- Process Finished indicator - pie chart showing how much time if left until the process disappears from the list
- Recording indicator - green dot shown when the process history is being recorded
- NEW badge - shown when the process started less than 30 seconds ago
- Indentation guide - shows one dot per level of hierarchy depth starting from the second level of depth
- CPU mini chart - shows CPU usage history over the last 30 seconds, from 0 to 100 percent
- Secondary value - shows one of the available secondary values depending on current settings

### Command
Shows the full command used to start the process. Command string is truncated in the middle to fit the column width.

### CPU %
Shows CPU usage in percent. For multi-core systems, this value can exceed 100% with a maximum of `(number of cores * 100)%`.

### Version
Shows the version of the process when available (`CFBundleShortVersionString` from `Info.plist`).

### Resident Memory
Shows the resident memory usage in bytes. This is the portion of memory occupied by a process that is held in RAM. Equals to `Real Memory` in Activity Monitor.

### Virtual Memory
Shows the virtual memory usage in bytes. This is the total amount of memory that a process can access, including memory that is not currently in RAM. Equals to `Virtual Memory` in Activity Monitor

### User
Shows the user owning the process.

### Threads
Shows the number of threads used by the process.

### Prio / Nice
Shows the priority and nice value of the process.

