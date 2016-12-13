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
            "viewLeft" : {templateUrl: 'web/templates/left.html',
              controller: 'expertiseCtrl'
            },
            "viewRight" : {templateUrl: 'web/templates/right.html'},
            "viewBottom" : {templateUrl: 'web/templates/bottom.html',
               controller: 'boxCtrl'
            }
          }
        })
        .state('about', {
          url: '/web/about',
          templateUrl: 'web/templates/about.html'
        })

        $locationProvider.html5Mode(true);


    })
