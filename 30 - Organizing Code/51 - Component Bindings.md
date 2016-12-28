# Component Bindings

Standard: **Refactor Angular applications to use services and components (<a href="#">W0046</a>)**

## Objectives

By the end of this lesson you will:

1. Define bindings on a component
1. Pass in data when including the component

## Rationale

Bindings (which are effectively custom HTML attributes) are how components communicate with each other.  While the specific syntax of Angular 1 (`<`, `@`, `=`, `&`) is pretty fucking strange (<-- technical term 😉), the concepts of getting data in and out of components exists in all component-based web frameworks.  

You could argue that Angular 1's component bindings are the _most_ confusing of any of the modern web frameworks, which means that if you nail these, things like Angular 2, React, Ember etc... will be a breeze.

## #1. Define bindings on a component

Assume you have the following component:

```js
(function() {
  'use strict'

  angular.module('app')
    .component('personForm', {
      controller: function() {
        const vm = this
        this.submit = function () { /* do fancy stuff*/ }
      },
      template: `<form ng-submit="$ctrl.submit()">
        <input ng-model="$ctrl.person.firstName">
        <input type="submit">
      </form>`,
    })

}());
```

You would, up until now, render it like this:

```html
<person-form></person-form>
```

But how could you pass a person in?  For that you would need _bindings_.  To define bindings, simply add a bindings object to the component:

```js
(function() {
  'use strict'

  angular.module('app')
    .component('personForm', {
      bindings: {
        person: '='
      },
      controller: function() {
        const vm = this
        this.submit = function () { /* do fancy stuff*/ }
      },
      template: `<form ng-submit="$ctrl.submit()">
        <input ng-model="$ctrl.person.firstName">
        <input type="submit">
      </form>`,
    })

}());
```

Then you would render it like this:

```html
<person-form person="$ctrl.somePerson"></person-form>
```

**Under the Hood**

The interesting lines are:

```js
bindings: {
  person: '='
},
```

Those lines tell Angular:

- When the "personForm" component (which is like a custom HTML tag) is defined
- Then also define an attribute called `person`
- And because I used the `=` sign, setup 2-way binding with the `person` in the outer component

**Step By Step**

So in order to define bindings you must:

1. Add a `bindings` key to the component
1. For every custom HTML attribute you want to add, add a property to the `bindings` object
1. For every property in `bindings`, choose how you want it to be setup (more on that below)
1. When you render the component, pass in the appropriate attributes

**On Property Names**

Just like components, you define the bindings using `camelCase` but reference them using `lower-dasherized-case`.  So if you define an binding of `myFunProp` then you would render it with `<my-component my-fun-prop="foo">`.

## #2 - Pass in data when including the component

You can pass data in one of three ways:

- `<` creates a one-way binding
- `=` creates a two-way binding
- `@` creates a one-way binding (for strings)

They would look like this:

```js
bindings: {
  person: '<', // one-way binding OR...

  person: '=', // two-way binding OR...

  person: '@', // one-way binding for strings
},
```

**One-Way Binding with `<`**

When you define a one-way binding, then changes to the _outer_ component will be reflected in your component.  But if you change properties on an object in your component, they will _not_ be reflected in the outer component.

Ideally most of your objects will be passed in with one-way binding `<`.  It's the "safest" from a maintenance standpoint in that when you make changes in your component they have fewer side-effects in the "outer world".

There are some caveats, which you should read about [here](https://docs.angularjs.org/guide/component#component-based-application-architecture)

**Two-Way Binding with `=`**

When you define a two-way binding, then changes to the _outer_ component will be reflected in your component.  And if you change properties on an object in your component, they will be reflected in the outer component as well.

This is in some ways the easiest for beginners to learn, but can cause the thorniest problems down the line.

**One-Way Binding with `@` for Strings**

This is useful for things like button text or class names or labels that.  It's similar to one-way binding with `<` but doesn't work for objects.


### !challenge
* type: multiple-choice
* id: wdi-angular-curriculum-component-bindings-02
* title: Component Bindings #2

##### !question
Which is the most appropriate binding to use when you want to pass in a simple text label?
##### !end-question

##### !options
- `bindings: {product: '<'}`
- `bindings: {product: '='}`
- `bindings: {product: '@'}`
- `bindings: {product: '&'}`
##### !end-options

##### !answer
`bindings: {product: '@'}`
##### !end-answer

##### !explanation
The `@` indicates that you want a one-way binding and because you just care about text, `@` is the most appropriate.

See [the docs](https://docs.angularjs.org/api/ng/service/$compile#-scope-)
##### !end-explanation
### !end-challenge




### !challenge
* type: multiple-choice
* id: wdi-angular-curriculum-component-bindings-03
* title: Component Bindings #3

##### !question
Given the following component:

```js
.component('contactForm', {
  bindings: {
    buttonText: '@'
  },
})
```

Which is the correct way to render it?
##### !end-question

##### !options
- `<contactForm buttonText="Save"></contactForm>`
- `<contact-form buttonText="Save"></contact-form>`
- `<contact-form button-text="Save"></contact-form>`
- `<contact-form button-text="{{Save}}"></contact-form>`
##### !end-options

##### !answer
`<contact-form button-text="Save"></contact-form>`
##### !end-answer

##### !explanation
Both component names (`contactForm`) and binding names (`buttonText`) need to be dasherized when you reference them.

See [the docs](https://docs.angularjs.org/api/ng/service/$compile#-scope-)
##### !end-explanation
### !end-challenge



### !challenge
* type: multiple-choice
* id: wdi-angular-curriculum-component-bindings-04
* title: Component Bindings #4

##### !question
You have a component hierarchy like this:

```
product
└── editForm
```

Where the `productComponent`'s template looks like this:

```html
<edit-form product="$ctrl.product"></edit-form>
```

If you wanted changes to `productComponent`'s `product` to stay in synch with changes made in the controller, which would you use?
##### !end-question

##### !options
- `bindings: {product: '<'}`
- `bindings: {product: '='}`
- `bindings: {product: '@'}`
- `bindings: {product: '&'}`
##### !end-options

##### !answer
`bindings: {product: '='}`
##### !end-answer

##### !explanation
Only `=` sets up two-way binding, which is what allows objects to stay in synch between components.

See [the docs](https://docs.angularjs.org/api/ng/service/$compile#-scope-)
##### !end-explanation
### !end-challenge


## Resources

- https://toddmotto.com/angular-1-6-is-here
