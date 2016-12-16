# Assessment: Angular Reddit Clone

Standard: **Build an Angular application (<a href="#">W0044</a>)**

Your assessment will be considered successful when:

- Uses builtin directives and filters (ng-repeat, ng-class, ng-if etc...)
- Uses data-binding (that is, doesn't use direct DOM manipulation)
- Routes directly to components
- Uses the following patterns from the Angular 1 Styleguide:
  - [iifes](https://github.com/johnpapa/angular-styleguide/tree/master/a1#iife)
  - [Named Functions](https://github.com/johnpapa/angular-styleguide/tree/master/a1#named-vs-anonymous-functions)
  - [ControllerAs](https://github.com/johnpapa/angular-styleguide/tree/master/a1#controllers)
  - [Bindable Members Up Top](https://github.com/johnpapa/angular-styleguide/tree/master/a1#bindable-members-up-top)
  - [Naming Guidelines](https://github.com/johnpapa/angular-styleguide/tree/master/a1#naming)
  - [Controller Names](https://github.com/johnpapa/angular-styleguide/tree/master/a1#controller-names)
  - [Folders-By-Feature Structure](https://github.com/johnpapa/angular-styleguide/tree/master/a1#folders-by-feature-structure)

---

[![](https://i.gyazo.com/f9d435b4e198cf5ea3c29607d40a8958.png)](https://learn.galvanize.com/redirects/articles/4609)

Video:
<iframe src="https://player.vimeo.com/video/135778837?byline=0&portrait=0" width="500" height="313" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Note:

- All post data should only be stored in a controller
  - (If you want to store data in a Service that's OK too)
- A page refresh will clear all added posts
- You do _not_ have to make any ajax requests or actually contact the reddit API

## Requirements

- Each post has a title, author, image, and description
  - See filters
- Each post's date/time is displayed nicely: "Yesterday at 3:09pm", "Last Thursday at 4:42am", etc.
  - You will need an [external library](https://github.com/urish/angular-moment)
- A user can upvote/downvote posts
- Posts dynamically reorder according to number of votes
- A user can create new posts
- A user cannot create a new post if any of the 4 inputs are blank (validations)
- A user can click to view existing comments on a specific post
- The number of comments is correctly pluralized
- A user can add a new comment to a specific post
- The new post form and comment forms can be toggled on and off
- A user can search through posts
- A user can sort posts by votes, date, and title

Feel free to Style / theme / rename the app to make it something you might put on your portfolio.

### !challenge
* type: project
* id: angular-curriculum-assessment-1-reddit-clone-github-url
* title: Reddit Clone Part 1

##### !question

### Question
Submit the URL to your Reddit Clone repository on GitHub
##### !end-question

##### !placeholder
Submit your github link
##### !end-placeholder

##### !explanation
An instructor will review and score this.
##### !end-explanation
### !end-challenge


## Bonus Features

- Animate posts as they are added and removed from the search results
  - http://plnkr.co/edit/qrQwv1?p=preview
  - https://divshot.com/blog/tips-and-tricks/angular-1-2-and-animate-css/
  - http://odetocode.com/blogs/scott/archive/2014/02/25/easy-animations-for-angularjs-with-animate-css.aspx
- A user can choose to sort ascending or descending
- A user can favorite posts and view all favorites in a separate tab
