---
layout: layouts/post.njk
title: eslint-plugin-ng-extra
date: 2020-07-27
author: Ossama Edbali
tags: post
---

In the recent weeks I've been working on an <a href="https://github.com/oss6/eslint-plugin-ng-extra">ESLint plugin</a> for Angular.
It includes rules that I found to be useful when developing medium-large applications using reactive programming concepts as well as server
side rendering.

The rules to date are:

<ul class="list-disc pl-8">
  <li><pre>check-http-errors</pre> checks that when using the HTTP client, errors are caught</li>
  <li><pre>no-dangling-subscription</pre> checks that there are no dangling subscriptions in a component</li>
  <li><pre>no-nested-subscriptions</pre> checks that there are no nested subscriptions in a component</li>
  <li><pre>no-subject-exposition</pre> checks that no subjects are publicly exposed</li>
</ul>

Feel free to <a href="https://github.com/oss6/eslint-plugin-ng-extra/blob/master/CONTRIBUTING.md">contribute</a> and/or raise issues/features!
