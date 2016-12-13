/*angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider','$locationProvider',
  function($urlRouterProvider, $stateProvider , $locationProvider ) {
    //$urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/home',
        views:{
          "viewLeft" : {templateUrl: 'templates/left.html'},
          "viewRight" : {templateUrl: 'templates/right.html'},
          "viewBottom" : {templateUrl: 'templates/bottom.html'}
        }
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })



      $locationProvider.html5Mode(true);
  }])
  */


  angular
    .module('app', [
      'ui.router'
    ])
    .config(  function($urlRouterProvider, $stateProvider , $locationProvider ) {
      $urlRouterProvider.otherwise('/angular/');
      $stateProvider
        .state('home', {
          url: '/angular/',
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
