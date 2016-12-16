# Expressions

Standard: **Build an Angular application (<a href="#">W0044</a>)**

## Objectives

By the end of this lesson you will:

- Differentiate between Interpolation and Expressions
- Write JavaScript-esque expressions inside curlies

## Rationale

Understanding vocabulary is a huge part of understanding docs.  While this lesson is short, it's key to be able to _label_ the parts of an Angular application so you know how to Google for answers.

## Interpolation

Interpolation in Angular refers to mixing static HTML with placeholders.

The following Template code has no interpolation:

```html
<p>My name is Alexander Hamilton</p>
```

But this snippet _does_ use interpolation:

```html
<p>My name is {{$ctrl.name}}</p>
```

## Expressions

Angular expressions are:

> Javascript-like snippets that are usually placed in bindings like "{{ expression }}".

Try writing some simple expressions, like:

* `1 + 2 = {{1 + 2}}`
* `My name is {{"BoJack" +  " Horseman"}}`
* `The array [99,43,22] is {{ [99,43,22].length }} items long.`

You've seen similar-like tags in a templating engine - like EJS, ERB, Swig, Jade. While they are definitely similar, there are a few key differences. The most important difference is that **you cannot write conditionals or loops inside an expression**.  These are JavaScript-esque - that is, they look like JavaScript, but you don't have all of the features of JavaScript.

## Avoid complex expressions

Keep in mind that you do not want to have complex logic in your views. If you want to run more complex code, you can generally achieve that by creating your own components and filters, or by moving complex logic to the controller or to some Service (which you'll cover in the "Organizing Code" unit).
