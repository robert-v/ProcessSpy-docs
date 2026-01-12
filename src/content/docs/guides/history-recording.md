---
title: History Recording
description: Guide on how to use the history recording feature in ProcessSpy to monitor CPU, memory, and thread count of processes over time.
head:
  - tag: meta
    attrs:
      name: keywords
      content: macos process history recording, process cpu usage history, process memory usage history, process thread count history
---

## Overview
ProcessSpy includes a history recording (license required) feature that allows users to monitor and log the CPU usage, memory consumption, and thread count of specific processes over time. This feature is particularly useful for analyzing the behavior of resource-intensive applications and tracking changes in process activity.

## Enabling History Recording
To enable history recording for a specific process, follow these steps:
1. Right-click on the desired process in the main process list to open the context menu.
2. Select "Start History Recording" from the context menu.
3. The process will now begin recording its CPU %, Resident Memory, and Thread count over time. This is indicated by green dot next to the process name in the main table.

## Viewing Recorded History
Once history recording is enabled for a process, you can view the recorded data in the bottom pane.
There are two graphs available:
- **CPU %**: Displays the CPU usage percentage for the process and aggregate CPU usage (all child processes - if any) over time.
- **Resident Memory**: Displays Resident Memory for the process and aggregate values (all child processes - if any) over time. Unit is automatically adjusted (KB, MB, GB).

Each graphs shows when the application was active (in foreground) by highlighting the corresponding time intervals with a light background.

## Manipulating History Graphs
- **Hovering**: Move the mouse cursor over the graph to see detailed values at specific time points.
- **Scrolling**: Drag horizontally to scroll through the recorded history.
- **Resetting scroll**: When scrolled, a "Reset" button appears in the top-right corner of the graph. Click it to return to the latest recorded data.

## Exporting History Data
You can export the recorded history data for further analysis:
1. Right-click on the desired process in the main process list to open the context menu.
2. Select "Export History Data..." from the context menu.
3. Choose a location to save the exported CSV file containing the recorded history data.

The exported CSV file includes the following columns:
- Timestamp (UTC time)
- PID
- ProcessName
- CPU_Percent
- ResidentMemory_MB
- CumulativeCPU_Percent
- CumulativeResidentMemory_MB
- Threads

Note: History recording continues until manually stopped or the process terminates. To stop recording, right-click on the process and select "Stop History Recording" from the context menu.

## Accessing Recorded Data For Finished Processes
Recorded history data for finished processes can still be accessed in the bottom pane as long as the process is remembered by the tool depending on the "Remember finished processes for" setting in Preferences > General.
