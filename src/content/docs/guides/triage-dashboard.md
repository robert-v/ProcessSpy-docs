---
title: Process Triage
description: Dashboard showing the top resource consumers, newly launched and recently ended processes and alerts.
head:
  - tag: meta
    attrs:
      name: keywords
      content: macos top cpu processes, what is using my cpu mac, recently ended processes macos, newly launched processes macos, process alerts macos, mac process dashboard
---

Process Triage is a dashboard answering three questions at a glance: what is consuming the most resources, what has just started and what has recently disappeared. All without needing to create custom JS filters. It is available both in the main window and in the [Menu Bar](/guides/menu-bar/) popover and is opened with the grid button on the left side of the filter tab bar. Pressing the button again returns to the process list.

## Main Window

The dashboard opens as an overlay above the process table. The header shows the total number of running processes.

The chips in the upper right corner filter which processes are taken into account across all sections:

- **Apple** - processes signed by Apple
- **3rd party** - processes signed by other developers
- **Unsigned** - processes without a valid code signature

### Top consumers

Lists the processes using the most of the selected resource. The metric is selected with the segmented control:

- **CPU** - CPU usage as a share of one core, so a process fully using two cores is reported as 200%
- **GPU** - GPU usage. Estimated. Apple Silicon only
- **MEM** - memory footprint
- **NET** - network throughput
- **DSK** - disk throughput

Each row shows the process icon, name, signing organization (license only), the time elapsed since the process started, the current value of the selected metric and a bar sized relative to the highest value in the list. The peak value observed for the selected metric is shown below the list. Clicking any row selects the process in the [Inspector pane](/guides/inspector-pane/).

### Needs Attention

Live and recent alerts. When no alert is active, the section shows `Nothing needs attention`.

### Recently ended

Processes that finished since ProcessSpy was launched, newest first, with the time elapsed since the process ended. Ended processes require a license.

### Just launched

Processes started most recently, newest first, with the time elapsed since the process started.

## Menu Bar Popover

The popover version shows the same data in a compact layout.

The metric shown in **Top consumers** is selected by clicking one of the metric tiles at the top of the popover - CPU, RAM, GPU, Disk I/O or Net I/O. The selected tile stays highlighted and the list updates immediately. As in the main window, each row shows the process icon, name, signing organization (license only), the current value and a bar relative to the highest value, with the peak value below the list.

Below the list a segmented control switches between the remaining sections, each with the number of entries it contains:

- **Ended** - processes that finished since ProcessSpy was launched (license only)
- **Launched** - recently started processes
- **Alerts** - live and recent alerts, glows when there is an active alert

Each entry shows the process icon, name, signing organization (license only) and the time elapsed since the process ended or started. Clicking any row opens main window and selects the process in the [Inspector pane](/guides/inspector-pane/).