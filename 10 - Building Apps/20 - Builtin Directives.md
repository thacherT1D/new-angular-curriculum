# Builtin Directives

Standard: **Build an Angular application (<a href="#">W0044</a>)**

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

### ng-class

`ng-class` will dynamically set an element's class depending on a provided expression.

Define the following CSS class:

```css
.highlight {
  background-color: yellow;
}
```

You can use `ng-class` to selectively apply the 'highlight' class to elements:

```html
<div ng-class='{highlight: 4 + 4 == 8}'> 4 + 4 = 8</div>
<div ng-class='{highlight: 4 + 4 == 10}'>4 + 4 = 10</div>
```

**Sequence of events**

- Angular parses the template code, and sees the `ng-class` directive being applied
- Angular parses the expression
- Because `{highlight: 4 + 4 == 8}` will result in an object, Angular parses the right-hand side first
- `4 + 4 == 8` is true, so the object is `{highlight: true}`
- Angular loops over all of the properties in the object (in this case, just "highlight")
- If the property's value is `true`, Angular adds that class
- If the property's value `false`, Angular removes that class

See [more examples](https://github.com/mjhea0/thinkful-mentor/tree/master/angular/fundamentals/built-in-directives/ngClass/ngClass-more-examples)

## Questions

### !challenge
* type: multiple-choice
* id: wdi-angular-curriculum-builtin-directives-01
* title: Directives #1

##### !question
Read through the docs at https://docs.angularjs.org/api/ng/directive/

Which of these is the correct way to set the `for` attributes on a label?
##### !end-question

##### !options
- `<label ng-for="some-id">`
- `<label for="some-id">`
##### !end-options

##### !answer
`<label for="some-id">`
##### !end-answer

##### !explanation
Angular 1 has no `ngFor` directive
##### !end-explanation
### !end-challenge


### !challenge
* type: multiple-choice
* id: wdi-angular-curriculum-builtin-directives-02
* title: Directives #2

##### !question
Read through the docs at https://docs.angularjs.org/api/ng/directive/

Which of these is the correct way to set the `src` attribute on an image?
##### !end-question

##### !options
- `<img src="{{url}}"/>`
- `<img ng-src="{{url}}"/>`
##### !end-options

##### !answer
`<img ng-src="{{url}}"/>`
##### !end-answer

##### !explanation
If you use `src` then the browser will try to download an image called `{{url}}` first, then it will download the real one.

https://docs.angularjs.org/api/ng/directive/ngSrc
##### !end-explanation
### !end-challenge


### !challenge
* type: multiple-choice
* id: wdi-angular-curriculum-builtin-directives-03
* title: Directives #3

##### !question
Read through the docs at https://docs.angularjs.org/api/ng/directive/

Which of these is the correct way to set the `href` attribute on a an `<a>`?
##### !end-question

##### !options
- `<a href="{{url}}">link1</a>`
- `<a ng-href="{{url}}">link1</a>`
##### !end-options

##### !answer
`<a ng-href="{{url}}">link1</a>`
##### !end-answer

##### !explanation
If you use `href` to bind a value, and a user clicks on the link before Angular loads, they'll be sent to a url named `{{url}}`

https://docs.angularjs.org/api/ng/directive/ngHref
##### !end-explanation
### !end-challenge


### !challenge
* type: short-answer
* id: wdi-angular-curriculum-builtin-directives-04
* title: Directives #4

##### !question
Which directive can create a `<select>` and `<option>`s?
##### !end-question

##### placeholder
ngSomething
##### !placeholder

##### !answer
ngOptions
##### !end-answer

##### !explanation
https://docs.angularjs.org/api/ng/directive/ngOptions
##### !end-explanation
### !end-challenge


### !challenge
* type: short-answer
* id: wdi-angular-curriculum-builtin-directives-05
* title: Directives #5

##### !question
Which directive would you use to conditionally print either "1 _Thing_" or "2 _Things_", depending on the the number?
##### !end-question

##### placeholder
ngSomething
##### !placeholder

##### !answer
ngPluralize
##### !end-answer

##### !explanation
https://docs.angularjs.org/api/ng/directive/ngPluralize
##### !end-explanation
### !end-challenge


## Bonus

What's happening in each of these examples? What's the purpose of the directive?

- [ng-cloak](https://github.com/gSchool/angular-examples/tree/master/ng-cloak)
- [ng-include](https://github.com/gSchool/angular-examples/tree/master/ng-include)
- [ng-pluralize](https://github.com/gSchool/angular-examples/tree/master/ng-pluralize)
