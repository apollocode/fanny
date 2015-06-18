(function() {
  angular.module('habitac').config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          authenticated: false,
          layout: "landing"
        })
        .when('/composition_logement', {
          templateUrl: 'views/wizard/composition.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/toit', {
          templateUrl: 'views/wizard/roof.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/sols_exterieurs', {
          templateUrl: 'views/wizard/outdoor.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/facade', {
          templateUrl: 'views/wizard/facade.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/fenetres_et_entree', {
          templateUrl: 'views/wizard/windows_entrances.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/cloisons', {
          templateUrl: 'views/wizard/interior_design.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/portes', {
          templateUrl: 'views/wizard/doors.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/isolation', {
          templateUrl: 'views/wizard/isolation.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/sols_interieurs', {
          templateUrl: 'views/wizard/flooring.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/finition_murs', {
          templateUrl: 'views/wizard/walls.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/plafonds', {
          templateUrl: 'views/wizard/ceilings.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/elements', {
          templateUrl: 'views/wizard/elements.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/electricite', {
          templateUrl: 'views/wizard/electricity.html',
          authenticated: false,
          layout: "wizard"
        })
        .when('/controle_temperature', {
          templateUrl: 'views/wizard/temp_control.html',
          authenticated: false,
          layout: "wizard"
        })




        .otherwise({
          redirectTo: '/',
          authenticated: true,
          layout: "application"
        });

      $locationProvider.html5Mode(true);
    }
  ]);
})();