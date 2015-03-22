/* El ng-app="ionicApp" que agregamos al body */ 
angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
/* Menu por defecto */
  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
/* Este es el link de inicio */    
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
/* Este es el link de texto */    
    .state('eventmenu.Texto', {
      url: "/Texto",
      views: {
        'menuContent' :{
          templateUrl: "templates/Texto.html"
        }
      }
    })
/* Si hay una ruta no agregada dirigira a home*/
  $urlRouterProvider.otherwise("/event/home");
})

/* Con esto se abre el menu */
.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
