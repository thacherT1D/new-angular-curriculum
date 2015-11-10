# Introduction and Setup

### How This Curriculum Works

Unit 1:

 * [Intro and Setup](/Unit-1/01-intro-and-setup.md)
 * [Data Binding](/Unit-1/02-data-binding.md)
 * [Angular MVC](/Unit-1/03-angular-mvc.md)
 * [Expressions and Filters](/Unit-1/04-expressions-and-filters.md)
 * [Built-In Directives](/Unit-1/05-built-in-directives.md)
 * [Intro to Controllers](/Unit-1/06-intro-to-controllers.md)
 * [Scope](/Unit-1/07-intro-to-scope.md)
 * [Angular Events](/Unit-1/08-intro-to-events.md) 
 * [Form Validation](/Unit-1/09-form-validation.md) 
 * [Unit 1 Assessment Reddit Clone](/Unit-1/10-reddit-clone.md)

Unit 2:

 * [A New Structure](/Unit-2/01-a-new-structure.md)
 * [Digest Cycle](/Unit-2/02-digest-cycle.md)
 * [Routing](/Unit-2/03-routing.md)
 * [Custom Filters](/Unit-2/04-custom-filters.md)
 * [HTTP Service](/Unit-2/05-http-service.md)
 * [Movie Search App](/Unit-2/06-movie-search.app.md)
 * [Dependency Injection](/Unit-2/07-dependency-injection.md)
 * [Services and Promises](/Unit-2/08-services-and-promises.md)
 * [Custom Directives Part 1](/Unit-2/09-custom-directives-part1.md)
 * [Custom Directives Part 2](/Unit-2/10-custom-directives-part2.md)
 * [Shopping Cart App](/Unit-2/11-shopping-cart-app.md)

Unit 3 - Refactoring, Angular Style, and Backend Integration

 * [Firebase Intro](/Unit-3/01-firebase-intro.md)
 * [AngularFire Intro](/Unit-3/02-angularfire-intro.md)
 * [AngularFire Arrays and CRUD](/Unit-3/03-angularfire-arrays-and-crud.md)
 * [AngularFire Project](/Unit-3/04-angularfire-project.md)
 * [AngularFire Auth](/Unit-3/05-angularfire-auth.md)
 * [Angular Structure and Style](/Unit-3/06-structuring-angular-apps.md)
 * [Angular + Express Setup](/Unit-3/07-angular-with-express-setup.md)
 * [Angular + Express Project](/Unit-3/08-angular-with-express-project.md)
 * [Angular + Rails Setup](/Unit-3/09-angular-with-rails-setup.md)


Before you move on to the next lesson, you should:

* Complete all exercises and SAVE EVERY EXERCISE FOR FUTURE USE
* Answer all questions in ONE MARKDOWN FILE

Be prepared to review your exercises with instructors and peers as well as engage in discussions about the questions.

Let's get started!

### What is Angular?

According to the official Angular introduction, Angular is a-

> client-side technology, written entirely in JavaScript. It works with the long-established technologies of the web (HTML, CSS, and JavaScript) to make the development of web apps easier and faster than ever before.

It boils down to this: **Angular helps us build complex, single-page applications very quickly.**

### Hello, Angular!

We're going to start by setting up a very simple Angular app to say Hello World - Angular-style!

Staying true to an iterative approach to coding, we'll start slow, defining everything (markup and Angular syntax) within a single `index.html` file - a true single page app! - and scale from there, learning about patterns for structuring complicated Angular apps.

1. Create an `index.html` file.
1. Add the Angular dependency. For now, we're going to utilize a CDN - `https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular.min.js`.
1. Add the `ng-app` attribute to the `<html>` element in your document. This indicates that *everything* inside of the `<html>` element - from the opening to closing tag - is part of an Angular app. In other words, all Angular code/tags that fall inside the `<html>` element will be rendered by the Angular interpreter. *Get used to that `ng` prefix as you will be seeing it A LOT!*
1. Test it out! Add the following Angular tag anywhere inside of the `<body>` tag - `<p>{{1 + 6}}<p>`. Open the page in your browser. If all is well then you should see `7`.
1. Finally, update the title element - `<title>{{ greeting }} World</title>` - and add the following two paragraphs:
  ```html
  <p>Say something to the world <input type="text" ng-model="greeting" ng-init="greeting='Hello, '"></p>
  <p>{{ greeting }} world!</p>
  ```

1. Test this out. Enter something in the input box and watch the DOM update! Note the new `ng-`attributes - you will learn more about them soon.

#### Final Code

```html
<!DOCTYPE html>
<html ng-app>
  <head>
    <meta charset="utf-8">
    <title>{{ greeting }} World</title>
  </head>
  <body>
    <p>{{1 + 6}}<p>
    <br>
    <p>Say something to the world <input type="text" ng-model="greeting" ng-init="greeting='Hello, '"></p>
    <p>{{ greeting }} world!</p>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular.min.js"></script>
  </body>
</html>
```

## Questions

* Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
* People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
* Is Angular an MVC framework?
* Turn to the Angular docs. Find `ng-app`. What is it and what does it do? What does `ng` stand for?

## Resources

* [Angular Docs](https://docs.angularjs.org/api)
* [Thinking in Angular](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background/15012542#15012542)
* [AngularJS by Example - Building a Bitcoin Investment Calculator](https://github.com/mjhea0/thinkful-angular)
