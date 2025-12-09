---
title: JavaScript filters
---


## JavaScript filters

User filters can be defined using JavaScript. This allows to create complex filters that are not possible using the quick-search syntax.

For each filter a context is passed containing the following objects and properties:

- `process`: The process object to be tested against the filter.
- _username_: The username of the current user.

## Process object
The process object contains the following properties:

| Property              | Description                                                                       | Type    | License required |
|-----------------------|-----------------------------------------------------------------------------------|---------|------------------|
| `pid`                 | PID of the process                                                                | String  | No               |
| `name`                | Name of the process                                                               | String  | No               |
| `command`             | Command used to start the process                                                 | String  | No               |
| `cpuPerc`             | CPU usage of the process in percent                                               | String  | No               |
| `version`             | Version of the process                                                            | String  | No               |
| `priority`            | Priority of the process                                                           | String  | No               |
| `nice`                | Nice value of the process                                                         | String  | No               |
| `user`                | User owning the process                                                           | String  | No               |
| `residentMemory`      | Resident memory in bytes                                                          | Integer | No               |
| `virtualMemory`       | Virtual memory in bytes                                                           | Integer | No               |
| `threads`             | Number of threads                                                                 | Integer | No               |
| `startTime`           | Start time of the process                                                         | Date    | No               |
| `isApplication`       | Whether the process is windowed (activationPolicy = .regular)                     | Boolean | No               |
| `bundleIdentifier`    | Bundle ID (e.g. com.itone.ProcessSpy)                                             | String  | Yes               |
| `signingOrganization` | Extracted from process signature `Subject` `O` element                            | String  | Yes               |
| `startupEntryType`    | One of the following: `launchDaemon`, `launchAgent`, `loginItemBookmark` or empty | String | Yes              | 
