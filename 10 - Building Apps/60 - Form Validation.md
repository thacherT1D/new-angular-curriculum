# Form Validation with Angular

Standard: **Build an Angular application (<a href="#">W0044</a>)**

## Objectives

By the end of this lesson you will:

- Validate user input on a form
- Style form elements based on their validation state
- Display messages to the user

## Rationale

"Garbage in, garbage out" as they say.  Maintaining the integrity of the data is crucial to most applications, and keeping highly responsive UIs is often crucial to the user-friendliness of the application.

In [Defensive Design for the Web](https://www.amazon.com/Defensive-Design-Web-improve-messages/dp/073571410X) Jason Fried describes how every page should have 3 states:

- An empty state (what users see when there's no data to display)
- The default state
- The error state

When you create clear and friendly error messages, your application can help guide users towards success as opposed to frustrating them and making them want to smash their monitors over your developers heads.  This lesson provides you with the tools to create delightful error messages.

## The case for client-side validation

Form and controls provide validation services, so that the user can be notified of invalid input before submitting a form. This provides a better user experience than server-side validation alone because the user gets instant feedback on how to correct the error and better yet, you don't need to even bother going to the server if the user fails the client side validation.

## The case for redundant server-side validation

Keep in mind that while client-side validation plays an important role in providing good user experience, it can easily be circumvented and thus can not be trusted.  You'll still need to perform server-side validation to ensure that hackers don't bypass your client-side security.

## The case against builtin browser validations

Modern browsers ship with the ability to validate form fields.  Each browser differs slightly, and none provide full control over the user experience.  In addition, the validations are fairly rudimentary, and rarely cover all the cases you need.  

For that reason when performing validations in Angular, you will turn off the default HTML5 browser validations.

## Building the first form

Imagine you have a simple form like so:

```html
<form ng-submit="$ctrl.createPerson()">
  <input type="text" ng-model="$ctrl.person.firstName">
  <input type="text" ng-model="$ctrl.person.lastName">
  <input type="submit" value="Create Person">
</form>
```

By default Angular does not perform any validations.  A user can leave the inputs blank and still submit the form successfully.  HTML5 defines the `required` attribute, which you can use to declare that you'd like the browser to validate the presence of the field before submitting:

```html
<form ng-submit="$ctrl.createPerson()">
  <input type="text" ng-model="$ctrl.person.firstName" required>
  <input type="text" ng-model="$ctrl.person.lastName"  required>
  <input type="submit" value="Create Person">
</form>
```

Imagine, however, that you want:

- The First Name to be present, but it has to be at least three characters
- The Last Name does not need to be present, but if it is, it should also be at least 3 characters

You _could_ write some custom code inside the `createPerson` method to check these things, but ideally you wouldn't even trigger `createPerson` if there's invalid data.  Angular has some nifty helpers for this:

---

Before you continue, read through the following documentation regarding Angular form validations:
[http://www.ng-newsletter.com/posts/validations.html](http://www.ng-newsletter.com/posts/form-validation-with-angularjs.html)

---

## A quick walkthrough of Angular form properties, classes and descriptions

This table and the corresponding descriptions come from [this](https://scotch.io/tutorials/angularjs-form-validation-with-ngmessages) fantastic tutorial.

| Property  |  Class | Description  |
|---|---|---|
| $valid  |  ng-valid | Boolean that indicates whether an item is currently valid based on the rules you placed.  |   
| $invalid  |  ng-invalid |  Boolean that indicates whether an item is currently invalid based on the rules you placed. |   
|  $pristine |  ng-pristine |  Boolean that's true if the form/input has not been used yet. |   
|  $dirty |  ng-dirty |   Boolean that's true if the form/input has been used. |   
|  $touched |  ng-touched |  Boolean that's true if the input has been blurred |   

## Accessing and targeting form and inputs

In order to use angular form validation you have to abide by the following rules

- You must give the form a name attribute (let's imagine a name attribute = "firstForm")
	- You can then do things like `firstForm.$valid` (which returns true or false)
- You have to put an ng-model on each of the inputs (remember to use the dot!)

A couple extra things:
- If you do not want to use the standard HTML5 validations you add `novalidate` as an attribute to the form
- To access angular properties on the inputs you use the syntax `formName.inputName.angularProperty`.
  + You can then do things like `firstForm.username.$valid` or `firstForm.username.$error` (to see an object with any errors)

## Styling the forms and displaying error messages:

It would be much nicer if you could display a message to the user and style it accordingly. You are going to be using bootstrap as it gives us some nice classes for validation (you can read more about them [here](http://getbootstrap.com/css/#forms-control-validation))

In order to add a class based off of a condition you are going to be using the built in `ng-class` directive (docs are [here](https://docs.angularjs.org/api/ng/directive/ngClass). There are a few ways to use `ng-class`, the way you will be using it is as follows (pay close attention to the quotes!)

`ng-class="{ 'class-name' : expression, 'another-class': another expression }".`

An example of this would be: `"{ 'has-error' : sampleForm.username.$invalid }"`

But how about showing an error message? To do this you are going to be using the `ng-show` directive which works like this:

`ng-show="condition"`

An example of this would be:
`<span ng-show="sampleForm.username.$invalid">Username is invalid</span>`

## Visualization

If you would like a great example of how these form classes and properties work (99% borrowed from scotch.io) - check out [these](http://sales-person-licks-61176.bitballoon.com) validation tables


## Questions

#### Exercise - questions + building your own form and validations

First, answer the following questions

- When does a form/input have a property of $valid? What class accompanies this property?
- When does a form/input have a property of $invalid? What class accompanies this property?
- When does a form/input have a property of $pristine? What class accompanies this property?
- When does a form/input have a property of $dirty? What class accompanies this property?
- When does a form/input have a property of $touched? What class accompanies this property?
- What does blurred mean? (research the `blur` event)

#### For the next set of questions, assume that you have a form with a name="quizForm"

- Create a text input with a name of "question" and give it a validation of "required". If it is $valid add a class of "valid"
- For your text input with a name of question, add a paragraph tag with the text "please enter a valid question" if the input is not valid
- Create a text input with a name of "answer" and give it a validation of "required" and a minimum length of 4 characters. If it is $valid and not $pristine add a class of "correct".
- How would you access all of the errors (in an object) for an input with a name of `quizForm.username`
- What validations would you add in an input to make sure that there is a minimum length of 4 and a maximum length of 20
- What validation would you add in an input to make sure that only numbers between 1 and 5 are a valid input (use regular expressions for this!)

## Exercise - styling the form and adding some error messages!

Now that you have a solid understanding of these properties/classes, let's build another form with an action of "#" and four text inputs for a username, password, email and zip code. Your form should validate that the username and password are both between 3 and 12 characters long. It should also make sure that the email is a valid email and that the zip code is a five digit number (use ng-pattern and regular expressions for this!).

Now that you have an idea of how to style and display error messages, let's do the following

- include bootstrap for styling
- display error messages if inputs are invalid (write whatever you would like for the error message)
- add a class of `has-error` if the validation fails
- add a class of `has-success` if the validation passes
- only display the error message/styling if the user has typed something
- when the form is submitted, collect the inputs and add them to an array called `users` (this will be done in your controller)
  + remember that the default behavior for the form submission is a page refresh - you will need to prevent this.
  + make sure to clear all the form values and validations (you should use a method from [here](https://docs.angularjs.org/api/ng/type/form.FormController) to do that )
  + display the array of users (each one should be an object) at the top of your form (see the gif below for guidance).

Your form should work like this:

[![https://gyazo.com/a6a93b98ada81f54140052956cea2cb0](https://i.gyazo.com/a6a93b98ada81f54140052956cea2cb0.gif)](https://gyazo.com/a6a93b98ada81f54140052956cea2cb0)

## Bonus - refactor using ngMessages

The HTML is getting a bit messy, it would be nice to have an easier way to deal with error messages, that's where ng-messages comes in. Walk through [this](https://scotch.io/tutorials/angularjs-form-validation-with-ngmessages) or [this](http://www.yearofmoo.com/2014/05/how-to-use-ngmessages-in-angularjs.html) tutorial and refactor your form to use ng-messages.

## Additional Resources

- [https://docs.angularjs.org/guide/forms](https://docs.angularjs.org/guide/forms)
- [https://docs.angularjs.org/api/ng/directive/input](https://docs.angularjs.org/api/ng/directive/input)
