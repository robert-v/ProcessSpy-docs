---
title: Bottom Pane
---
Bottom pane shows detailed information about the selected process in the main table. It consists of multiple sections grouped by categories:

## General
- Name
- PID
- Start Time
- Last Seen (for finished processes, when the process was last observed before finishing)
- Bundle ID
- Main Executable (license only)
- Format (license only)
- Startup Entry (license only)
- Signature 
  - collapsed state: Signing Organization
  - expanded state: Detailed signature information about Issuer and Subject fields
- Parent process (Name and PID)
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