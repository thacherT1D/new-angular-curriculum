# Using resolve

Standard: **Refactor Angular applications to use services and components (<a href="#">W0046</a>)**

## Objectives

By the end of this lesson you will:

- Use resolve to load data before transitioning to a page

## Rationale

It can be a crappy user experience to load an empty page and then have it fill in.  Instead, you can fetch the data ahead of time and have that page appear fully-loaded the first time.

## Using Resolve

[https://github.com/angular-ui/ui-router/wiki#resolve](https://github.com/angular-ui/ui-router/wiki#resolve)

## Simulating this in development

In development, often times the server is super fast because there's very little data and also because there's very little network latency.  So how can you test this?

Add some timeouts to controllers!

In Express it might look like this:

```js
router.get('/things', (req, res) => {
  knex('things').then(things => {
    setTimeout( () => res.json(things), 1000 )
  })
})
```

Obviously don't commit and push that code (because it'll just make things slow 😜) but it's good for testing locally.
