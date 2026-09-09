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
- **Table alternate row backgrounds**: When enabled, alternate rows in the main table have a different background color for better readability.
- **Cell vertical padding**: Adjusts the vertical padding of cells in the main table.
- **Cell font size**: Adjusts the font size of cells in the main table.

### Behavior
- **Refresh interval (seconds)**: Sets the interval at which process information is refreshed in the main table.
- **Case sensitive search**: When enabled, quick-search filters are case-sensitive.
- **Show confirmation dialog before sending signal**
- **Remember finished processes (minutes)**: Sets the duration for which finished processes are retained in the main table before being removed.
- **Automatically start recording matching processes** - processes matching JS expression will automatically start recording history on startup or when they are discovered.

### External tools
- **Path to vmmap**: Specifies the path to the `vmmap` tool used to retrieve dynamic library information for processes. By default, the application uses the system's `vmmap` located at `/usr/bin/vmmap`.
- **Search query format**: Allows to customize the format of search queries when using the "Search Online" context menu. The string must containt placeholder for process name: `[processName]`. For example, to search on Google, use `https://www.google.com/search?q=[processName]`.

### Privileged helper
Area for privileged helper tool installation and uninstallation.

- **Install helper**: Installs the privileged helper tool to allow receiving data (CPU, Memory etc.) from system processes.
- **Waiting for approval**: Indicates that the installation of the privileged helper tool is waiting for user approval in System Preferences - Login Items.
- **Remove**: Uninstalls the privileged helper tool.

See [Privileged Helper](/guides/privileged-helper/) for more information.

## Menu Bar
Allows to configure the [Menu Bar](/guides/menu-bar/) popover behavior and appearance.

### App Behavior
- **Show ProcessSpy in:**
  - **Menu Bar Only**: When enabled, ProcessSpy will be shown in the macOS menu bar.
  - **Dock Only**: When enabled, ProcessSpy will be shown in the macOS Dock.
  - **Menu Bar & Dock**: When enabled, ProcessSpy will be shown in both the macOS Dock and the menu bar.

### Menu Bar Widgets
Allows to configure which widgets are shown in the [Menu Bar](/guides/menu-bar/) popover and the chart style.

## Alerts
### Responsivness
- **App not responding**: When enabled, the application will display an alert when a process is not responding.
### Sustained usage
- **High CPU** - When enabled, the application will display an alert when a process is using high CPU for a sustained period of time and above the give threshold.
- **High GPU** - When enabled, the application will display an alert when a process is using high GPU for a sustained period of time and above the give threshold.
### Sustained throughput
- **High Disk throughput** - When enabled, the application will display an alert when a process is using high disk throughput (threshold managed internally)
- **High Network throughput** - When enabled, the application will display an alert when a process is using high network throughput (threshold managed internally)
### Linger
- **Keep cleared alerts** - When enabled, cleared alerts are kept in the alert list (triage dashboard in main window and menu bar popover) for given period of time.
### Ignored processes
Allows to define processes that will be ignored by the alert system.

## Colors
Allows to highlight processes in the main table containing the specified string in their name or command, or both with custom colors.

## Shortcuts
Allows to define when a macOS Shortcut is triggered based the combination of:
- Process Name (contains)
- Process Event: `Process Started` or `Process Finished`

Shortcut is called with the following parameters: `input=text&text=[processName]` where `[processName]` is replaced with the name of the process triggering the shortcut.

## Filters
Allows to define JavaScript filters used to filter processes in the main table. See [JavaScript filters](/reference/js-filters/) for more information.
