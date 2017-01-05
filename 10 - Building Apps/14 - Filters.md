# Filters

Standard: **Build an Angular application (<a href="#">W0044</a>)**

## Objectives

By the end of this lesson you will:

- Apply filters to values
- Apply filters to arrays:
  - Order items in a list using filters
  - Filter items in a list using filters
- Quickly debug objects using the json filter (for development only)

## Rationale

In a world where data is very controller-centric, it can be tempting to put display logic into the controller, since that's the source of truth for the data.  But controllers should predominantly concern themselves with coordinating the flow of data through the system, not altering the _display_ of data - that's the template's job.

Filters allow you to alter the way data appears on the page, without altering the underlying data in the controller.

## Applying filters to values

There are two primary use-cases for filters when you start out developing Angular 1 applications:

- formatting data to look better
- altering the contents of a list

Regarding formatting data, say you have some long number and you'd like to _display_ it in a friendly format:

```html
{{3.14159265359}}
```

You can use built-in filters to format that number in the _template only_. The syntax to use a filter is:

```
{{ expression | filter:arguments }}
```

For example if you use the builtin number filter like so:

```html
<!-- assume $ctrl.myNumber is 3.14159265359 -->
{{$ctrl.myNumber | number:2}}
```

Then the user will see `3.14` on the screen.  Even though they see `3.14`, in the controller the value is still `3.14159265359`.

**Sequence of events**

- Angular loads your template and notices that you want to Interpolate an Expression
- Angular evaluates `$ctrl.myNumber`, which is `3.14159265359`
- Angular sees the `|` and sends that to the `number` filter and passes it the argument `2` (to indicate two decimal places)

> The syntax can be a bit confusing, but conceptually this is like calling `number(3.14159265359, 2)`.

## Applying filters to arrays of Objects

Imagine you have an array of comic book characters that you fetch from some API.  The API returns them ordered by their id, but you want to order the by their name.  Instead of writing your own sorting algorithm, you can simple write this:

```html
<div ng-repeat="character in $ctrl.characters | orderBy:'name'">
  <div class="character">
    <p>{{character.name}}</p>
  </div>
</div>
```

**Sequence of events**

- Angular loads your template and notices that you want to interpolate an expression
- Angular evaluates `$ctrl.characters`, which is an array
- Angular sees the `|` and sends `$ctrl.characters` to the `orderBy` filter and passes it the argument `"name"` (to indicate that it wants to sort by the "name" property)
- Angular then iterates over each of the characters in order, and adds them to the DOM

Recall from above that because of the way filters work, this is conceptually this is like writing `orderBy($ctrl.characters, "name")`.

Before moving on, definitely check out the [`filter`](https://docs.angularjs.org/api/ng/filter/filter) filter.  It will blow your mind 🎉 (oh, and you'll need it on the Reddit clone assessment)

### Filtering on a dynamic variable

It's super common to need to let users choose how they might order the data, or let them choose the words to filter by.

In this case, you need to filter by some sort of variable.  Recall from earlier lessons the way Angular data binding works:

- Controllers have properties
- Form fields are bound to those properties and update them when a user interacts with the app
- Other things in the template are _bound_ to those values

You saw this pattern when binding forms to objects, and again with `ng-if` and `ng-show`.  Filters are no different.

```html
<select ng-model="$ctrl.propertyToOrderBy">
  <option value="name">Name</option>
  <option value="height">Height</option>
</select>

<div ng-repeat="character in $ctrl.characters | orderBy:$ctrl.propertyToOrderBy">
  <div class="character">
    <p>{{character.name}}</p>
  </div>
</div>
```

**Sequence of events**

- Angular evaluates `$ctrl.characters`, which is an array
- Angular evaluates `$ctrl.propertyToOrderBy`, which might be `"height"`
- Angular sees the `|` and sends `$ctrl.characters` to the `orderBy` filter and passes it the argument `"height"`
- Angular then iterates over each of the characters in order by height, and adds them to the DOM

Recall from above that because of the way filters work, this is _conceptually_ like:

```js
orderBy($ctrl.characters, $ctrl.propertyToOrderBy)

// which becomes

orderBy([{...}, {...}], "height")
```

## Chaining filters

You can chain filters, and it will have more or less the obvious result:

```html
<div ng-repeat="character in $ctrl.characters | orderBy:$ctrl.propertyToOrderBy">
  <div class="character">
    <p>{{character.name}}</p>
  </div>
</div>
```

NOTE: in Angular 2 filters are called _pipes_.

## Questions

NOTE: you will need to reference the Angular docs to correctly answer these questions.

### !challenge

* type: short-answer
* id: angular-curriculum-filters-01
* title: Filter 1

##### !question
Given that `article.publishedOn` is February 5th, 2008, and that you have the following code:

```
{{article.publishedOn}}
```

How would you display that date in the format "02-05-2008"?
##### !end-question

##### !placeholder
{{article.publishedOn | ??}}
##### !end-placeholder

##### !answer
{{article.publishedOn | date:'MM-dd-yyyy'}}
##### !end-answer

##### !explanation
You need `MM` so that the digits are padded to match the format: https://docs.angularjs.org/api/ng/filter/date
##### !end-explanation
### !end-challenge






### !challenge

* type: short-answer
* id: angular-curriculum-filters-02
* title: Filter 2

##### !question
Given that you have an array of objects such as:

```
[
  {name: "Razor", price: 450},
  {name: "Pen", price: 75},
]
```

And given you have the following code in your template:

```
<div ng-repeat="product in $ctrl.products | orderBy:'name':true">
```

How would you present that data to the user sorted by the `name` in _descending_ order?
##### !end-question

##### !placeholder
<div ng-repeat="product in $ctrl.products | ??">
##### !end-placeholder

##### !answer
<div ng-repeat="product in $ctrl.products | orderBy:'name':true">
##### !end-answer

##### !explanation
The `true` indicated that
##### !end-explanation
### !end-challenge


### !challenge

* type: short-answer
* id: angular-curriculum-filters-03
* title: Filter 3

##### !question
Given that you have an array of objects such as:

```js
[
  {name: "Binder",  price: 5},
  {name: "Pen",     price: 4},
  {name: "Pencil",  price: 3},
  {name: "Eraser",  price: 2},
  {name: "Paper",   price: 1},
]
```

And given you have the following code in your template:

```
<div ng-repeat="product in $ctrl.products">
```

How would you present that data to the user such that it:

- orders by price
- only displays the first 2 items

So the output should be be:

- "Paper"
- "Eraser"

##### !end-question

##### !placeholder
<div ng-repeat="product in $ctrl.products | ??">
##### !end-placeholder

##### !answer
<div ng-repeat="product in $ctrl.products | orderBy:'price' | limitTo:2" >
##### !end-answer

##### !explanation
You must have the order by _first_, otherwise it would limit, then sort the limited items.
##### !end-explanation
### !end-challenge




## Resources

- https://docs.angularjs.org/guide/filter
