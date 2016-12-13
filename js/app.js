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
            "viewLeft" : {templateUrl: 'templates/left.html'},
            "viewRight" : {templateUrl: 'templates/right.html'},
            "viewBottom" : {templateUrl: 'templates/bottom.html'}
          }
        })
        .state('about', {
          url: '/about',
          templateUrl: 'templates/about.html'
        })
     $locationProvider.html5Mode(true);
  })
