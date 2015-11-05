# Adding Angular to Express

With our ExpressJS app we just need to make a few more changes and we're ready to add angular!

We'll use a single index page on the server-side to contain all of the angular views.

Make a root path to go to a newly created `index.ejs` page, and update the routes we have to follow the path `localhost:3001/api/icecreams . . .`

the changes should look like this, **server.js:**

```javascript
app.use('/api', apiRouter);

// ROOT
app.get('/', function(req,res){
  res.render('index.ejs');
});
```

Now you can add AngularJS, Bootstrap, and any other supporting files in to **views/index.ejs:**

(double check which versions you want to use!)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mean Tea App</title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-route.js"></script>
    <script src="js/angular/app.js"></script>
  </head>
  
  . . .
  
  <div ng-view></div>
  
  . . . 
  
```

Notice the `js/angular/app.js`, your angular app will reside in `public/js/angular/app.js`.  All angular related javascript files will be in the `public/js/angular` folder, and included like this:

```html
 <script src="js/angular/[NAME OF YOUR ANGULAR FILE].js"></script>
```

Your index view for the index route of ice-cream can be placed in `public/views/icecreams/index.html`.

Add some simple HTML to test that this view works, **public/views/icecreams/index.html:**

```html
	<h1>Hi from the icecream index view!</h1>
```

As with other AngularJS apps, you can now connect the root path, controller, and view using Angular's route module.

**EXERCISE ONE**

Build an ice-cream list app that lists all of the ice-creams when a user is on `localhost:3001`.

* Index page for icecreams should be on `localhost:3001`
* Index page should have an add new icecream button that reveals a form to add new ice-creams
* Each ice-cream should have an edit and delete button next to it.
* Each ice-cream should have a show page when clicked on.
* When the index page is refreshed, all the icecreams should persist!

**EXERCISE TWO**

Let's go back to our angular shopping cart app, Mean Tea.  Build an express back end and seed the database with the JSON that you originally had.  Use mongoose-seed to help you - [mongoose-seed](https://www.npmjs.com/package/mongoose-seed)
