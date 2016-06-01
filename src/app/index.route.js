(function() {
  'use strict';

  angular
    .module('sysbus')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('user', {
        url: '/users',
        templateUrl: 'app/user/user.html',
        controller: 'UserController',
        controllerAs: 'user'
      })
      .state('client', {
        url: '/client',
        templateUrl: 'app/client/client.html',
        controller: 'ClientController',
        controllerAs: 'client'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
