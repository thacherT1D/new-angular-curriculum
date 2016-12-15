# Expressions

Standard: **Build an Angular application with routes (<a href="#">W0044</a>)**

## Objectives

By the end of this lesson you will:

Angular expressions are:

> Javascript-like snippets that are usually placed in bindings like "{{ expression }}".

We've already used expressions to render a property that we set using `ng-model`. However, expressions are not just limited to displaying single properties.

Try writing some simple expressions, like:

* `1 + 2 = {{1 + 2}}`
* `My name is {{"BoJack" +  " Horseman"}}`
* `The array [99,43,22] is {{ [99,43,22].length }} items long.`

You've seen similar-like tags in a templating engine - like EJS, ERB, Swig, Jade. While they are definitely similar, there are a few key differences. The most important difference is that **you cannot write conditionals or loops inside an expression**. We'll see soon that Angular provides its own ways of achieving the same functionality.

> Keep in mind that you do not want to have complex logic in your views. If you want to run more complex code, we'll see how to move logic to a controller shortly.
