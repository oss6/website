---
layout: layouts/digital-garden-note.njk
title: Angular change detection
tags: digital-garden
note_type: seed
categories:
- Angular
- Web Development
todos:
- Change detection loops
- Performance
- Check internal code
---

## Introduction

In frontend frameworks, change detection is the process of updating the DOM when the data changes.

The process in Angular, at a high level, works as follows:

<ul class="list-disc pl-8">
  <li>Data model is updated (e.g. through data binding)</li>
  <li>Angular detects change</li>
  <li>Change detection runs against the component tree</li>
  <li>If there is a new value, Angular updates the DOM</li>
</ul>

**Note**: change detection does not perform a deep object comparison.

## Overriding browser default mechanisms

At startup time, Angular will patch several low-level browser APIs (e.g. `addEventListener`) using a
library called <a class="link" href="https://github.com/angular/angular/tree/master/packages/zone.js" target="_blank">Zone.js</a>.
A Zone is an execution context that persists across async tasks.

## How it works

Each Angular component has an associated change detector, which is created at application startup time.
For each expression used in the template, it's comparing the current value of the property used in the expression with the previous value of that property.

If the values are different then it sets a `isChanged` variable to true.

## Change detection strategies

Angular provides two strategies to run change detections:

<ul class="list-disc pl-8">
  <li><code>Default</code></li>
  <li><code>OnPush</code></li>
</ul>

### Default change detection strategy

The default strategy checks every component in the component tree from top to bottom every time an event triggers change detection.

### OnPush change detection strategy

This change detection strategy provides the possibility to skip unnecessary checks for a component and all it's child components.

The component will be updated only if:

<ul class="list-disc pl-8">
  <li>Input references are changed (e.g. new reference to object/array).</li>
  <li>The component or one of its children triggers an event handler (e.g clicking a button).</li>
  <li>Change detection is triggered manually.</li>
  <li>An observable linked to the template via the async pipe emits a new value.</li>
</ul>

## Change detection loops and ExpressionChangedAfterCheckedError

TODO.

## Run code without change detection

```
export class MyComponent {
  constructor(private ngZone: NgZone) {}

  runWithoutChangeDetection() {
    this.ngZone.runOutsideAngular(() => {
      // the following setTimeout will not trigger change detection
      setTimeout(() => doStuff(), 1000);
    });
  }
}
```

## Deactivate change detection

In certain cases, deactivating change detection is useful, for example if one wants to reduce the frequency of checks when using WebSockets.

In this case we can use `detach()` to deactivate change detection and `detectChanges()` to trigger it manually.

## Performance

TODO.

## References

<ol class="list-decimal pl-8">
  <li>
    <a class="link" href="https://www.mokkapps.de/blog/the-last-guide-for-angular-change-detection-you-will-ever-need/" target="_blank">
      The Last Guide For Angular Change Detection You'll Ever Need
    </a>
  </li>
</ol>
