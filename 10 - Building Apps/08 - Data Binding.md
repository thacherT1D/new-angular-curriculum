# Data Binding

Standard: **Build an Angular application (<a href="#">W0044</a>)**

## Objectives

By the end of this lesson you will be able to:

- _Set_ state on a controller via form fields
- _Access_ state on a controller via expressions

## Data Binding

JavaScript frameworks like Angular, React and Ember allow you to write dynamic, live templates. This means that you can write Angular templates that will **automatically update when your data changes.**

This is called two-way or bi-directional binding.

* When a model changes, the view knows about it
* When a view changes, the model also knows about it

Put another way, if the data changes in the controller, that change is _immediately_ updated in the DOM.  If a user initiates an action (say by filling in a field or selecting from a dropdown), then the data is _immediately_ updated in the controller.

### Setting State

The first way you'll learn to set state is via the `ng-model` attribute.

A normal field looks like this:

```html
<input type="text">
```

When you type into a field like that, nothing happens.  Angular doesn't care.  But once you add the `ng-model` attribute, Angular binds that value of that input to the corresponding property.

```html
<input type="text" ng-model="$ctrl.firstName">
```

By adding `ng-model` you are declaring that:

- When a user changes the value of the input, Angular will set the controller's `firstName` property
- When something changes the controller's `firstName` property, Angular will auto-update the value of the input

### Displaying / Retrieving State

Now that you've bound the input to the controller's `firstName` property, you can display the value of `firstName` on the page.  You can write expressions in HTML using interpolation.  Interpolation is a fancy way of saying `{{ }}`.

```html
<input type="text" ng-model="$ctrl.firstName">

<h1>My first name is: {{$ctrl.firstName}}</h1>
```

Open up `index.html` in your browser. What does the `h1` display when the page loads? Try typing something into the input and notice that the `h1` reflects the value you typed into the input.

> REMEMBER: Use `$ctrl` when binding properties.  There are valid reasons to omit it, but until you know them, just follow the guideline of always writing `$ctrl.propertyName` when using `ng-model`.

## Sequence Of Events

Take the following Angular 1 application:

```js
<!DOCTYPE html>
<html ng-app="app">
  <head>
    <meta charset="utf-8">
    <title>Data Binding</title>
  </head>
  <body>
    <app></app>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.js"></script>
    <script>
      angular.module('app', [])
        .component('app', {
          template: `
            <h1>My first name is: {{$ctrl.firstName}}</h1>
            <input type="text" ng-model="$ctrl.firstName">
          `
        })
    </script>
  </body>
</html>
```

Here's what happens:

1. The browser loads the page, then downloads `angular.js` and runs it
1. The browser runs your `script` tag, which declares an Angular 1 module (`angular.module('app', [])`)
1. Angular scans the DOM for an element with the attribute `ng-app`, and checks to see if the names match
1. Next the browser runs your component definition `.component('app')`, looks for a matching `<app></app>` element and renders your template to the DOM
1. When a user types into the input, Angular detects that the user changed the value, and Angular updates the controller's `firstName` property

### !challenge
* type: project
* id: angular-curriculum-drills-simple-interaction
* title: Simple Interaction

##### !question
## Build a Simple Interactive App

- Follow [the instructions](./02 - Unit Overview.md) to update angular-drills, for example:

  ```
  git checkout master
  git fetch upstream
  git rebase upstream/master
  git checkout -b simple-interaction
  git push -u origin simple-interaction
  ```
- Complete the [simple-interaction](https://github.com/gSchool/angular-drills/tree/master/simple-interaction) challenge

It comes with tests so you can see if you finished it correctly.  Make sure tests pass before submitting!

Submit the URL to your solution below.
##### !end-question

##### !placeholder
https://github.com/<your name>/angular-drills/tree/simple-interaction/simple-interaction
##### !end-placeholder

##### !explanation
See the solutions folder (if you haven't already)
##### !end-explanation
### !end-challenge


## Resources

* [Data Binding Reference](https://docs.angularjs.org/guide/databinding)
* [ng-model Docs](https://docs.angularjs.org/api/ng/directive/ngModel)
* [`$watch`](https://www.ng-book.com/p/The-Digest-Loop-and-apply/)
* [ng-cloak StackOverflow discussion](http://stackoverflow.com/questions/12866447/prevent-double-curly-brace-notation-from-displaying-momentarily-before-angular-j)
