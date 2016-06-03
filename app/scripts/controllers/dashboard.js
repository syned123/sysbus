'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('DashboardCtrl', function($scope, $state, app_manager) {

  	var vm = this;
    vm.$state = $state;
    vm.view = {
    	title: app_manager.title,
    	menu: [
	    	{label: 'Overview', url: 'overview'},
	    	{label: 'Reports', url: 'reports'},
	    	{label: 'Usuarios', url: 'users'}
	    ]
    };
  });
