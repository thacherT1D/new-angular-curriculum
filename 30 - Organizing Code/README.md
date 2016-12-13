# Organizing Code

The lessons in this section all relate to the the following standard:

> Refactor Angular applications to use services and components (W0046)

In order to demonstrate that you've mastered the core concepts, you will be asked to build an app where:

- Components communicate through services/factories
- Components are nested inside other components (for example comments inside a post component)
- Data is passed into components via attributes
- Events in components are published to their parents
- Follows the Angular Style Guide, specifically:
  - [Services](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#services)
- Optionally follows these guidelines:
  - [Module Declaration](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modules)
  - [Multiple Modules](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modularity)

## Assessment

The assessment for this standard is to refactor your Reddit Clone application such that:

- There are at least 3 services
- There are at least 5 components
- There are no `$http` calls directly in controllers (must be in services)

## How to proceed

Once you've read up on Services and Components, work in short-lived feature branches so if you make a mess of things it's easy to go back to master and start over again 😇
