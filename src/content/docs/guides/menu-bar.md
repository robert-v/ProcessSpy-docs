---
title: Menu Bar Popover
description: Quick access to system-wide metrics and the top processes without opening the main window.
head:
  - tag: meta
    attrs:
      name: keywords
      content: macos menu bar process monitor, menu bar cpu usage, menu bar ram usage, menu bar gpu usage, menu bar disk io, menu bar network io, top processes menu bar
---
Clicking the ProcessSpy menu bar item opens a popover with a compact overview of the system and a live list of running processes. It is designed for a quick check without opening the main window and consists of a metrics area, a process list and a toolbar.

## System Metrics

The upper part of the popover shows system-wide metrics. Each tile displays the current value together with a history graph covering the recent sampling interval.

- **CPU** - total CPU usage across all cores in percent.
- **RAM** - memory currently in use.
- **GPU** - GPU usage in percent. Estimated. Apple Silicon only.
- **Disk I/O** - combined read and write throughput per second.
- **Net I/O** - combined upload and download throughput per second.

The graph style follows the chart style configured in Settings (bars or sparklines).

### Context Tiles

The last tile provides additional info about one of the areas above. The displayed area can be changed by clicking the tile. 


## Process List

Below the metrics is a scrollable list of processes. Each row shows:

- Application icon
- Process name
- inline value (optional)
- seconadry value (optional)
- History graph of the sorted metric
- Current value of the sorted metric

Clicking a row selects the process in the main window.

### Triage dashboard button
See [Triage Dashboard](/guides/triage-dashboard/) for more information.

### Filter Tabs

This mirros user filters in the main window. Selecting a tab shows only processes matching the selected filter.

### List Controls

- **Seconadry value** - shows the selected field under the process name.
- **Inline value** - shows the selected field after the process name.
- **Sort** - selects the metric the list is sorted by, for example CPU. The chosen metric is the one shown as a value and history graph in each row (if applicable).
- **Defaults** - each filter can have default values for the above controls. See [User filters](/guides/user-filters/) for more information.

Some fields require license to be accessible.
## Toolbar

The bottom toolbar contains, from left to right:

- **Power button** - quits ProcessSpy.
- **Refresh button** - check for app updates.
- **Counter** - shows the number of currently displayed processes out of the total number of running processes (filtered), in `shown / total` format.
- **Time back button** - shows exited processes (license required).
- **Timeline** - shows timeline, for more information see [Table Columns](/guides/table-columns/#timeline).
- **Settings** - opens the application settings.
- **Main window** - opens the main ProcessSpy window.