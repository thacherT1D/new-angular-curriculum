# HTTP Service

Standard: **Build an Angular CRUD application against an HTTP API (<a href="#">W0045</a>)**

## Objectives

By the end of this lesson you will:

- Fetch data from an external API and load it into a controller

## Rationale

Integrating with backend services is the bedrock of most single-page applications.

## Before you begin...

Your code is about to get a little more complex, specifically the controller code.  So before getting into `$http`, you should organize your components a bit more.  Specifically, you should make the following 2 changes from now on:

- Pull the controller function out to a named function
- Put all code in `iife`s

**Before**

```js
  angular.module('app')
    .component('someComponent', {
      controller: function () {
        const vm = this
        // etc...
      }
    })
```

**After**

```js
(function() {
  'use strict';

  angular.module('app')
    .component('someComponent', {
      controller: controller
    })

  function controller() {
    const vm = this
    // etc...
  }

}());
```

**Rationale**

In a few steps you'll be injecting (passing arguments to) your controller function.  If the controller function is separate, it makes this easier.

It's nice to name your controller function something simple, like `controller`, but you can't have more than one global function with the same name.  So if you put it in an `iife`, all of your components can have an identical structure!

## The `$http` service

Your Angular 1 application will communicate with a server via the `$http` service.  Here's what a simple example looks like:

```js
(function() {
  'use strict';

  angular.module('app')
    .component('app', {
      controller: controller,
      template: `
        <div ng-repeat="thing in $ctrl.things">
          {{thing}}
        </div>
      `
    })

  controller.$inject = ['$http']
  function controller($http) {
    const vm = this

    vm.$onInit = function () {
      $http.get('/things.json').then(function (response) {
        vm.things = response.data
      })
    }
  }

}());
```

Making an AJAX call in your controller involves 4 steps:

1. Inject the `$http` service by:
  - Adding `controller.$inject = ['http']`
  - Define an `$http` parameter in the controller
1. Make the call to `$http.get`, `$http.post` etc...
1. Pass a function to `.then` which receives a response
1. Get the `response.data` and set properties on the controller `vm`

## Loading data

It's common to load data inside of `$onInit`.

## Alter data on the server

* $http.post
* $http.put
* $http.patch
* $http.delete

### !challenge
* type: project
* id: angular-curriculum-drill-http-calls
* title: HTTP Calls

##### !question
## Build a simple app with `$http`

- Follow [the instructions](../10 - Building Apps/02 - Unit Overview.md) to update angular-drills, for example:

  ```
  git checkout master
  git fetch upstream
  git rebase upstream/master
  git checkout -b http-calls
  git push -u origin http-calls
  ```
- Complete the [http-calls](https://github.com/gSchool/angular-drills/tree/master/http-calls) challenge

It comes with tests so you can see if you finished it correctly.  Make sure tests pass before submitting!

Submit the URL to your solution below.
##### !end-question

##### !placeholder
https://github.com/<your name>/angular-drills/tree/http-calls/http-calls
##### !end-placeholder

##### !explanation
See the solutions folder (if you haven't already)
##### !end-explanation
### !end-challenge
