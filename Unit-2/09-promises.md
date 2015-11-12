# Deferreds and Promises

In jQuery you saw promises often.  The most common use case was an ajax call.  For example, you might have some code like this in jQuery:

```js
$.get("/puppies").done(function() {
  // do something here
}).fail(function() {
  // do something here
});
```

The object returned from the `$.get` method is a promise that can then be chained to other method calls when certain events take place.  You can think of a promise as a more generalized way of implementing a callback.

Another popular library for promises is [q](https://github.com/kriskowal/q)

**EXERCISE:** Read the docs for [the q promise library](https://github.com/kriskowal/q).  Why would you prefer to use a promise over a callback?  What advantage does it have?

#### Creating a Service With Dependencies

Your service could also have dependencies. We have seen the `$http` service. Let's talk about the `$q` service briefly. It's a good way to allow controllers to fetch data from services that may (or may not) need to fetch that data from an external source. In the follow example, we'll cache the OMDB response for a search term, and avoid making calls to the API for the same data more than once. Our controller can treat the response the same way in both cases, it doesn't care where the data comes from, only that the search function will return a promise.

```js
app.controller('OmdbController', ['$scope', 'omdbapi', function($scope, omdbapi) {
  $scope.term = '';
  
  $scope.queryOmdb = function() {
    omdbapi.search($scope.term).then(function(data) {
      $scope.results = data;
    })
  }
}]);

app.factory('omdbapi', ["$http", "$q", function($http, $q) {
  var omdbservice = {};
  var baseUrl = "http://www.omdbapi.com/?r=json&plot=long&s=";

  var cachedMovies = {};

  omdbservice.search = function(term) {
    var url = baseUrl + encodeURIComponent(term);

    var deferred = $q.defer();

    if (cachedMovies[term]) {
      deferred.resolve(cachedMovies[term]);
    } else {
      $http.get(url).success(function(data) {
        cachedMovies[term] = data.Search;
        deferred.resolve(cachedMovies[term]);
      }).error(function() {
        deferred.reject("Error!")
      });
    }

    return deferred.promise;
  }

  return omdbservice;
}]);
```

**EXERCISE:** Use the [Giphy Api](https://github.com/Giphy/GiphyAPI) to add a feature to your app.  Whenever a new user is submitted, do a search for a gif using the person's name.  If you get a result, save that along with the users name email and phone number.  Show the user's gif on the show page.  HINT: you will NOT want to use the embedded url from the giphy search resutls.
