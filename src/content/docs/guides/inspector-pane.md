---
title: Inspector Pane
description: Detailed information about the selected macOS process shown in the bottom pane of the main window.
head:
  - tag: meta
    attrs:
      name: keywords
      content: view process info.plist, view process entitlements, view process environment variables, view process open files, view process open connections, view process dylibs
---
Bottom pane shows detailed information about the selected process in the main table. It consists of multiple sections grouped by categories:

## General

### Identity and Time
- Name
- PID
- Start Time
- Run Time
- Last Seen (for finished processes, when the process was last observed before finishing)
### Process Details
- Bundle ID
- Main Executable (license only)
- Format (license only)
- Startup Entry (license only)
- Launched By - shows the process which launched the given process. Taken from Parent ASN field in the process information. This can be different from the parent process shown in the Hierarchy section as it represents the process that directly launched the given process. Evaluated for GUI applications.
- Signature 
  - collapsed state: Signing Organization
  - expanded state: Detailed signature information about Issuer and Subject fields
### Resource Usage
- CPU % - current CPU usage in percent. For multi-core systems, this value can exceed 100% with a maximum of `(number of cores * 100)%`.
- CPU Time - total CPU time used by the process since it started in `hh:mm:ss` format
- Memory - shows Resident Memory in bytes. Resident Memory is the portion of memory occupied by a process that is held in RAM. Equals to `Real Mem` in Activity Monitor.
- Footprint - shows the memory footprint of the process in bytes. This is the amount of RAM currently used by the process, including compressed memory. Equals to `Memory` in Activity Monitor.
- Threads
### Disk I/O Activity
- Read - total bytes read by the process since it started
- Read per second - bytes read per second by the process
- Written - total bytes written by the process since it started
- Written per second - bytes written per second by the process

### Hierarchy
- Parent process (Name and PID)
  - Parent is determined based on ```Parent PID``` or ```Responsible PID``` if Parent PID is not available.
- Child processes (Name and PID)

## Command
Full command used to start the process including command line arguments.
## Files
File descriptors of type `PROX_FDTYPE_VNODE` opened by the process including Index and Path.

**Right click** on a file entry opens a **context menu** with the following items:
- Show in Finder
- Open With (generates a list of available applications to open the given file type)
- Copy Path - copies full path to clipboard
## Connections
File descriptors of type `PROX_FDTYPE_SOCKET` opened by the process including Local Address, Remote Address, Protocol and State.

**Right click** on a connection entry opens a **context menu** allowing to copy source or destination address to clipboard.
## Dylibs
Loads dynamic libraries using the external tool `vmmap`. Shows file Path.

**Right click** on a dylib entry opens a **context menu** allowing to copy the path to clipboard or reveal the file in Finder.
## Env Vars
Shows environment variables set for the process in `KEY=VALUE` format. Supports text search.
## Entitlements
Shows entitlements of the process in `JSON` format.  Supports text search.
## Info.plist
Shows contents of the `Info.plist` file of the process in `KEY=VALUE` format. Supports text search.

## History
When process history recording is enabled, shows historical values of CPU %, Resident Memory and Virtual Memory over time. See [History recording](/guides/history-recording/) for more information.