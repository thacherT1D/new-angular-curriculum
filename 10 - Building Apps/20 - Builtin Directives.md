# Builtin Directives

Standard: **Build an Angular application with routes (<a href="#">W0044</a>)**

## Objectives

By the end of this lesson you will:

- Choose the best directive to solve common problems, by reading the Angular docs
- Write `ng-class` directives

## Rationale

Directives are, for the most part, really easy.  The real skill is not memorizing them, it's about knowing that they exist, and being able to find the right tool for the job.

One exception is `ng-class`, which can be confusing at first.

You'll see "builtin" directives here because you can write your own directives.  In fact, you already have!  Components are a kind of directive.  There's a _ton_ to know about Angular 1 directives, but you mostly don't need to know if you know components.

## Builtin Directives

Directives are Angular's way of extending HTML. Angular uses directives to add functionality to HTML elements and attributes. Coupled with Angular templating, directives create dynamic components that re-render whenever the underlying data changes. According to the docs:

> At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler to attach a specified behavior to that DOM element or even transform the DOM element and its children.

Visit [https://docs.angularjs.org/api/ng/directive/](https://docs.angularjs.org/api/ng/directive/) to see the list of builtin directives.

**EXERCISE**

Add an ng-init with a  property called `symbols` with the value `['Spades', 'Clubs', 'Hearts', 'Diamonds']`. Use an `ng-repeat` to display each one in the body.

BONUS: Figure out how to make these entity codes actually display as symbols, like the following image:

![](http://content.screencast.com/users/ColtSteele1/folders/Jing/media/d75c95af-4729-4b8f-bf84-3b98a87f3213/00000003.png)

**EXERCISE**

Create a simple password validator like the one shown below. If the password is less than 6 characters, hide the submit button and show the error message. Otherwise, show the button and hide the error

![](http://zippy.gfycat.com/FelineEqualElectriceel.gif)

> View another example [here](https://github.com/gSchool/angular-examples/tree/master/ng-show-hide).

### ng-class

`ng-class` will dynamically set an element's class depending on a provided expression.

Define the following CSS class:

```css
.highlight {
  background-color: yellow;
}
```

We can use `ng-class` to selectively apply our 'highlight' class to elements.

```js
<div ng-class='{highlight: 4 + 4 == 8}'> 4 + 4 = 8</div>
<div ng-class='{highlight: 4 + 4 == 10}'>4 + 4 = 10</div>
```

> Want more [examples](https://github.com/mjhea0/thinkful-mentor/tree/master/angular/fundamentals/built-in-directives/ngClass/ngClass-more-examples)?

**EXERCISE**

Build on top of the previous password validator exercise. Use `ng-class` to make the form and character count green when valid and red when invalid. Take a look at the following gif:

![](http://zippy.gfycat.com/ActualBeautifulIzuthrush.gif)

## Challenges

- Ask students which directive to use from that page to do certain things

## Bonus

What's happening in each of these examples? What's the purpose of the directive?

- [ng-cloak](https://github.com/gSchool/angular-examples/tree/master/ng-cloak)
- [ng-include](https://github.com/gSchool/angular-examples/tree/master/ng-include)
- [ng-pluralize](https://github.com/gSchool/angular-examples/tree/master/ng-pluralize)
