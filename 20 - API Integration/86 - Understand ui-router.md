# Understand ui-router

Standard: **Build an Angular CRUD application against an HTTP API (<a href="#">W0045</a>)**

## Objectives

By the end of this lesson you will:

- Describe how client-side routing works

## Sequence of events

When a user visits your page for the first time, here's what happens:

- A users visits www.example.com
- The server sends down `index.html`
- `index.html` requests several js files (angular, ui-router, your js files etc...)
- Angular boots up
- ui-router registers your route definitions
- ui-router looks at the path then:
  - finds the matching route definition
  - finds the matching component
  - renders that component inside of `<ui-view>`

Then when a user clicks on a link in your application, here's what happens:

- NO request is made to the server
- ui-router updates the URL bar with the new path
- ui-router looks at the path then:
  - finds the matching route definition
  - finds the matching component
  - renders that component and replaces the contents of `<ui-view>`

Notice how _the server is only involved in the original page load_.  After that the "routes" are really just doing two things:

- updating the URL bar
- rendering some DOM
