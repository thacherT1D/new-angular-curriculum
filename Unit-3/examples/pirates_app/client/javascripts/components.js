(function() {
  
  angular
    .module('piratesApp')
    .directive('gsPirateShow', function() {
      return {
        scope: {
          pirate: '<'
        },
        templateUrl: '../views/pirates/show.html'
        // templateURL
      }
    })

})()