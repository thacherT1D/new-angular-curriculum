# Connecting Angular apps to an API

The lessons in this section all relate to the the following standard:

> Build an Angular CRUD application against an HTTP API (W0045)

In order to demonstrate that you've mastered the core concepts, you will be asked to build an app where:

- Uses $http and promises well
- App loads data from the server on page load (index page)
- Allows users to create records that appear on the screen without refreshing, and appear the same when refreshing (new records must get the id)
- Allows users to update records that update on the screen without refreshing, and appear the same when refreshing
- Allows users to remove records that disappear from the screen without refreshing, and don't reappear when refreshing
- Deep links should load data the same way as clicking from the index page
- Follows the Angular Style Guide, specifically:
  - [Services](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#services)
  - [Manual Injection Annotation](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#manual-annotating-for-dependency-injection)
  - [Continues the Folder-by-Feature Structure](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#folders-by-feature-structure)
- Could be ngResource or $http

## Assessment

[Integrate your Reddit Clone with a server-side API](49 - Assessment: Reddit Clone with API.md).

## How to proceed

Angular 1 has a neat library called [`ngResource`](https://docs.angularjs.org/api/ngResource) which can simplify basic REST / CRUD operations with a server.  Please start by using `$http` directly and get comfortable with it, then if you want to refactor to `ngResource` feel free!
