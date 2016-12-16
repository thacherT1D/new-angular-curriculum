# Toggling DOM Elements

## Objectives

By the end of this lesson you will:

- Show and hide elements with `ng-if`
- Show and hide elements with `ng-show` and `ng-hide`
- Compare and contrast `ng-if` with `ng-show`
- Store the state of the UI in properties on the controller

## Rationale

Dynamic applications often have complicated UIs, and allow users to toggle what they can see or not.  Angular ships with a few convenient ways to do that.

## The Angular Way

Recall the pattern from the previous lessons on forms and lists:

- The controller stores state
- Events cause controller state to change
- UI elements are _bound_ to the state of the controller

Showing and hiding data is no different.  It's a slightly different approach than you might expect, if you came from doing direct DOM manipulation yourself.  Here's a quick example:

```js
angular.module('app', [])
  .component('myComponent', {
    template: `
      <button ng-click="$ctrl.tab=1">Tab 1</button>
      <button ng-click="$ctrl.tab=2">Tab 2</button>

      <div ng-if="$ctrl.tab == 1">
        Tab 1
      </div>

      <div ng-if="$ctrl.tab == 2">
        Tab 2
      </div>
    `,
    controller: function () {
      const vm = this
      vm.$onInit = function () {
        vm.tab = 1
      }
    }
  })
```

**Sequence of events**

- When the page loads, and Angular loads the `<my-component>` component
  - Angular sees `$onInit` and runs it
  - `$onInit` sets the controller's `tab` property to 1
  - Angular sees that Tab 1 should be shown only if `tab == 1`, so it inserts Tab 1 into the DOM
  - Angular sees that Tab 2 should be shown only if `tab == 2`, so it removes Tab 2 from the DOM
- When a user clicks on the "Tab 2" button
  - Angular runs the `ng-click` expression, which sets `$ctrl.tab` to 2
  - Angular sees that Tab 1 should be shown only if `tab == 1`, so it removes Tab 1 from the DOM
  - Angular sees that Tab 2 should be shown only if `tab == 2`, so it inserts Tab 2 into the DOM

### A slippery slope

Notice in the example above that the `ng-click` directive manipulated the `tab` property directly.  This example exists so you can see that it's possible, but in general you want to keep your template code as simple as possible.

An alternative would be to have something like this:

```js
angular.module('app', [])
  .component('myComponent', {
    template: `
      <button ng-click="$ctrl.setTab(1)">Tab 1</button>
      <button ng-click="$ctrl.setTab(2)">Tab 2</button>

      <div ng-if="$ctrl.tab == 1">
        Tab 1
      </div>

      <div ng-if="$ctrl.tab == 2">
        Tab 2
      </div>
    `,
    controller: function () {
      const vm = this
      vm.$onInit = function () {
        vm.tab = 1
      }

      vm.setTab = function (number) {
        vm.tab = number
      }
    }
  })
```

## `ng-if` vs `ng-show`

[ng-show](https://docs.angularjs.org/api/ng/directive/ngShow) works very similarly to `ng-if`.  

Read the docs for [ng-if](https://docs.angularjs.org/api/ng/directive/ngIf) to find out what's different about `ng-show` and `ng-if`.

See also [ngSwitch](https://docs.angularjs.org/api/ng/directive/ngSwitch)
