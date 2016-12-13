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
      $urlRouterProvider.otherwise('/web/');
      $stateProvider
        .state('home', {
          url: '/web/',
          views:{
            "viewLeft" : {templateUrl: 'web/templates/left.html'},
            "viewRight" : {templateUrl: 'web/templates/right.html'},
            "viewBottom" : {templateUrl: 'web/templates/bottom.html'}
          }
        })
        .state('about', {
          url: '/web/about',
          templateUrl: 'web/templates/about.html'
        })

        $locationProvider.html5Mode(true);


    })
