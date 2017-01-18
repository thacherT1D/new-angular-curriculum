# Component Events

Standard: **Refactor Angular applications to use services and components (<a href="#">W0046</a>)**

## Objectives

By the end of this lesson you will:

1. Publish events from a component
1. Capture events published by a component

## Rationale

You know how to get data _into_ a component, which is (relatively speaking) pretty simple.  But publishing events _from_ a component is slightly harder.

## #1 - Publish events from a component

Assume you have a component like this:

```js
(function() {
  'use strict'

  angular.module('app')
    .component('personForm', {
      bindings: {
        person: '<'
      },
      controller: function() {
        const vm = this
        vm.submit = function () { /* do fancy stuff*/ }
      },
      template: `<form ng-submit="$ctrl.submit()">
        <input ng-model="$ctrl.person.firstName">
        <input type="submit">
      </form>`,
    })

}());
```

Which you render like this:

```html
<person-form person="$ctrl.somePerson"></person-form>
```

How will the outer component know that the form has been submitted?

You can _pass in_ the event that the your component should call, using `&`:

```js
(function() {
  'use strict'

  angular.module('app')
    .component('personForm', {
      bindings: {
        person: '<',
        onSave: '&', // this allows an outer component to pass in a function, basically
      },
      controller: function(){
        const vm = this

        vm.submit = function () {
          // this line says
          //   call the passed in function..
          //   and where it asked for `savedPerson`, pass in `vm.person`
          vm.onSave({savedPerson: vm.person})
        }
      },

      // template is totally normal
      template: `<form ng-submit="$ctrl.submit()">
        <input ng-model="$ctrl.person.firstName">
        <input type="submit">
      </form>`,
    })

}());
```

In order to pass in the function, you would write this:

```html
<person-form person="$ctrl.somePerson" on-save="$ctrl.doStuff(savedPerson)"></person-form>
```

**WARNING**: this is where it gets a little funky 😜

Here are the steps:

1. Define a binding using `&`
  - which indicates "I'm going to let other components pass a function to me"
1. Define a normal controller action
  - and bind your template's `ng-click`, `ng-submit` etc... to it as normal
1. _Call_ the passed in function, and hand it an object
  - the _keys_ of this object match the _parameter names_ of the function that is passed in

So when rendering you write `on-save="$ctrl.doStuff(savedPerson)"`, you call `vm.onSave({savedPerson: vm.person})`.

See how that works?  It might take building a few examples to see.


### !challenge
* type: multiple-choice
* id: wdi-angular-curriculum-component-events-01
* title: Component Events #1

##### !question
If you pass in a function like this:

```html
<my-form on-update="$ctrl.update(sku, quantity, discount)"></my-form>
```

To a component like this:

```js
(function() {
  'use strict'

  angular.module('app')
    .component('myForm', {
      bindings: {
        onUpdate: '&',
      },
      controller: function(){
        const vm = this
        vm.sku = "abc"
        vm.quantity = 2
        vm.discount = 0.1

        vm.submit = function () {
          // ??? how should this be called?
        }
      },
    })

}());
```

What is the appropriate way to _invoke_ the bound function, from within the `myForm` component?
##### !end-question

##### !options
- `vm.onUpdate(vm.sku, vm.quantity, vm.discount)`
- `vm.onUpdate({sku: vm.sku, quantity: vm.quantity, discount: vm.discount})`
- `vm.update({sku: vm.sku, quantity: vm.quantity, discount: vm.discount})`
##### !end-options

##### !answer
`vm.onUpdate({sku: vm.sku, quantity: vm.quantity, discount: vm.discount})`
##### !end-answer

##### !explanation
When you call a function that was passed in with the `&` binding, you need to pass it an object.  The properties of the object should correspond with the argument names of the passed in function.
##### !end-explanation
### !end-challenge


### !challenge
* type: multiple-choice
* id: wdi-angular-curriculum-component-events-02
* title: Component Events #2

##### !question
Which is the most appropriate binding to use when you want to pass in an event handler?
##### !end-question

##### !options
- `bindings: {product: '<'}`
- `bindings: {product: '='}`
- `bindings: {product: '@'}`
- `bindings: {product: '&'}`
##### !end-options

##### !answer
`bindings: {product: '&'}`
##### !end-answer

##### !explanation
The `&` indicates that you will pass in a function, which is the most appropriate choice for an event handler.

See [the docs](https://docs.angularjs.org/api/ng/service/$compile#-scope-)
##### !end-explanation
### !end-challenge


## Resources

- https://toddmotto.com/angular-1-6-is-here
