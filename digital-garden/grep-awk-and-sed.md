---
layout: layouts/digital-garden-note.njk
title: grep, awk, and sed
tags: digital-garden
note_type: seed
categories:
- Shell utilities
---

`grep`, `awk`, and `sed` are text processing utilities in Unix-based systems. They're usually used in combination.

In summary:

- `grep` is good for simple text matching.
- `sed` offers additional text transformation utilities.
- `awk` scripting language.

Throughout this note I'm going to use the following file (`test.log`) contents as an example:

```shell
03/22 08:51:06 TRACE  :...read_physical_netif: Home list entries returned = 7
03/22 08:51:06 INFO   :...read_physical_netif: index #0, interface VLINK1 has address 129.1.1.1, ifidx 0
03/22 08:51:07 INFO   :...read_physical_netif: index #1, interface TR1 has address 9.37.65.139, ifidx 1
03/22 08:51:08 WARNING:.....mailslot_create: setsockopt(MCAST_ADD) failed - EDC8116I Address not available.
03/22 08:51:08 ERROR:.....mailslot_create: setsockopt(MCAST_ADD) failed - EDC8116I Address not available.
03/22 08:51:09 INFO   :....mailslot_create: creating mailslot for timer
03/22 08:51:10 INFO   :...mailbox_register: mailbox allocated for timer
03/22 08:51:13 ERROR:.....mailslot_create: setsockopt(MCAST_ADD) failed - EDC8116I Address not available.
```

## grep

```shell
grep [OPTIONS] PATTERN [FILE...]
```

### Examples

**Get all error entries**

```shell
$ grep ERROR test.log
```

**Get all entries apart from INFO ones**

This is called _inverted matching_.

```shell
$ grep -v INFO test.log
```

**Show line numbers**

```shell
$ grep -n ERROR test.log
```

**Extract dates (using extended regular expressions)**

In order to return only the matched entries we use the `-o` option.
Moreover since I want to use the `\d` and `+` symbols, which are not part of the bare regular expression language, we need to use the `-E` option (extended regular expressions).

```shell
$ grep -Eo "\d+\/\d+ \d+:\d+:\d+" test.log
```

**Show count of matched entries**

```shell
$ grep -c ERROR test.log
```

## sed

As per the manual, `sed` is a stream editor utility that reads the specified files, or the standard input if no files are specified, modifying the input as specified by a list of commands. The input is then written to the standard output.

```shell
$ sed [OPTIONS] COMMAND FILE...
```

The form of a `sed` command is:

```shell
[address[,address]]function[arguments]
```

<ul class="list-disc pl-8">
  <li><code>address</code> is the condition applied to the lines of the text file (as a regex)</li>
  <li><code>function</code> is the command to execute (e.g. substitution)</li>
  <li><code>arguments</code> to specify the behaviour</li>
</ul>

### Examples

**Using sed as grep**

```shell
$ sed -n '/ERROR/ p' test.log
```

By default, each line of input is echoed to the standard output after all of the commands have been applied to it. The `-n` option suppresses this behaviour.

The function `p` writes the pattern to the standard output.

**Substitution**

```shell
$ sed 's/ERROR/CRITICAL/' test.log
```

**Modifying files in place**

```shell
$ sed -ibackup 's/ERROR/CRITICAL' test.log
```

The option `-i` edit files in-place. In this case `backup` is extension of the backup.

## awk

```shell
awk [ -v var=value ] [ 'prog' | -f progfile ] [ file ...  ]
```

As per the manual, `awk` scans each input `file` for lines that match any of a set of patterns specified literally in `prog` or in one or more files specified as -f progfile.  With each pattern there can be an associated action that will be performed when a line of a file matches the pattern.

A pattern-action statement has the form: `pattern {action}`. Pattern-action statements are separated by semicolons or newlines.

**Using awk as grep**

```shell
$ awk '/ERROR/{print $0}' test.log
```

**Substitution**

```shell
$ awk '{gsub(/ERROR/, "CRITICAL")}{print}' test.log
```

**Adding header and footer**

```shell
awk 'BEGIN {print "LOG SUMMARY\n-----"} {print} END {print "-----\nEND OF LOG SUMMARY"}' test.log
```

The special patterns BEGIN and END may be used to capture control before the first input line is read and after the last.
