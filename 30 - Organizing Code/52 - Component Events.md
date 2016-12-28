# Component Bindings

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
        this.submit = function () { /* do fancy stuff*/ }
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

## Resources

- https://toddmotto.com/angular-1-6-is-here
