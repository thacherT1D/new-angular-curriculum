# Routing with ui-router

Standard: **Build an Angular application with routes (<a href="#">W0044</a>)**

#### What is it?

It's an alternative to `ngRoute`. It provides far more functionality for us in terms of our routing and is used quite frequently in production apps. You will see many examples with UI router as it has become the preferred choice for most (especially larger scale) angular applications as well as tools like [Ionic](http://ionicframework.com/). Note that everything you can do with `ngRoute` you can also do with `ui-router` - so all we are doing here is expanding our knowledge of routing in angular.

#### ui-router vs ngRoute

The biggest difference when you start working with `ui-router` is the concept of `state`. The key tenant of `ui-router` is that state is a place in your application and that is how parts of your application should be defined, not by a URL (like `ngRoute`), but by a state.

### States vs Routes

From a Tim Kindberg (co-creator of ui-router) [presentation](https://www.youtube.com/watch?v=dqJRoh8MnBo):

| State  | Route  |
|---|---|
| A **place** in your app  | A **url** within your app  |
| **Nested** hierarchy  | **Flat** hierarchy  |
| Names are **names**  | Names are **urls**  |
| Navigate **name or url**  | Navigate **url only**  |
| **Multiple** views (ui-view)  | **Single** view (ng-view)  |
| Populate **any** view  | Populate **one** view |
| **State** populates parts of your app  | Directives (ng-include / ng-show/hide) populate parts of your app  |

These advantages include the ability for a nested routing structure (which tremendously cleans up an application) as well as navigation through state instead of URLs. We can also use state and ui-view to populate parts of our application instead of things like ng-include or ng-show/hide/if which will make our application easier to debug and work with. As you can see from this example, to get started with `ui-router`, one of the big differences is the use of `ui-view` instead of `ng-view`

### Getting started with ui-router

First we need to include a script to the `ui-router` and add it as a dependency to our application

In our index.html:
`<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>`

In our app.js:
`var app = angular.module("todoApp", ['ui.router']);`

To get started with `ui-router`, we use a similar function that we did with `ngRoute`.

Take a look at this example:

```js
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      controller: "HomeController",
      templateUrl: "templates/home.html"
    })
  $locationProvider.html5Mode(true);
});
```

Notice that we are not using `$routeProvider`, we use `$stateProvider` instead. We also do not use `when()` and have an `otherwise` attached to `$stateProvider` - our `otherwise` is attached to another service called `$urlRouterProvider`. Finally, just like in `ngRoute` we have `$locationProvider` for cleaner URLs. Also note that in our controllers we do not use `$routeParams` we will be using $stateParams instead.

### Changing State

In ui-router there are three ways to change state in your application

1. Use the $state.go() method - read more about it [here](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#stategoto--toparams--options)
2. Use a `ui-sref` directive - read more about it [here](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#ui-sref)
3. URL routing - read more about it [here](https://github.com/angular-ui/ui-router/wiki/URL-Routing)).

### Exercise

Read through [this](http://www.funnyant.com/angularjs-ui-router/) tutorial for a better understanding of `ui-router` and build the app in the tutorial.

### Using resolve

Another fantastic part of ui-router (this also exists in `ngRoute`) is the ability to resolve promises before we render a view. This ensures that all data necessary is loaded before the view renders and it also allows us to change the state if a certain condition is not met (some kind of authentication or authorization!). This is very commonly done with `$http` or `$resource`.

### Exercise

Answer the following questions

- What is `ui-router`?
- What are some differences between `ui-router` and `ngRoute`?
- What is state?
- What does the `resolve` property let us do?
- What is a nested view? Give an example of when you would use one
- What Do Child States Inherit From Parent States?
- What does the "@" symbol do in regards to multiple named views - read [this](https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views) for the answer

### Assignment

- Refactor your todo app from the previous unit to use `ui-router`. Use resolve for loading all of your todos as well.

- Read through some of the additional resources below and watch the videos - they are incredibly valuable resources for your understanding of `ui-router`!

### Additional Resources

[Why ui-router from co-creator Nate Abele](https://www.youtube.com/watch?v=ZmrsDqMrAVo)

[More on ui-router from co-creator Tim Kindberg](https://www.youtube.com/watch?v=dqJRoh8MnBo)

[Another ui-router tutorial from scotch.io](https://scotch.io/tutorials/angular-routing-using-ui-router)

[Some useful tips for ui-router from scotch.io](https://scotch.io/tutorials/3-simple-tips-for-using-ui-router)

[Adding animations with ui-router](https://www.youtube.com/watch?v=W89DYSthCTQ)

[https://github.com/angular-ui/ui-router](https://github.com/angular-ui/ui-router)

[https://github.com/angular-ui/ui-router/wiki](https://github.com/angular-ui/ui-router/wiki)

---

# Routing

One of Angular's most important features is its handling of routing and browser history navigation.

Most single page apps (SPAs) actually consist of multiple "pages" or "screens". For example, we might have views for a landing page, login page, and signup page. Let's take our reddit clone example.  What if we wanted to add a "show page" for an individual post?  When a user clicks on a particular post, they see a view with details about the post.

A good example of this is gmail. gmail has different views for your inbox, viewing a specific email, composing a message, viewing starred emails, viewing spam etc.  The app is still a single page app, you just don't see everything at once.

**EXERCISE**  Open up your gmail (or similar email provider) account. Try clicking around and accessing the different features.  Pay special attention to the url bar.  What do you notice?

Typical issues with complex single page apps are:

* SPAs don't support browser history navigation.  The back and forwards buttons don't work.
* You can't bookmark parts of a SPA
* If all of our code is in a single template, things can get incredibly messy

Angular provides solutions for all of the above issues through its router.  We can break down a view into multiple smaller views that are rendered inside of a layout depending on the URL the user is currently accessing.

We'll see how to use the `$routeProvider` to make use of the browser’s history navigation and allow users to bookmark and share specific pages based off of the current URL.  Let's get started.

**First we need to include the `ngRoute` module.** It's a separate module that we need to include on our own. You can download the module or link to this CDN: "http://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular-route.js"

Next, we need to load the `ngRoute` module by adding it as a dependent module.

```js
var app = angular.module("yourAppName", ['ngRoute']);
```

Our `index.html` will act as our layout file.  Just like in Express, we'll add all the common markup (navbar, footer, etc.) to our layout file, and then we'll render specific views in a particular place in our layout.  To tell Angular where it should render those views, we'll use the `ng-view` directive.  Add the following to `index.html`:


```html
<h1>NAVBAR</h1>

<div ng-view></div>

<h1>FOOTER</h1>
 ```

 According to the docs:

 > The ng-view directive is a special directive that’s included with the ngRoute module. Its specific responsibility is to stand as a placeholder for $route view content. It creates its own scope and nests the template inside of it.

Next, let's declare some routes. To add a route to a module, we use the `config` function.  In our `app.js` file, add:

```js
app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
      	templateUrl: 'partials/dogs.html',
      	controller: 'DogsController'
      })
});
```

**EXERCISE:** Before reading on, take time to understand the above code on your own, and make it work. The end goal is to have 2 routes that display 2 different templates.  It's up to you to decide what to put in the templates. The above route declarations tell you exactly what files you need to create. Go write them!

**EXERCISE: Seriously, do the above exercise!**  Don't just move on to see the answer.  Process over product :)

The above route declarations define two routes: '/' and '/dogs'.  When a user visits '/', Angular will render the `partials/home.html` file inside of our layout file and set the `HomeController` as the controller on the `ng-view`. When a user visits '/dogs', Angular will render the `partials/dogs.html` file inside of our layout file and set the `DogsController` as the controller on the `ng-view`.

To make this work, we need to create 2 templates and 2 controllers.  Let's start with the `/` route.  Create a controller in `controllers.js` named `HomeController`:

```js
app.controller('HomeController', function($scope){
});
```

Let's add a property to the scope called `view.message`.  Set it to whatever you want:

```js
$scope.view = {};
$scope.view.message = "Welcome!"
```

Now let's create the template.  Inside of `app/partials` create a `home.html` file.

```html
<p>This is the home template</p>

<p>Message: {{view.message}}</p>
```

Make sure when you visit `localhost:8080`, you see the above template rendered between the header and footer we created earlier.  Let's repeat the same process for the '/dogs' route.  

Controller:

```js
app.controller('DogsController', function($scope){
  $scope.view = {};
  $scope.view.message = "Woof Woof!"
});
```

Template:

```html
<p>This is the dogs template</p>

<p>Message: {{view.message}}</p>
```

Make sure the second route works correctly by visiting `http://localhost:8080/#/dogs`. Play around with the browser navigation buttons.  Try bookmarking a page.  It should all work!

**QUESTION:** Why does Angular put a `#` in the route path?

**EXERCISE:** Figure out how to set a "catchall" route that will render the `home.html` template if the user visits any other route

**EXERCISE:** Make a simple portfolio site using Angular.  It should have 3 routes: "projects", "bio", and "resume".  Add a Bootstrap navbar to the layout file with links to all 3 routes. Figure out how to have the navbar reflect the current route that a user is on.

**EXERCISE:** Make a simple route-based calculator.  When a user visits "/add/4/10", display "14".  Do the same thing for division.  To accomplish this, your routes will need to have path variables.  Research how to define variable segments in your route.  Next, you'll need to research how you access the value of path variables inside of a controller.  You'll need to find the angular equivalent of the `params` hash in rails or the `req.params` object in Express.

**EXERCISE:** Refactor the above exercise so that your calculator works using the query string.  When a user visits "/add/?x=4&y=10", display "14".  You will need to research how to access query string data inside of a controller.

**EXERCISE:** Configure Angular so that routes do not contain `#`'s. Research!  You may want to start using https://www.npmjs.com/package/superstatic instead of `http-server`

## Questions:

* Why isn't `ngRoute` part of Angular core?  Name at least 2 other Angular modules we could use
* Compare and contrast client-side routing with server-side routing
* Aside from route definitions, what else can go in a `.config()`?
* What is the `$routeChangeSuccess` event?





##Cheat Sheet:

 Download superstatic from npm : https://www.npmjs.com/package/superstatic

Create an html file and use Bower or CDNs to link to angular and another for angular routes
```html
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular-route.js"></script>
```
Add ng-app="myApp" to the html tag of your file
```
<html ng-app="myApp">
```
Add ng-view to your HTML page that will be used later to inject your partials into.
EX:
```html
<body>
  <div ng-view></div>
</body>
```
Create an angular module and inject the 'ngRoute' dependency
EX:
```
angular.module('myApp', ['ngRoute'])
```
Create .config section under your module to set up your routes
EX:
```js
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
})
```

Remove Hashtags from urls :

Add $locationProvider.html5Mode(true) to your .config
EX:
```js
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
  $locationProvider.html5Mode(true);
})
```

Then add a base tag to the bottom of the head of your main HTML file:
EX:
```
<base href="/">
```
Then create a superstatic.json file and add this code:
```js
{
  "rewrites": [
    {"source":"**/**","destination":"/index.html"}
  ]
}
```

Create your partial HTML file and the controller you added to the route and you should be good to go

Run a local static server with superstatic
```
$ superstatic
```
