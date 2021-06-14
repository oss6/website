---
layout: layouts/digital-garden-note.njk
title: Load Sharing Facility (LSF)
tags: digital-garden
note_type: seed
categories:
- Infrastructure
---

LSF is a workload management platform, job scheduler, for distributed high performance computing (1).

LSF balances load and allocates resources, and provides access to resources.

LSF provides a resource management framework that takes your job requirements, finds the best resources to run the job, and monitors its progress. Jobs always run according to host load and site policies. (2)

<img src="/images/digital-garden/lsf/lsf-cluster-overview.jpeg" />

<h2>Cluster</h2>

A cluster is a group of computer/hosts running LSF that work together as a single unit.

<h2>Hosts</h2>

Hosts in a cluster perform different functions:

<ul class="list-disc pl-8">
  <li>Management host - overall coordinator for the cluster, doing all job schedulign and dispatch.</li>
  <li>Server host - a host that submits and runs jobs</li>
  <li>Client host - a host that only submits jobs and tasks</li>
  <li>Execution host - a host that runs jobs and tasks</li>
  <li>Submission host - a host from which jobs and tasks are submitted</li>
</ul>

<h2>Job</h2>

A job is a unit of work that is running in the LSF system.
LSF schedules, controls, and tracks the job according to configured policies.

<h2>Job slot</h2>

A job slot is a bucket into which a single unit of work is assigned in the LSF system.

<h2>Queue</h2>

A cluster-wide container for jobs. All jobs wait in queues until they are scheduled and dispatched to hosts.

<h2 id="references">References</h2>

<ol class="list-decimal pl-8">
  <li>
    <a class="link" href="https://en.wikipedia.org/wiki/Platform_LSF">
      Platform LSF
    </a>,
    Wikipedia.
  </li>
  <li>
    <a class="link" href="https://www.ibm.com/docs/en/spectrum-lsf/10.1.0?topic=overview-lsf-introduction">
      Introduction to IBM Spectrum LSF
    </a>,
    IBM
  </li>
</ol>
