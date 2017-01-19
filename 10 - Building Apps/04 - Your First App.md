# Introduction and Setup

Standard: **Build an Angular application (<a href="#">W0044</a>)**

## What is Angular?

According to the official Angular introduction, Angular is

> a client-side technology, written entirely in JavaScript. It works with the long-established technologies of the web (HTML, CSS, and JavaScript) to make the development of web apps easier and faster than ever before.

Angular, along with other client-side libraries (Backbone, Ember, React), help us deal with larger, more complex code bases on the client-side. They also redefined the roles of the client and server, resulting in a new application structure called a Single-Page Application (or SPA). In this new structure, the client interacts with the server by making RESTful AJAX requests that are triggered by user interactions.

It boils down to this: **Angular helps us build complex, single-page applications very quickly.**

## Hello, Angular!

We're going to start by setting up a very simple Angular app to say Hello World - Angular-style!

The simplest possible algorithm for creating an Angular app is applying the following changes to a simple `html` document:

1. Add a `script` tag to load Angular
1. Add `ng-app` to a tag (such as `<html>`)
1. Write Angular 1 code

```html
<!DOCTYPE html>
<html ng-app>
  <head>
    <meta charset="utf-8">
    <title>{{ greeting }} World</title>
  </head>
  <body>
    <p>{{1 + 6}}</p>
    <br>
    <p>Say something to the world <input type="text" ng-model="greeting" ng-init="greeting='Hello, '"></p>
    <p>{{ greeting }} world!</p>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.js"></script>
  </body>
</html>
```

Create an HTML file, copy/paste that code into it and open it in your browser.

**Script Tag**

You loaded `https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.js`, which is Angular v1.6.  Recall that 1.6 is the bridge between Angular 1 and Angular 2.  You could also load this from npm, bower etc...

**ng-app**

Notice the `ng-app` attribute to the `<html>` element in your document. This indicates that *everything* inside of the `<html>` element - from the opening to closing tag - is part of an Angular app. In other words, all Angular code/tags that fall inside the `<html>` element will be rendered by the Angular interpreter.

**Expressions**

In Angular, whenever you write double curlies (`{{`) Angular will [interpolate](https://docs.angularjs.org/guide/interpolation) the result.  The thing that goes inside the curlies is an Angular [expression](https://docs.angularjs.org/guide/expression).

Notice the following snippet:

```
<title>{{ greeting }} World</title>
```

That basically declares:

> "Whenever the variable `greeting` changes, update the `innerHTML` of the `<title>` to match"

Now notice the following snippet:

```html
<p>Say something to the world <input type="text" ng-model="greeting" ng-init="greeting='Hello, '"></p>
```

That basically declares two things:

> "When the page loads, set the `greeting` variable to `"Hello, "` (ng-init)"

> "Whenever a user changes the value of the input, set the variable `greeting` to be whatever they typed (ng-model)"

This concept is called [data-binding](https://docs.angularjs.org/guide/databinding).  Data-binding describes the concept that

- DOM (like the `<title>`) changes in response to changes to the underlying data (the `greeting` variable)
- Certain actions (like a user typing into the `<input>`) can change the underlying data

## Resources

- [Angular Docs](https://docs.angularjs.org/api)
- [Thinking in Angular](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background/15012542#15012542)
- [AngularJS by Example - Building a Bitcoin Investment Calculator](https://github.com/mjhea0/thinkful-angular)
- [Angular vs Ember vs Backbone] (https://www.airpair.com/js/javascript-framework-comparison)
