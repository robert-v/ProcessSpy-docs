---
title: User interface basics
description: Description of main elements of user interaface.
---

## Subtitle
Shows number of processes and filter name. When View Type is set to `Hierarchy, expand children fully`, it also shows number of processes shown but not matching the filter.

## View Type
Allows to select between four different view types:
- **Flat View**: Display list of processes matching selected user filter.
- **Hierarchy View**: Display tree of processes matching selected user filter. All parents not matching the filter are dimmed.
- **Hierarchy, expand children dimmed**: Display tree of processes and all children. Children not matching the current user filter are dimmed.
- **Hierarchy, expand children full**: Display tree of processes matching the current user filter and all their parents.

## Reveal Finished Processes
When enabled, finished processes matching selected user filter are shown in the process list/tree. Finished processes are shown with italic and strikethrough. 

## Click to select a process
Clicking this button enters the "select mode". In this mode, left-click anywhere on the screen will select the corresponding process in the main table

**Accessibility permissions are required to use this feature.**

## Export JSON
Copies the currently visible processes as JSON to clipboard.

## Quick-search filter
Allows to select one or more properties used in quick-search. The number of currently selected properties is shown on the button.

## Quick-search
Istantly searches for processes matching the given string (or regex) in the selected properties.

## User filters
Allows to select user filter. All processes matching the user filter are displayed in the main table.

## Bottom pane
When a process is selected in the main table, the bottom pane shows detailed information about the selected process. The bottom pane can be minimized or expanded using the button on the right side of the toolbar.

### Minimized state
Shows basic information about the selected process including PID, name, start time, Bundle ID (license only), signing organization (license only) and format (license only).

### Expanded state
Shows detailed information about the selected process. See [Bottom Pane](/guides/bottom-pane/) for more information.
