'use strict';

/**
 * @ngdoc overview
 * @name sysbus
 * @description
 * # sysbus
 *
 * Main module of the application.
 */
angular
  .module('sysbus', [
    'ui.router',
    'ngAnimate'
  ])
  .constant('app_manager', {
    title: 'SYSBUS'
  })
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl',
          controllerAs: 'DBC'
        })
        .state('overview', {
          url: '/overview',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/overview.html'
        })
        //users
        .state('users', {
          url: '/usticket/newers',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/user/user.list.html',
          controller: 'UserListCtrl',
          controllerAs: 'ULC'//aqui coloca las iniciales de las palabras 
        })
        .state('newuser', {
          url: '/users/new',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/user/user.new.html',
          controller: 'UserNewCtrl',
          controllerAs: 'UNC'//aqui coloca las iniciales de las palabras 
        })
          .state('ticket', {
          url: '/ticket',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/ticket/ticket.list.html',
          controller: 'TicketListCtrl',
          controllerAs: 'TLC'//aqui coloca las iniciales de las palabras
        })
          .state('newticket', {
          url: '/ticket/new',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/ticket/ticket.new.html',
          controller: 'TicketNewCtrl',
          controllerAs: 'TNC'//aqui coloca las iniciales de las palabras
        })
          .state('customer', {
          url: '/customer',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/customer/customer.list.html',
          controller: 'CustomerListCtrl',
          controllerAs: 'CLC'//aqui coloca las iniciales de las palabras
        })
          .state('newcustomer', {
          url: '/customer/new',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/customer/customer.new.html',
          controller: 'CustomerNewCtrl',
          controllerAs: 'CNC'//aqui coloca las iniciales de las palabras
        })
          .state('bill', {
          url: '/bill',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/bill/bill.list.html',
          controller: 'BillListCtrl',
          controllerAs: 'BLC'//aqui coloca las iniciales de las palabras
        })
          .state('newbill', {
          url: '/bill/new',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/bill/bill.new.html',
          controller: 'BillNewCtrl',
          controllerAs: 'BNC'//aqui coloca las iniciales de las palabras
        })
          .state('reports', {
          url: '/reports',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/reports/reports.list.html ',
          
         });
          

  });
