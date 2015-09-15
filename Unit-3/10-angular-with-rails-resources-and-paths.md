#Angular And Rails: Resources, HTML5 Pushstate

The lesson will build off of [this solution](https://github.com/gSchool/contacts-app-angular-rails/tree/solutionBasicSetup) to the contacts app.

## Resources

In the solution to the angular contacts app, the `$resource` was used instead of the `$http` service.  The `$resource` service is a higher level service that tries to make dealing with restful apis easier.  First take a look at the code in `app/assests/javascript/angular/services.js`:

```js
contactsApp.service('Contact', ['$resource', function($resource) {
  return $resource(
    "/contacts/:id.json",
    {id: "@id"},
    {update: {method: "PUT"}} 
  );
}]);
```

This defines a service called Contact that will create a new resource to talk to the contact api.

**EXERCISE**

Look at the angular docs on the [$resource service](https://docs.angularjs.org/api/ngResource/service/$resource).  What does each parameter in this example do?  What happens if you replace the `{id: "@id"}` line with `null`?  What does removing `{update: {method: "PUT"}}` do?  Both parameters are necessary for our example.

One of the advantages of the `$resource` service is that it helps to eliminate callback code.  From the angular docs:


>It is important to realize that invoking a $resource object method immediately returns an empty reference (object or array depending on isArray). Once the data is returned from the server the existing reference is populated with the actual data. This is a useful trick since usually the resource is assigned to a model which is then rendered by the view. Having an empty object results in no rendering, once the data arrives from the server then the object is populated with the data and the view automatically re-renders itself showing the new data. This means that in most cases one never has to write a callback function for the action methods.


For example, in order to get all of the contacts for the inital page load, this is all the controller code that is needed:

```js
$scope.contactData = Contact.query();
```

The `contactData` can then be used in the view. Whenever the query method populates `contactData` with data from the service call, the view will be updated thanks to two way data binding.  This is great because you don't have to write the URL of the api in many places, and you don't have to write callback code.

Any service call that you want to make that changes the state of the server is a little different.  For example, here is the create method:

```js
  $scope.createContact = function(){
    var contact = new Contact($scope.contact);
    contact.$save().then(function() {
      $scope.contactData.push(contact);
      $scope.contact.name = "";
      $scope.contact.email = "";
      $scope.contact.phone = "";
    });
  };
```

Notice that we are creating a new instance of a Contact resource and then assigning it to a variable called contact.  We are doing this in order to call the `$save` method.  This method actually makes the service call for us to update the api.

## HTML5 Pushstate

HTML5 Pushstate is a new browser feature that allows programmatic access to the history of the browser.  You can read more about the details of the feature on [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

Angular supports modifying the browser's history through the `$locationProvider`.

The goal of this section is to get links working in our contacts app without using the `#` symbol.  To get the links to work, we need both the angular app and the rails app to work together.  First, let's add html5mode support to angular.

**EXERCISE**

Add html5mode support to your angular router.  If you are getting an immediate error after enabling html5mode, look into the base tag.  Make sure you have added it.

**EXERCISE**

Why is adding html5 pushState support not enough to get links to work?  For example if I send a link to `http://www.mydomain.com/contacts/1`, the show page should be displayed.  Why doesn't this work if only the angular code supports pushState?  **HINT**: When does angular get a chance to take over the view?

![](https://cms-assets.tutsplus.com/uploads/users/12/posts/22160/preview_image/html5.jpg)

Now that you have the router working, we need to add some code on the rails side to support the links as well.  Open up `app/controllers/contacts_controller.rb` and add a before action that calls the `html_layout` method:

```ruby
class ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :update, :destroy]
  before_action :html_layout

  // Code left out

end
```

Remember we created the `html_layout` method in `app/controllers/application_controller.rb`.  The method is inherited by all controllers that inherit from the `ApplicaitonController`.  Earlier we included the `html_layout` method as a before action for the `StaticsController`.  As a reminder, the method looks like this:

```ruby
  protected
    def html_layout
      # check the request format
      if request.format.symbol == :html
        render "layouts/application"
      end
    end
```

**EXERCISE**

Now that the `before_action` is in the `ContactsController`, try copying some links from your app and reloading them on the page.  Is everything working?  You may have to change some links from `#` to normal links on your page.  Try using the browser's back button.  Does that work as expected?  Make sure you get everything working as if your angular app were a normal rails CRUD app.

**EXERCISE**

Is the `StaticsController` needed anymore?  Figure out how to remove it from the app and still have everything working.
