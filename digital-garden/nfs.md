---
layout: layouts/digital-garden-note.njk
title: Network File System
tags: digital-garden
note_type: seed
categories:
- sysadmin
---

A Network File System (NFS) is a distributed file system protocol. It allows remote hosts to mount file systems over a network and interact with those file systems as though they are mounted locally.

All NFS versions can use TCP; NFSv4 requiring it. NFSv2 and NFSv3 can use UDP to provide a stateless network connection between the client and server.

NFS allows the user to mount all or part of a file system on a server.
The portion of the file system that is mounted can be accessed by clients with whatever privileges are assigned to each file.
NFS uses Remote Procedure Calls (RPCs) to route requests between clients and servers.


