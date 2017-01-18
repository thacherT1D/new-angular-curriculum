# Nested States in UI Router

Standard: **Build an Angular CRUD application against an HTTP API (<a href="#">W0045</a>)**

## Objectives

By the end of this lesson you will:

- Nest components using dot notation
- Nest components using the parent property
- Mark components as abstract

## Rationale

In most apps there's some concept of a layout - that is, some common HTML for the header and footer and maybe a sidebar.  There are also lots of examples of "master-detail" apps, where there's list of things and clicking on the list brings up the details for it, but the list stays on the page.

Both of these are easily solved with nested states in ui-router.

## Nested States

In order to setup nested states, you need to do two things:

1. Indicate the nesting in the config
1. Put a `<ui-view></ui-view>` in the parent component

There are [several ways](https://github.com/angular-ui/ui-router/wiki/nested-states-&-nested-views) to indicate nesting in the config, and here are two common ways:

### Using dot notation in state names

If you have a state named `people`, and another state named `people.person`, then `person` will be nested inside of `people`.

_config.js_

```js
function config($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
    .state({
      name: 'people',
      url: '/people',
      component: 'peopleComponent',
    })
    .state({
      name: 'people.person',
      url: '/:id',
      component: 'personComponent',
    })
}
```

_index.html_

```html
<ui-view></ui-view>
```

_people.template.html_

```html
<div>
  <h1>Here are some people</h1>
  <ul>
    <!-- list people here -->
  </ul>
  <h2>Your selected person</h2>
  <ui-view></ui-view>
</div>
```

_person.template.html_

```html
<p>I am a person</p>
```

### Abstract States

Often times you want an outer `app` component, but you don't want to route to it.  So you can make the `app` component abstract, which means it doesn't have a url.

Then you can use the `parent` property to indicate the nesting, like so:

_config.js_

```js
function config($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
    .state({
      name: 'app',
      abstract: true,
      component: 'app',
    })
    .state({
      name: 'people',
      url: '/people',
      parent: 'app',
      component: 'people',
    })
}
```

_index.html_

```html
<ui-view></ui-view>
```

_app.template.html_

```html
<div>
  <h1>I am the layout</h1>
  <ui-view></ui-view>
</div>
```

_people.template.html_

```html
List some people...
```
