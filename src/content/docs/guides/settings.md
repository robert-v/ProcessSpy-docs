---
title: Settings
---

## General
### Display
- **Show aggregate values in hierarchy mode**: When enabled, aggregate values for `CPU %`, `Resident Memory` and `Threads` columns are shown in Hierarchy view. These aggregate values represent the sum of the respective metrics for a process and all its child processes.
- **Show dotted guides in hierarchy mode**: When enabled, indentation guides are shown in the `Name` column to visually represent the hierarchy depth of each process.
- **Enable quick search highlighting**: When enabled, matching text in the quick-search results is highlighted in the main table.
- **Show mini cpu graph next to each process name**: When enabled, a mini CPU usage graph is displayed next to each process name in the main table, showing CPU usage history over the last 30 seconds. Values are capped to 100%.
- **Show NEW badge for newly discovered processes**: When enabled, a "NEW" badge is displayed next to processes that started less than 30 seconds ago.
- **Show secondary line in process name cell**: When enabled, a secondary value is displayed below the process name in the main table. The secondary value can be selected from the following options:
  - Bundle ID (license only)
  - Command
  - Format (license only)
  - Signing Organization (license only)
  - Startup Entry (license only)
  - User
  - Version

### Behavior
- **Refresh interval (seconds)**: Sets the interval at which process information is refreshed in the main table.
- **Case sensitive search**: When enabled, quick-search filters are case-sensitive.
- **Show confirmation dialog before Quitting process**
- **Remember finished processes (minutes)**: Sets the duration for which finished processes are retained in the main table before being removed.

### External tools
- **Path to vmmap**: Specifies the path to the `vmmap` tool used to retrieve dynamic library information for processes. By default, the application uses the system's `vmmap` located at `/usr/bin/vmmap`.
- **Search query format**: Allows to customize the format of search queries when using the "Search Online" context menu. The string must containt placeholder for process name: `[processName]`. For example, to search on Google, use `https://www.google.com/search?q=[processName]`.

## Colors
Allows to highlight processes in the main table containing the specified string in their name or command, or both with custom colors.

## Shortcuts
Allows to define when a macOS Shortcut is triggered based the combination of:
- Process Name (contains)
- Process Event: `Process Started` or `Process Finished`

Shortcut is called with the following parameters: `input=text&text=[processName]` where `[processName]` is replaced with the name of the process triggering the shortcut.

## Filters
Allows to define JavaScript filters used to filter processes in the main table. See [JavaScript filters](/reference/js-filters/) for more information.
