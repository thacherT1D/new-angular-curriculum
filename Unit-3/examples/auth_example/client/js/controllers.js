app.controller("SignupController", function($scope, UserService, $location){

  $scope.signup = function(user){
    UserService.signup(user).then(function(data){
      UserService.setCurrentUser(data);
      $location.path('/home');
    }).catch(function(data){
      $scope.errors = data.data;
      $scope.user = {};
    });
  };
});

app.controller("LoginController", function($scope, UserService, $location, $window){
  $scope.login = function(user){
    UserService.login(user).then(function(data){
      UserService.setCurrentUser(data);
      $location.path('/home');
    }).catch(function(data){
      $scope.errors = data.data;
      $scope.user = {};
    });
  };
});

app.controller("UserController", function($scope, $location, UserService, user,currentUser, $window){
  $scope.currentUser = currentUser;
  $scope.user = user;
});

app.controller("EditController", function($scope, $location, UserService, user,currentUser, $window){
  $scope.currentUser = currentUser;
  $scope.user = user;
  $scope.editUser = function(user){
    UserService.editUser(user).then(function(data){
      $window.localStorage.removeItem("user");
      $window.localStorage.setItem("user",JSON.stringify(data.data));
      $location.path('/home');
    }).catch(function(err){
      $scope.errors = "Looks like someone already has that username!";
      $scope.user = {};
    });
  };

  $scope.removeUser = function(user){
    UserService.removeUser(user).then(function(data){
      $window.localStorage.clear();
      $location.path('/login');
    }).catch(function(err){
      $scope.errors = err;
    });
  };
});

app.controller("HomeController", function($scope,currentUser,users){
  $scope.users = users;
  $scope.currentUser = currentUser;
});