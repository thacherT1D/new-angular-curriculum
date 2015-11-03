# Custom Directives: Part 2

Directives become much more powerful when they start manipulating the DOM.  Angular gives you control over the DOM with two functions, `link` and `compile`

**EXERCISE**

Research `link` and `compile`.  What do the two functions do in angular?  Which one would be most commonly used for DOM manipulation?

![](https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png)

The `link` method is used to manipulate the DOM in your directive.  Below is a directive that uses `link` to change the background color of an element whenever it is moused over.

`app.js`

```js
var app = angular.module('mouseOverDirectiveApp', [])

app.directive('gsChangeBackground', function() {
  return {
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', 'yellow');
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      })
    }
  };
});
```

`index.html`

```html
<!DOCTYPE html>
<html ng-app="mouseOverDirectiveApp">
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js" type="text/javascript"></script>
<script src="app.js" type="text/javascript"></script>
</head>
<body>
  <div gs-change-background style="background-color: red">Hello World!</div>
</body>
</html>
```

**EXERCISE**

How is the code able to call `element.on` and `element.css`?  What type of object is it?  Look in the angular docs for all available methods.

**EXERCISE**

The `gsChangeBackground` directive could be more customizable.  Change the code so that the user of the directive can set an attribute on the tag that specifies what the new background color should be on mouse enter.  Also, add the ability for the user to change the text color on mouse enter as well.  If no new text color is specified, the text color should not change.  Lastly, our directive only makes sense in one context.  Add a restriction to the directive so that it can only be used in the correct way.  You'll have to figure out which way that is!

**EXERCISE**

Make an image carousel.  The carousel should be made with a custom directive.  The directive should expect an array of images to be passed in via an attribute.  The directive should also add left and right arrows each with their own `ng-click`.  Make sure the directive has an isolated scope.

[Click here for animated gif](http://s13.postimg.org/5lvbgxa0l/carousel_angular_animated.gif")


**EXERCISE**

Build on the previous custom directive.  Add a thumb nail view at the top of the carousel.  Only show the thumb nail view if there are 5 or move images in the carousel.  The thumbnail should show the previous 2 images, the current image, and the next 2 images.
