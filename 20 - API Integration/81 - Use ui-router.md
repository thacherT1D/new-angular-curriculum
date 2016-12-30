# Use ui-router

Standard: **Build an Angular CRUD application against an HTTP API (<a href="#">W0045</a>)**

## Objectives

By the end of this lesson you will:

- Define and link to multiple static routes
- Define and link to routes with dynamic path segments

## Rationale

You _could_ build your application with no routes whatsoever.  One major problem with this approach is that you lose the ability to deep-link.  That is, you couldn't bookmark any of the pages, or send links to other people.

If your app requires a user to click 4 or 5 times to see some data, and then they can't link back to it, that's a terrible user experience.

By the end of this lesson you'll have the tools you need to setup basic client-side routes.

## Changing State

As a developer on an app with routes, you'll do one of three things regularly:

1. _Define_ routes (or "states", as ui-router calls them)
1. _Link to_ routes via `<a ui-sref="..."></a>`
1. _Redirect to_ routes in a controller

### Define routes

At its simplest, defining a route is pretty straightfoward:

```js
function config($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      component: 'app',
    })
}
```

When you _define_ a route, you are telling ui-router that

- _when_ someone goes to the given URL
- _then_ replace `<ui-view>` with the specified component

There's a _ton_ more to this, but that'll get you started.

### Link to a route

In order to create a link to a route, you use the `ui-sref` attribute.

```js
$stateProvider
  .state({ name: 'orders', url: '/my-orders', component: 'orders' })
  .state({ name: 'cart', url: '/my-cart', component: 'cart' })
```

Assuming you had the routes above, if you wanted to create a link to the `cart` component you would write:

```html
<a ui-sref="cart">My Cart</a>
```

> REMEMBER: the value of the `ui-sref` attribute must match the value of the state's `name` attribute

### Navigate to a route

In many cases you'll need to do something like process a form, make some HTTP calls then redirect a user to another state.  You can easily do this with `$state.go()` in a controller, like so:

```js
controller.$inject = ['$state']

function controller($state) {
  const vm = this

  vm.navigate = function (e) {
    e.preventDefault()
    $state.go('home')
  }
}
```



## Questions

### !challenge

* type: short-answer
* id: angular-curriculum-use-ui-router-01
* title: ui-sref 1

##### !question

### Question
Given the following state definitions, write a link (anchor tag) that will send you to `/preferences`

```js
$stateProvider
  .state({ name: 'page-1', url: '/about', component: 'component1' })
  .state({ name: 'page-2', url: '/preferences', component: 'component1' })
```
##### !end-question

##### !answer
<a ui-sref="page-2"></a>
##### !end-answer

##### !placeholder
<a></a>
##### !end-placeholder

##### !explanation
The '/preferences' path is defined with the name `page-2`.  The value of the `ui-sref` attribute should match the name of the state.  So the answer is:

`<a ui-sref="page-2"></a>`
##### !end-explanation
### !end-challenge

## Resources

- [Why ui-router from co-creator Nate Abele](https://www.youtube.com/watch?v=ZmrsDqMrAVo)
- [More on ui-router from co-creator Tim Kindberg](https://www.youtube.com/watch?v=dqJRoh8MnBo)
- [Another ui-router tutorial from scotch.io](https://scotch.io/tutorials/angular-routing-using-ui-router)
- [Some useful tips for ui-router from scotch.io](https://scotch.io/tutorials/3-simple-tips-for-using-ui-router)
- [Adding animations with ui-router](https://www.youtube.com/watch?v=W89DYSthCTQ)
- [https://github.com/angular-ui/ui-router](https://github.com/angular-ui/ui-router)
- [https://github.com/angular-ui/ui-router/wiki](https://github.com/angular-ui/ui-router/wiki)
- [ui-sref](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#ui-sref)
- [$state.go()](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#stategoto--toparams--options)
- [URL routing](https://github.com/angular-ui/ui-router/wiki/URL-Routing)
