---
layout: layouts/digital-garden-note.njk
title: Angular dynamic components
tags: digital-garden
note_type: seed
categories:
- Angular
- Web Development
todos:
- Check internals
references:
- angular-change-detection
---

In certain use cases, we may need to load component dynamically, for example to cater for unique needs in the same category.

## Placeholder

First we need to define a placeholder/anchor that tells Angular where to insert the component. This can be done via a directive:

```ts
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[testimonialHost]',
})
export class TestimonialHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
```

## Injecting the components

```ts
export class TestimonialCollectionComponent implements OnInit, OnDestroy {
  @Input() testimonials: Testimonial[];

  @ViewChild(TestimonialHostDirective, { static: true }) testimonialHost: TestimonialHostDirective;

  currentIndex = -1;

  interval: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.rotateTestimonials();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    const testimonial = this.testimonials[this.currentIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(testimonial.component);

    const viewContainerRef = this.testimonialHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<TestimonialComponent>(componentFactory);
    componentRef.instance.data = testimonial.data;
  }

  rotateTestimonials() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 2000);
  }
}
```
