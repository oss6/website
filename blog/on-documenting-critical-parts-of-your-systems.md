---
layout: layouts/post.njk
title: On documenting critical parts of your systems
date: 2020-05-04
author: Ossama Edbali
tags: post
---

In software development we hear a lot about the importance of documenting
systems such as APIs. However what I want to touch on in this post is the documentation of critical sections of the systems we develop.
This type of "internal" documentation has several benefits.

# Onboarding

All types of organised documentation provide newcomers to a company the ability to get up and running quickly, as well as knowing how the various systems and processes work.
This is especially relevant for critical/important parts of a system since certain design decisions may not be obvious at a glance.

# Transparency

Documenting eliminates the obscure nature of certain systems, especially ones that have held the test of time.

# Confidence

When it comes to refactoring a critical part of the system there are difference confidence indicators that may be useful. One of them is the documentation. Knowing a system is knowing the implications of certain changes on the main and edge cases.

# Diagnostic tool

Documentation is beneficial when it comes to dealing with bugs or incidents. For example one may have not worked on a specific part of a codebase, however when faced with a live incident they may find pointers in the documentation on how to triage the incident and produce a confident root cause analysis.
