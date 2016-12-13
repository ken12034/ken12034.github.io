angular
  .module('app', [
    'ui.router'
  ])
  .config(  function($urlRouterProvider, $stateProvider , $locationProvider ) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          views:{
            "viewLeft" : {templateUrl: 'angular/templates/left.html'},
            "viewRight" : {templateUrl: 'angular/templates/right.html'},
            "viewBottom" : {templateUrl: 'angular/templates/bottom.html'}
          }
        })
        .state('about', {
          url: '/angular/about',
          templateUrl: 'angular/templates/about.html'
        })
     $locationProvider.html5Mode(true);
  })
