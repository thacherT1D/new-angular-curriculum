# Starting a semi-real project

Standard: **Build an Angular application (<a href="#">W0044</a>)**

## Objectives

By the end of this lesson you will:

- Start a simple Angular app project

## Rationale

In the real world you will almost certainly be using a build system such as Gulp / Grunt / Webpack / Broccoli etc... that will do all kinds of great things like transpiling your JS files.  But as you learn Angular 1 it's very easy to get setup without those tools.

The following lesson describes a few things like how to install dependencies like Angular 1 locally, so your app works even if you are in a place with no internet (like on public transportation), which can help you code ALL DAY 🚌

This uses [yarn](https://yarnpkg.com/) instead of npm because it's faster and handles version-locking better.

## Getting started

If you haven't yet done so, install `yarn` globally:

```
npm install -g yarn
```

Create your project directory and get your initial setup:

```
mkdir my-project
cd !$
yarn init -y
yarn add --dev lite-server
yarn add angular@1.6.0
```

Next create an index.html file, and reference the version of Angular from node_modules:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <script src="/node_modules/angular/angular.min.js"></script>
  </body>
</html>
```

Then define your start script in package.json like so:

```json
{
  "name": "reddit-clone-solution",
  "version": "1.0.0",
  "author": "Galvanize <info@galvanize.com>",
  "license": "MIT",
  "scripts": {
    "start": "lite-server"
  },
  "devDependencies": {
    "lite-server": "^2.2.2"
  },
  "dependencies": {
    "angular": "1.6.0"
  }
}
```

Add a readme that tells others (and your future self) how to install / run the app:

```md
Install the app by running `yarn`

Run the app with `npm start`
```

Finally setup your project in Git:

```
echo node_modules >> .gitignore
git init .
git add -A
git commit -m "initial commit"
```

Then you can push to GitHub and start building the app!
