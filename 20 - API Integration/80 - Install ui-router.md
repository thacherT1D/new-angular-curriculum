# Install ui-router

Standard: **Build an Angular CRUD application against an HTTP API (<a href="#">W0045</a>)**

## Objectives

By the end of this lesson you will:

- Follow a 6-step process to install ui-router in your app

## Rationale

Angular doesn't have routing built-in.  Angular does have a router called `ngRoute` but it's basically terrible.

ui-router has become the preferred choice for most (especially larger scale) Angular 1 applications as well as tools like [Ionic](http://ionicframework.com/). Note that everything you can do with `ngRoute` you can also do with `ui-router`.

This lesson is mostly a walk-through.  It's entirely OK to copy and paste your way to success here.  Don't memorize these steps or worry about fluently reproducing them.  This lesson is here entirely to save you some time searching through shitty and/or partial docs online.

## A note on versions

Recall that Angular 1 is being phased out, and Angular 2 is the new hotness:

![](../images/angular-versions.png)

But since there are still a lot of Angular 1 apps out there, we've chosen a middle path - teaching the concepts of component-based apps in Angular 1.  ui-router's released version doesn't support routing to components, so instead we need to use their beta version, [1.0.0 Beta.3](https://ui-router.github.io/blog/uirouter-1.0.0-beta.3/).

NOTE: if they've released 1.0 when you read this, upgrade to that 😉

## Some quick refreshers

**Routing concepts**

If you are not familiar with routes as a general concept, checkout [this article](https://github.com/gSchool/software-patterns-curriculum/blob/master/Routing.md).

**Running Angular 1 Applications**

Always run your Angular 1 applications locally with a real webserver, such as `lite-server`.

If you run your apps from `file:///` URLs, some features won't work and you'll spend hours debugging before finding the problem.

## Intro

One of Angular's most important features is its handling of routing and browser history navigation.

Most single page apps (SPAs) actually consist of multiple "pages" or "screens". For example, we might have views for a landing page, login page, and signup page. Let's take our reddit clone example.  What if we wanted to add a "show page" for an individual post?  When a user clicks on a particular post, they see a view with details about the post.

A good example of this is gmail. gmail has different views for your inbox, viewing a specific email, composing a message, viewing starred emails, viewing spam etc.  The app is still a single page app, you just don't see everything at once.

## Getting setup

To use hash-style URLs (`#!/people1`), there's a 4-step process to installing ui-router in your project:

1. Include the script tag
1. Register the module
1. Define a route
1. Add `<ui-view>` to your HTML file

To use clean URLs (`/people/1`), there's a 6-step process to installing ui-router in your project:

1. Include the script tag
1. Register the module
1. Define a route
1. Add `<ui-view>` to your HTML file
1. Add the `<base>` tag to your HTML file
1. Turn on `html5Mode`

**Step 1: Add the script**

From a CDN:

```
<script src="https://unpkg.com/angular-ui-router@1.0.0-beta.3/release/angular-ui-router.js"></script>
```

From NPM:

```
yarn add angular-ui-router@1.0.0-beta.3
```

Then:

```html
<script src="/node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>
```

**Step 2: Register the module**

Notice that every time you define a module in Angular 1 you write:

```js
angular.module('app', [])
```

Ever wonder what that empty array was for?  It's meant to be a list of _dependencies_.  That is, other modules.

So to register `ui-router`, you need to change that line to this:

```js
angular.module('app', ['ui.router'])
```

This tells Angular that you want to use features from `ui-router` in your application.

**Step 3: Define a route**

OK, this part is annoying.  It's boilerplate, and it only happens once per app.  So don't memorize it - just Google it every time you need it 😜

In a separate file, probably named `app.config.js` or `app.routes.js` or `app.states.js`, add the following:

```js
(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    // this line is optional
    // $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'app',
      })
  }

}());
```

There's a _whole bunch_ (<-- scientific amount) of stuff there to unpack, but just Trust Us™ for now.  You'll dig into all most of that later.

For now just focus on these lines:

```js
    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'app',
      })
      .state({
        name: 'about',
        url: '/about-us',
        component: 'about',
      })
```

This tells ui-router:

> "When the user is on a page whose path is `/`, then render the `app` component"

> "When the user is on a page whose path is `/about-us`, then render the `about` component"

**Step 4: Add ui-view**

In your index.html file, place the following tag somewhere in the body:

```html
<ui-view></ui-view>
```

---

## Configuring clean URLs

**Step 5: Turning on html5Mode**

By default ui-router uses URL paths that look like `#!/people1` (they start with a `#`).

You probably want `ui-router` to use cleaner urls like `/people/1`, as that's the emerging standard for building client-side applications these days.  In order to do so, you'll need the following line:

```js
$locationProvider.html5Mode(true)
```

So altogether it looks like this:

```js
(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'app',
      })
      // etc...
  }
}());
```

**Step 6: Configuring the Base URL**

Once you turn on `html5Mode`, you need to tell Angular where the ui-router routes should begin.  You do this by adding a `<base>` tag to the `<head>` of your index.html file:

```html
<base href="/">
```

# PHEW! 😵

OK - that was a lot, but again, you only have to feel that pain once per app.  The rest is easy.
