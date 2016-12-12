angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    /*$urlRouterProvider.otherwise('/home');*/
    $stateProvider
      .state('home', {
        url: '/',
        views:{
          "viewLeft" : {templateUrl: 'templates/left.html'},
          "viewRight" : {templateUrl: 'templates/right.html'}
        }
        /*templateUrl: 'templates/home.html',
        controller: 'homeCtrl'*/
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })
  }])
