# Bind Lists to Arrays

## Objectives

By the end of this lesson you will:

- Populate lists when the component loads
- Insert items into lists
- Remove items from lists

## Rationale

Lists form a huge part of most web-based applications.  In future lessons you will learn how to turn each list item into its own component, but in order to get up and running quickly you'll learn the basics of working with lists.

## ng-repeat

To make lists you use `ng-repeat`, with the syntax `for object in $ctrl.list`, like so:

```js
angular.module('app', [])
  .component('repeaters', {
    controller: controller,
    template: `
      <div ng-repeat="user in $ctrl.users">
        <strong>{{ user.name }}</strong>: {{ user.age }}
      </div>
    `
  })

function controller() {
  const vm = this

  vm.$onInit = function () {
    vm.users = [
      {name:"mike", age:23},
      {name:"andy", age:34},
      {name:"reid", age:45},
      {name:"reid", age:45},
    ]
  }
}
```

Two things need to happen in order to display a list of data:

- If necessary, initialize the list in `$onInit` (often in response to fetching data from a server)
- Use `ng-repeat` and reference the array you created

## Inserting items into a list

Imagine you have a template like so:

```html
<form ng-submit="$ctrl.addUser()">
  <input ng-model="$ctrl.user.name" placeholder="Enter a name" />
  <input ng-model="$ctrl.user.age" placeholder="Enter an age" />
  <input type="submit">
</form>
```

Note that the form above:

- Binds the two text fields to the controller's `user` object
- Declares that when it's submitted, it should call the `addUser` method on the controller

So far that's just review 😉.  So what should the controller do to add it to the list?

Well, simply push that object into the array!  You also probably want to reset the form as well:

```js
function controller() {
  const vm = this

  vm.$onInit = function () {
    vm.users = []
  }

  vm.addUser = function () {
    vm.users.push(vm.user)
    delete vm.user
  }
}
```

## Removing items from a list

**The Template**

```html
<div ng-repeat="user in $ctrl.users">
  <strong>{{ user.name }}</strong>: {{ user.age }}

  <a href="#" ng-click="$ctrl.deleteUser($event, user)">❌</a>
</div>
```

Note how in the template the `deleteUser` calls gets passed two things:

- `$event` - this is so you can call `preventDefault`
- `user` - this is the actual user object

**The Controller**

Recall from basic JavaScript that in order to remove an item from an array, you need to:

- Find the index of the object
- Splice it out

```js
function controller() {
  const vm = this

  vm.$onInit = function () {
    vm.users = []
  }

  vm.deleteUser = function (e, user) {
    e.preventDefault()
    vm.users.splice(vm.users.indexOf(user), 1)
  }
}
```

## Stop and smell the pattern 🌹🌹

Take a moment to reflect on the pattern that's emerging here:

- You initialize data in `$onInit`
- You bind to that data with things like `ng-model`
- You alter that data in event handlers, triggered by `ng-click`, `ng-submit` etc...
- The DOM auto-updates when you make changes

This will be a key concept in the the next lesson on toggling DOM elements.

### !challenge
* type: project
* id: angular-curriculum-drill-list-management
* title: List Management

##### !question
## Try it out yourself!

- Follow [the instructions](./02 - Unit Overview.md) to update angular-drills, for example:

  ```
  git checkout master
  git fetch upstream
  git rebase upstream/master
  git checkout -b list-management
  git push -u origin list-management
  ```
- Complete the [list-management](https://github.com/gSchool/angular-drills/tree/master/list-management) challenge

It comes with tests so you can see if you finished it correctly.  Make sure tests pass before submitting!

Submit the URL to your solution below.
##### !end-question

##### !placeholder
https://github.com/<your name>/angular-drills/tree/list-management/list-management
##### !end-placeholder

##### !explanation
See the solutions folder (if you haven't already)
##### !end-explanation
### !end-challenge
