# Express Setup

In this unit, we'll be building an AngularJS app on top of Node and Express:

**Frontend**

* AngularJS
* Bootstrap

**Backend**

(Your computer should already have Node, MongoDB, and nodemon installed).

* Node & Express (server)
* MongoDB & Mongoose (database)


Let's start in terminal and create a new node and express app.

```
$ mkdir angular-express-icecream-app
$ cd angular-express-icecream-app
$ touch server.js
$ npm init
```
After you get through the prompts we want to add express, and some key middlewares:

 * body-parser
 * method-override
 * morgan (to automatically log requests)
 * mongoose
 
```
$ npm install --save express mongoose body-parser method-override morgan ejs
```

You should already be familiar with what is happening here.  We're both installing the middlewares and tracking it inside of the package.json file for reference.  This means you don't have to include the entire contents of the node_modules folder to github for others to clone and run your app.  People cloning/forking your repository will just need to make sure that they run `npm install`.  

If you are pushing this app up to a repository, don't forget to create a .gitignore file and include the node_modules folder:

```
$ touch .gitignore
$ echo "node_modules" >> .gitignore
```

Let's setup the middlewares in our server.js file.

**server.js:**

```javascript
var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require('method-override'),
morgan = require("morgan")
```

Now we'll add a route and set the port.

**server.js:**


```javascript
 . . .
 
app.get('/', function(req,res){
  res.send("Hello!")
});

PORT = 3001

app.listen(PORT,function(){
  console.log("this server is running on", PORT)
});

//localhost:3001
```

Test what we have so far by running nodemon in your app directory in terminal:

```
$ nodemon
```

Check `localhost:3001` in your browser to see "Hello!".

Fix any errors if there are any, and then proceed to setup the middlewares on the app, **server.js:**

```javascript
var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require('method-override'),
morgan = require("morgan")
 
app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Allow our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});
 . . . 
 
```


## Database Setup

Make sure you have mongoDB running on your machine in the background, in terminal:

```
$ mongod
```

Go in to you app directory and create a models folder.  We're going to create a single model for this exercise called `icecream`.  

**models/icecream.js:** 

```javascript
var mongoose = require("mongoose");

var icecreamSchema = new mongoose.Schema({
                    name: { type: String, required: true, trim: true },
                    description: String,
                    imageUrl: String
                });

var Icecream = mongoose.model("icecream", icecreamSchema);

module.exports = Icecream;
```

As a best practice we'll create a `models/index.js` to connect to our database and include all of our models, **models/index.js:**

```javascript
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/icecream-db");

mongoose.set("debug", true);

module.exports.Icecream = require("./icecream");
```

Now we need to add our database inside of our `server.js`, add it where all of the other require lines are.

**server.js:**

```javascript
 . . . 
 db = require("./models");
 . . . 
```

# Routing and Postman

For this section, we'll need to install Postman so that we can test out our routes.  Click the image link below.

[![](https://www.getpostman.com/img-rebrand/logo.png)](https://www.getpostman.com/)

In the website click the 'get it now' button and add it to you Chrome browser.

## Routing

Since we will be relying on AngularJS to handle the views and the entire front end, our back end just needs to be a simple API that can process incoming requests and respond with the appropriate JSON.

Let's setup a router in our express app.

**server.js:**

```javascript
var apiRouter = express.Router();
```

Let's create two routes for icecreams, `index` and `post`.

*index* and *post* in **server.js:**

```javascript
apiRouter.route('/icecreams')
.post(function(req,res){
  db.Icecream.create(req.body,function(error){
    if (error) return res.json({error:error.message})
    res.json({ message: 'Ice-cream created!' });
  })
})
.get(function(req,res){
  db.Icecream.find({},function(error,response){
    res.json(response);
  })
})

app.use('/', apiRouter);
```

Now we need to test the routes that we created, **postman** is the perfect tool for the job, allowing us to send the neccessay *post* and *get* requests to `localhost:3001/icecreams`.

Start up postman, and do a **GET** request to `localhost:3001/icecreams`.  You should see `null` or an empty array.

![Postman](https://i.gyazo.com/716546ea6a841a699a81c73c3fae89f9.png)

Send a **post** request to create a record so that we can see some actual data in our get request.  Select **POST** in the drop down list next to the URL.  Select the "Body" tab, and select the "x-www-form-urlencoded" radio button. Finally fill out the key/values and send the post request.

![Post](https://i.gyazo.com/a97bc6c07709b1b642f5de56494452d5.png)

Send another get request and you should see the ice-cream that was just created:

![index](https://i.gyazo.com/7bb833d6e71f91517860d6a417f9def9.png)


You can also go to `localhost:3001/icecreams` to see the results of the index route.

For the next part, create another ice cream using Postman so that we can confirm the show route results that we're about to create.

**server.js:**

```javascript
apiRouter.route('/icecreams/:icecreamId')
.get(function(req,res){
  db.Icecream.findById(req.params.icecreamId,function(error,icecream){
    if (error) return res.json({message: "Sorry, there was an error finding that ice-cream!", error: error});
    res.json(icecream);
  })
})

```

**EXERCISE**

* How can we check to see if this route is working using Postman?


Add the rest of the routes for edit and delete,  **server.js:**

```javascript
apiRouter.route('/icecreams/:icecreamId')
.get(function(req,res){
  db.Icecream.findById(req.params.icecreamId,function(error,icecream){
    if (error) return res.json({message: "Sorry, there was an error finding that ice-cream!", error: error});
    res.json(icecream);
  })
})

.put(function(req,res){
  db.Icecream.findById(req.params.icecreamId,function(error,icecream){
    if (error) return res.json({message: "Sorry, there was an error finding that ice-cream!", error: error});
    icecream.name = req.body.name
    icecream.description = req.body.description
    icecream.save(function(err){
      if (err) res.send(err);
      res.json({message:'Ice-cream updated!'})
    })
  })
})

.delete(function(req,res){
  db.Icecream.remove({_id:req.params.icecreamId}, function(error,icecream){
      if (error) return res.send(error);
      res.json({ message: 'Ice-cream successfully deleted' });
  })
})

```

**EXERCISE**

* Test the edit and delete routes using Postman.
* Why do we use Postman?




