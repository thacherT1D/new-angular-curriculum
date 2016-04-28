# THIS ARTICLE IS A WORK IN PROGRESS

# Components

Angular 1.5 introduced the `.component()` helper method, which simplifies the `.directive()` definition, and advocates best practices and common default behaviors.

Also, using `.component()` will allow developers to write in an Angular 2 style, which will make upgrading to Angular 2 much easier.

## Syntax sugar

This method is truly just syntax sugar for the `.directive()` method. There’s nothing you can do with `.component()` that you can’t do with `.directive()`. It is important to note that not all directives are--or need to be--components.

## Best Practices

The main reason for the introduction of the `.component()` method, is to use the defaults that have become best practices in the Angular community:

* Components have isolated scopes by default
* They automatically use controllerAs syntax
* They use controllers instead of link functions
* The bindToController option is on by default

## `.directive()` to `.component()`

The syntax change is very simple:

```js
// before
module.directive(name, fn);

app.directive('gs-thing', function() {
  ...
});

// after
module.component(name, options);

app.component('gs-thing', {
  ...
});
```

The name argument is the name of the Component, the options argument is a configuration Object passed into the component, rather than a function.

The following directive uses the Angular 1.4.x style:

```js
app .directive('gsBigRedCircle', function() {
  return {
    controller: function($scope) {
      $scope.$ctrl = {};
      $scope.$ctrl.sayHi = function() {
        alert("Hi! Thanks for clicking on me!");
      };
    },
    template: '<div class="circle">Click me!</div>',
    link: function(scope, element, attrs) {

      element.on('click', function() {
        scope.$ctrl.sayHi();
      });

    }
  };
});
```

Using the `.component()` method for the same functionality looks like this:

```js
app.component('gsBigRedCircle', {
    controller: function() {
      this.sayHi = function() {
        alert("Hi! Thanks for clicking on me!");
      };
    },
    template: '<div class="circle" ng-click="$ctrl.sayHi()">Click me!</div>'
  });
```

`$ctrl` is automatically set to be the `function` specified by the controller property. We can override this with the `controllerAs` property:

```js
...
  controllerAs: 'BigRedCircle'
  template: '<div class="circle" ng-click="BigRedCircle.sayHi()">Click me!</div>'
...
```
