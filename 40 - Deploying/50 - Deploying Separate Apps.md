# Deploying Separate Applications

Standard: **Deploy separate client-server applications with CORS (Elective) (<a href="#">W0051-V1</a>)**

## Objectives

By the end of this lesson you will:

1. Prepare 2 separate applications for deployment
1. Setup `cors` middleware on the server to allow requests from other domains
1. Write client-side code to determine which host to use, depending on the environment

## Rationale

Sometimes for various reasons you and your team might deem it necessary to deploy your client-side application separate from your server-side application.  There are a few benefits to this:

- You decouple your server-side deployments from your client-side deployments
  - So if your server-side API has high traffic from web and mobile apps, you can deploy your client-side application more frequently without risking any interruptions to service in your server-side app
- You might make it easier for separate frontend / backend teams to work with each other, since they don't have to coordinate deploys
- It makes it easier to store apps in different git repos, if that is something your team wants to do

But there are also a few complications you'll need to be mindful of, so in the lesson you'll learn about a few of them.

## #1 - Separate the apps

Until now you have had a single application, that shared a single `package.json`, and was deployed to the same place.

### Find a host

So the first thing you'll have to do is find a host that supports html5Mode urls, such as:

- [Surge](https://surge.sh/)
- [Firebase](https://firebase.google.com/)
- [Cloud Foundry with the Static Buildpack](https://github.com/cloudfoundry/staticfile-buildpack)
- [Heroku w/ Static Buildpack](https://github.com/heroku/heroku-buildpack-static)
- [Bluemix w/ Static Buildpack](https://www.ibm.com/blogs/bluemix/2014/08/deploying-static-web-sites/)

NOTE: See [Customizing Nginx](./52 - Customizing Nginx.md) if you use the Static Buildpack

### Consider splitting into different git repos

Depending on your setup, you may want to split your application into different git repos.  Totally up to you - in real life it will be based on a team decision.

## #2 - Setup CORs

In many cases you'll end up deploying the API and the frontend to different domains.  If that's the case, then you'll need to install and configure the `cors` middleware on the server:

https://www.npmjs.com/package/cors

Just follow instructions on the readme.

## #3 - Set your client-side host

When you deployed the app all as one, you made AJAX calls with root-relative paths, like `/people/12/addresses`.

Now that apps are separate, you need to use fully-qualified URLs like `https://api.example.com/people/12/addresses`.

However that address will change based on whether you are in development or production.  So how do you allow your code to access either one?

### Update your Angular code

One way is to create an `apiInfo` service that has a property called `host`.

Instead of `$http.get('/foo')` you now have to write:

```js
$http.get(`${apiInfo.host}/foo`)
```

### Determine which environment you are in

The best option here is to use a tool like Webpack or Gulp to preprocess all of your JS files locally with Node.  Then you can simply use `process.env` variables to build different versions of the JS.

Another option is to inspect `document.location` to see what host you are on, and then hard-code a list of mappings between your client-side URLs and your server-side API URLs.
