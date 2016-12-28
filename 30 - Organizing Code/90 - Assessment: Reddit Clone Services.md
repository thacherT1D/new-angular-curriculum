# Organizing Code

The lessons in this section all relate to the the following standard:

> Refactor Angular applications to use services and components (W0046)

In order to demonstrate that you've mastered the core concepts, you will be asked to build an app where:

- Components communicate through Services
- Components are nested inside other components (for example comments inside a post component)
- Data is passed into components via attributes
- Events in components are published to their parents
- Follows the Angular Style Guide, specifically:
  - [Services](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#services)
- Optionally follows these guidelines:
  - [Module Declaration](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modules)
  - [Multiple Modules](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modularity)

## Description

- Take your Reddit clone
- Refactor it such that:
  - At least 3 components use `templateUrl` instead of `template`
  - There are at least 2 Services (posts and comments)
    - and there are no `$http` calls in components
  - You must have the following components:
    - The "edit post form" and the "new post form" must be the same component
    - Each post on the homepage must be a component
    - The comments section of each post must be its own component


### !challenge
* type: project
* id: angular-curriculum-assessment-3-reddit-clone-with-services
* title: Reddit Clone Part 3

##### !question
### Submit Your Solution
Submit the URL to your Reddit Clone repository on GitHub

- Follow [the instructions](../10 - Building Apps/02 - Unit Overview.md) to update angular-drills, for example:

  ```
  git checkout master
  git fetch upstream
  git rebase upstream/master
  git checkout -b reddit-clone-part-3
  git push -u origin reddit-clone-part-3
  ```
- Do the work in your existing [reddit-clone-part-2](https://github.com/gSchool/angular-drills/tree/master/reddit-clone-part-2) challenge

Tests should already be passing, so run them often to make sure they are still green!

Submit the URL to your solution below.
##### !end-question

##### !placeholder
Submit your github link
##### !end-placeholder

##### !explanation
An instructor will review and score this.
##### !end-explanation
### !end-challenge
