(function () {
  'use strict';

  angular.module('habitac').controller('WizardInitCtrl', ['$scope', "$location", "wizardService", wizard]);

  function wizard ($scope, $location, wizardService) {
    $scope.choose_path = choose_path;

    function choose_path(){
      // To Do: traitement particulier pour certains tunnels
      $scope.steps = wizardService.setSteps($scope.path);
      $scope.wizard = { path: $scope.path,
                        state: initializeWizardState(),
                        steps: $scope.steps
                      };
      wizardService.setWizardState($scope.wizard);

      var start = $scope.steps[0];
      $location.path('/' + start);
    }

    function initializeWizardState(){
      var state = {};
      angular.forEach($scope.steps, function(step){
        state[step] = { answers: {},
                        started: false, // not used so far but something like that will take shape when we add section forms
                        completed: false // not used so far but something like that will take shape when we add section forms
                      };
      });
      return state;
    }


  } // function wizard()

})();