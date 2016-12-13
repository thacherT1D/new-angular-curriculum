# Questions about basic interactive apps

What's wrong with this app?

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
Which step does the code above violate?
##### !end-question

##### !options
1. Module definition
2. Component definition / insertion
3. Controller / Event handlers
4. Template
##### !end-options

##### !answer
1
##### !end-answer

##### !explanation
The document is missing the `ng-app` declaration
##### !end-explanation

### !end-challenge


What's wrong with this app?

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
Which step does the code above violate?
##### !end-question

##### !options
1. Module definition
2. Component definition / insertion
3. Controller / Event handlers
4. Template
##### !end-options

##### !answer
1
##### !end-answer

##### !explanation
The module name in `ng-app` does not match the module name defined with `angular.module`
##### !end-explanation

### !end-challenge

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
Which step does the code above violate?
##### !end-question

##### !options
1. Module definition
2. Component definition / insertion
3. Controller / Event handlers
4. Template
##### !end-options

##### !answer
1
##### !end-answer

##### !explanation
`angular.module("app")` is missing the second argument: It should be `angular.module("app", [])`
##### !end-explanation

### !end-challenge
