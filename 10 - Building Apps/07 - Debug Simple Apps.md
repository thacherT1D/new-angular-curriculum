# Debug Simple Apps

Recall the 4-step process for setting up a simple app:

1. Module
1. Component
1. Controller
1. Template

Now take a look at the code snippets below and use what you know about these 4 steps to identify the bugs.  See if you can find them without actually running the code, but if it's not obvious, go ahead and run the code to see the error messages and start developing your error pattern recognition in Angular 1.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple Interactive App</title>
  </head>
  <body>
    <h1>Amazing Time Machine</h1>
    <greeting></greeting>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.js"></script>
    <script type="text/javascript">
      angular.module("app", [])
        .component('greeting', {
          controller: function () {
            const vm = this
            vm.$onInit = function () {
              vm.time = new Date()
            }
            vm.updateTime = function () {
              vm.time = new Date()
            }
          },
          template: `
            <p>What time is it?</p>
            <p>{{$ctrl.time}}</p>
            <input type="submit" value="Update Time" ng-click="$ctrl.updateTime()" />
          `
        })
    </script>
  </body>
</html>
```

### !challenge

* type: multiple-choice
* id: wdi-angular-find-the-bug-01
* title: Find the Bug #1

##### !question
In the code snippet above, where is the bug?
##### !end-question

##### !options
- There's no bug
- Module definition
- Component definition / insertion
- Controller / Event handlers
- Template
##### !end-options

##### !answer
Module definition
##### !end-answer

##### !explanation
The document is missing the `ng-app` declaration
##### !end-explanation

### !end-challenge

---

```html
<!DOCTYPE html>
<html ng-app="app">
  <head>
    <meta charset="utf-8">
    <title>Simple Interactive App</title>
  </head>
  <body>
    <h1>Amazing Time Machine</h1>
    <greeting></greeting>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.js"></script>
    <script type="text/javascript">
      angular.module("app")
        .component('greeting', {
          controller: function () {
            const vm = this
            vm.$onInit = function () {
              vm.time = new Date()
            }
            vm.updateTime = function () {
              vm.time = new Date()
            }
          },
          template: `
            <p>What time is it?</p>
            <p>{{$ctrl.time}}</p>
            <input type="submit" value="Update Time" ng-click="$ctrl.updateTime()" />
          `
        })
    </script>
  </body>
</html>
```

### !challenge

* type: multiple-choice
* id: wdi-angular-find-the-bug-03
* title: Find the Bug #3

##### !question
In the code snippet above, where is the bug?
##### !end-question

##### !options
- There's no bug
- Module definition
- Component definition / insertion
- Controller / Event handlers
- Template
##### !end-options

##### !answer
Module definition
##### !end-answer

##### !explanation
`angular.module("app")` is missing the second argument: It should be `angular.module("app", [])`
##### !end-explanation

### !end-challenge

---

```html
<!DOCTYPE html>
<html ng-app="app">
  <head>
    <meta charset="utf-8">
    <title>Simple Interactive App</title>
  </head>
  <body>
    <h1>Amazing Time Machine</h1>
    <greeting></greeting>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.js"></script>
    <script type="text/javascript">
      angular.module("app", [])
        .component('greeting', {
          controller: function () {
            const vm = this
            vm.$onInit = function () {
              vm.time = new Date()
            }
            vm.updateTime = function () {
              vm.time = new Date()
            }
          },
          template: `
            <p>What time is it?</p>
            <p>{{time}}</p>
            <input type="submit" value="Update Time" ng-click="updateTime()" />
          `
        })
    </script>
  </body>
</html>
```

### !challenge

* type: multiple-choice
* id: wdi-angular-find-the-bug-04
* title: Find the Bug #4

##### !question
In the code snippet above, where is the bug?
##### !end-question

##### !options
- There's no bug
- Module definition
- Component definition / insertion
- Controller / Event handlers
- Template
##### !end-options

##### !answer
Template
##### !end-answer

##### !explanation
The template doesn't reference `$ctrl` - it attempts to call `{{time}}` and `{{updateTime}}` instead of `{{$ctrl.time}}`
##### !end-explanation

### !end-challenge

---

```html
<!DOCTYPE html>
<html ng-app="app">
  <head>
    <meta charset="utf-8">
    <title>Simple Interactive App</title>
  </head>
  <body>
    <h1>Amazing Time Machine</h1>
    <greeting></greeting>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.js"></script>
    <script type="text/javascript">
      angular.module("app", [])
        .component('greeting', {
          controller: function () {
            this.$onInit = function () {
              this.time = new Date()
            }
            this.updateTime = function () {
              this.time = new Date()
            }
          },
          template: `
            <p>What time is it?</p>
            <p>{{$ctrl.time}}</p>
            <input type="submit" value="Update Time" ng-click="$ctrl.updateTime()" />
          `
        })
    </script>
  </body>
</html>
```

### !challenge

* type: multiple-choice
* id: wdi-angular-find-the-bug-05
* title: Find the Bug #4

##### !question
In the code snippet above, where is the bug?
##### !end-question

##### !options
- There's no bug
- Module definition
- Component definition / insertion
- Controller / Event handlers
- Template
##### !end-options

##### !answer
Controller / Event handlers
##### !end-answer

##### !explanation
Controller is missing `const vm = this`, and instead tries to access `this` inside the functions.

NOTE: it _would_ be OK to have `this.updateTime = () => {this.time = new Date()}` 😀
##### !end-explanation

### !end-challenge

---

```html
<!DOCTYPE html>
<html ng-app="app">
  <head>
    <meta charset="utf-8">
    <title>Simple Interactive App</title>
  </head>
  <body>
    <h1>Amazing Time Machine</h1>
    <personDetail></personDetail>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.js"></script>
    <script type="text/javascript">
      angular.module("app", [])
        .component('personDetail', {
          controller: function () {
            this.$onInit = function () {
              this.time = new Date()
            }
            this.updateTime = function () {
              this.time = new Date()
            }
          },
          template: `
            <p>What time is it?</p>
            <p>{{$ctrl.time}}</p>
            <input type="submit" value="Update Time" ng-click="$ctrl.updateTime()" />
          `
        })
    </script>
  </body>
</html>
```

### !challenge

* type: multiple-choice
* id: wdi-angular-find-the-bug-06
* title: Find the Bug #4

##### !question
In the code snippet above, where is the bug?
##### !end-question

##### !options
- There's no bug
- Module definition
- Component definition / insertion
- Controller / Event handlers
- Template
##### !end-options

##### !answer
Component definition / insertion
##### !end-answer

##### !explanation
`<personDetail></personDetail>` should be `<person-detail></person-detail>`
##### !end-explanation

### !end-challenge

---

```html
<!DOCTYPE html>
<html ng-app="apples">
  <head>
    <meta charset="utf-8">
    <title>Simple Interactive App</title>
  </head>
  <body>
    <h1>Amazing Time Machine</h1>
    <greeting></greeting>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.js"></script>
    <script type="text/javascript">
      angular.module("appleTV", [])
        .component('greeting', {
          controller: function () {
            const vm = this
            vm.$onInit = function () {
              vm.time = new Date()
            }
            vm.updateTime = function () {
              vm.time = new Date()
            }
          },
          template: `
            <p>What time is it?</p>
            <p>{{$ctrl.time}}</p>
            <input type="submit" value="Update Time" ng-click="$ctrl.updateTime()" />
          `
        })
    </script>
  </body>
</html>
```

### !challenge

* type: multiple-choice
* id: wdi-angular-find-the-bug-02
* title: Find the Bug #2

##### !question
In the code snippet above, where is the bug?
##### !end-question

##### !options
- There's no bug
- Module definition
- Component definition / insertion
- Controller / Event handlers
- Template
##### !end-options

##### !answer
Module definition
##### !end-answer

##### !explanation
The module name in `ng-app` does not match the module name defined with `angular.module`
##### !end-explanation

### !end-challenge
