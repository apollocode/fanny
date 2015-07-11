(function () {
  'use strict';

  angular.module('habitac').controller('MainWizardCtrl', ['$scope', "$location", "wizardService", wizard]);

  function wizard ($scope, $location, wizardService) {
    // general informations about path chosen and steps
    $scope.currentStep = $location.path().slice(1);
    $scope.steps = wizardService.getWizardState().steps;
    $scope.path = wizardService.getWizardState().path;
    // Interface configuration variables
    var stepDetails = wizardService.stepDetails($scope.path, $scope.currentStep)
    $scope.mandatorySection = stepDetails.mandatory;
    $scope.sectionHeadline = stepDetails.headline;
    if ($scope.mandatorySection) { $scope.showSection = true; };


    $scope.nextOrShow = nextOrShow;



    function nextOrShow(){
      // I'm expecting there will be stuff to do if showSection, otherwise refactor
      if ($scope.showSection) {
      } else {
        var nextSection = $scope.steps[$scope.steps.indexOf($scope.currentStep) + 1];
        $location.path('/' + nextSection);
      }
    }


  } // function wizard()

})();
