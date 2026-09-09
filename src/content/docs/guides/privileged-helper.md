---
title: Privileged Helper
description: Optional root helper that lets ProcessSpy read full details of processes owned by other users, including root.
head:
  - tag: meta
    attrs:
      name: keywords
      content: macos root process info, monitor root processes mac, privileged helper macos, view environment variables of root process, open files of system process macos, cpu usage of system processes mac
---
macOS only lets an application read detailed information about processes owned by the same user. For processes owned by `root` or by other users - most system daemons, `kernel_task`, `WindowServer` and similar - the kernel denies these reads, so ProcessSpy cannot show their CPU usage, memory, open files or environment variables.

The privileged helper solves this. It is a small background service that runs as root and performs exactly the same read-only queries on behalf of ProcessSpy, so system processes show the same level of detail as your own. It is optional: everything else in ProcessSpy works without it.

## What Changes When It Is Enabled

Without the helper, processes owned by other users are marked as restricted and most of their details stay empty. With the helper enabled, the following becomes available for them as well:

- CPU time in user and system mode, and the QoS breakdown
- Resident memory, virtual memory, memory footprint and peak footprint
- Page-ins and thread count
- Disk bytes read and written
- Open files
- Open network connections, including local and remote address, protocol and state
- Listening TCP ports
- Command line arguments and environment variables
- Path to the main executable, which in turn lets ProcessSpy read the signature, entitlements and `Info.plist` of the process

## What It Does Not Do

The helper is deliberately limited to reading process information:

- It is **read-only**. It cannot start, stop, kill or modify any process, and it cannot write to disk.
- It performs **no network access** and sends nothing anywhere. All data is returned to ProcessSpy on your Mac.
- It serves **only ProcessSpy**. Every incoming request is verified against the code signature of the app, so no other application - including one signed by the same developer - can use it.
- It **runs only when needed**. It is started on demand and exits a few seconds after ProcessSpy stops querying it.

The data it returns is the same information already available through the standard macOS interfaces (`libproc`, `sysctl`); the helper only makes those reads succeed for processes ProcessSpy is otherwise not allowed to inspect.

## Installing

The helper is installed from ProcessSpy Settings:

1. Choose to install the helper. macOS asks for an administrator password once.
2. If macOS reports that approval is required, open **System Settings ▸ General ▸ Login Items & Extensions** and enable the ProcessSpy entry. ProcessSpy offers a button that takes you there directly.

Once approved, the helper is registered with `launchd` and starts automatically whenever ProcessSpy needs it. No further prompts appear, including after ProcessSpy updates itself - the updated helper is picked up automatically.

The Settings row shows the current state (installed and running, waiting for approval, or not installed) together with the version of the running helper.

## Removing

The helper can be removed at any time from the same place in Settings. After removal, processes owned by other users become restricted again, but ProcessSpy keeps working normally.

## In the Process List

The helper appears in the process list as `com.itone.ProcessSpy.PrivilegedHelper`, running as root. It is idle almost all of the time and exits shortly after ProcessSpy no longer needs it.