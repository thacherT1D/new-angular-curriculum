(function() {
  
  angular 
    .module('piratesApp')
    .controller('PiratesController', PiratesController)
    .controller('NewPirateController', NewPirateController)
    
    function PiratesController(PirateService) {
      var vm = this;
      PirateService.getPirates().then(function(res) {
        vm.pirates = res.data;
      });
    }

    function NewPirateController(PirateService, $location) {
      var vm = this;
      vm.pirate = {};

      vm.addPirate = function(newPirate) {
        var req = { pirate: newPirate };
        PirateService.createPirate(req).then(function(res) {
          $location.path('/pirates');
        });
      }
    }

    PiratesController.$inject = ['PirateService'];
    NewPirateController.$inject = ['PirateService', '$location'];

})()