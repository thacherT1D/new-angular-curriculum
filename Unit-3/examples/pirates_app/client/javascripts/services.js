(function() {

  angular
    .module('piratesApp')
    .service('PirateService', PirateService)

    function PirateService($http) {
      const BASE_URL = '/api/pirates'

      this.getPirates = function() {
        return $http.get(BASE_URL);
      }

      this.createPirate = function(newPirate) {
        return $http.post(BASE_URL, newPirate);
      }

      this.getPirate = function(id) {
        // implement!
      }

      this.deletePirate = function(id) {
        // implement!
      }

      this.updatePirate = function(pirate) {
        // implement!
      }
    }

    PirateService.$inject = ["$http"];

})()