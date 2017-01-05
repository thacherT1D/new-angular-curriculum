# Dependency Injection

Standard: **Build an Angular CRUD application against an HTTP API (<a href="#">W0045</a>)**

## Objectives

By the end of this lesson you will:

- Inject a dependency using `Function.$inject`
- Describe how to _define_ things that can be injected
- Describe how to _inject_ these dependencies
- Discuss why dependency injection exists

## What is it?

From [Wikipedia](https://en.wikipedia.org/wiki/Dependency_injection):

"In software engineering, dependency injection is a software design pattern that implements inversion of control for resolving dependencies. Dependency injection means giving an object its instance variables. Really. That's it."

## What is a dependency?

A dependency is basically any reference to code that you didn't define.  Take this code for example:

```js
function doStuff() {
  let data = fs.readFileSync('data.txt')
  let parsed = new CSVParser().parse(data)
  console.log(parsed)
}
```

In the example above there are 3 dependencies:

- `fs`
- `CSVParser`
- `console`

What would happen if you want to make a small tweak to that method, say writing to a file instead of printing to the console?  Your method wouldn't support that very easily.

## Ways to reference dependencies

There are 2 main ways your code can reference other code:

1. You can hard-code the thing you want (basically by referencing global variables):

  ```js
  function controller() {
    const vm = this
    new ArticleService().findAll().then(articles => {
      vm.articles = articles
    })
  }
  ```

1. You can pass in the thing you want:

  ```js
  controller.$inject = ['articleService']
  function controller(articleService) {
    const vm = this
    articleService.findAll().then(articles => {
      vm.articles = articles
    })
  }
  ```

In #1 (hard-coding), your code is very rigid.  For example if you wanted the following code to write to a file instead of `console.log`ing the results, how would you do it?

```js
function doStuff() {
  let data = fs.readFileSync('data.txt')
  let parsed = new CSVParser().parse(data)
  console.log(parsed)
}
```

Consider what would happen if you rewrote your code like this:

```js
function doStuff(writer) {
  let data = fs.readFileSync('data.txt')
  let parsed = new CSVParser().parse(data)
  writer.write(parsed)
}
```

See how `writer` is defined as a parameter?  Now you could do this:

```js
function consoleWriter = {
  write(message) { console.log(message) }
}

class FileWriter {
  constructor(path) {this.path = path}
  write(message) { fs.writeFileSync(message, this.path) }
}

doStuff(consoleWriter)
doStuff(new FileWriter('output.txt'))
doStuff(new FileWriter('parsed.txt'))
```

All of a sudden your code becomes easy to _extend_ without having to _modify_ it.

## Overcoming drawbacks to injecting dependencies

One drawback to injecting dependencies is that now everyone who calls your code needs to pass extra arguments in, which can get cumbersome.  

That's why frameworks like Angular have builtin support for injecting dependencies.  For example with Angular 1, if you declare the name of the thing you want, Angular will find it and hand it to you.

```js
controller.$inject = ['articleService']
function controller(articleService) {
  const vm = this
  articleService.findAll().then(articles => {
    vm.articles = articles
  })
}
```

**Sequence of events**

- Angular sees that your controller is about to load
- Angular sees that your controller would like something named `articleService`
- Angular finds something called `articleService`
  - If it already has an instance of `articleService` it reuses it
  - If it doesn't have one, it'll set it up
- Angular calls your controller function and passes in the `articleService` that it found

## Putting things _into_ the dependency injector

The main way you should put things into the dependency injector is to define a service:

```js
(function() {
  'use strict';

  app.module('app')
    .service('articleService', articleService)

  function articleService() {
    this.findAll = function() {
      // do some hard work
    }
  }

}())
```

Angular ships with a number of things in the dependency injector already, such as:

- `$http`
- `$rootScope`

And when you add modules like `ui-router`, you'll see other things available to you such as `$state`.

> NOTE: see how this lesson describes "things" that go in the dependency injector?  Angular 1 has a number of types of things it can inject such as providers, services, factories, constants and values.  Unless you find that you need to learn more about all of that, it's fine to skip and just use services for everything.

## Getting things _out_ of the dependency injector

1. Make sure your function is a named function, not an inline function:

  ```js
  // do this....
  (function() {
    'use strict';

    app.component('myComponent', {
      controller: controller
    })

    function controller(){

    }
  }())

  // don't do this....
  app.component('myComponent', {
    controller: function(){}
  })
  ```

1. Declare what you are injecting with `$inject`

  ```js
    controller.$inject = ['$http']
    function controller(){

    }
  ```

1. Add the dependencies as parameters

  ```js
    controller.$inject = ['$http']
    function controller($http){

    }
  ```

The order is very important, and they must match.

> Guideline: the parameter names should match the name of the injected dependencies.  So if you `$inject = ['foo', 'bar']`, your parameters should be `function controller(foo, bar) {}`.

## Resources

- https://docs.angularjs.org/guide/di
