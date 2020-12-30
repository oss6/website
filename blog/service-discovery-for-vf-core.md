---
layout: layouts/post.njk
title: Service discovery for vf-core
date: 2020-12-30
author: Ossama Edbali
tags: post
---

<a href="https://github.com/visual-framework/vf-core" target="_blank">vf-core</a> is a (primarily CSS) framework that targets needs of life science websites and services. It is used by websites/services like the <a href="https://www.embl.org/" target="_blank">European Molecular Biology Laboratory</a> and the <a href="https://www.covid19dataportal.org/" target="_blank">COVID-19 Data Portal</a>.

Working on the latter, I found myself extensively using `vf-core`. It's a modular library, easy to use, and well documented.
However one aspect that challenged me was the usage of vf-core in the COVID-19 Data Portal (or any other codebase).
I wanted to know which version of a vf-core component is installed, which files are using a certain component, and whether the installed
version is not the latest. In a sense I wanted an audit (like <a href="https://docs.npmjs.com/cli/v6/commands/npm-audit" target="_blank">npm audit</a>) of the repository using vf-core components.

With these requirements in mind, I thought to build a <a href="https://github.com/oss6/vf-core-service-discovery" target="_blank">tool</a> that addresses those issues.
The main features of `vf-core-service-discovery` are:

- Get package information such as current version, latest version, and component status.
- Get changelog if current and latest versions are mismatched.
- For each installed component get the dependent files (for now only HTML files).

`vf-core-service-discovery` exposes a CLI tool as well as modules so that one can use the service discovery programmatically.

An example of running the tool is the following:

<img src="/images/vf-core-service-discovery-demo.gif" alt="vf-core-service-discovery demo" />

You're more than welcome to contribute and/or use the tool!
