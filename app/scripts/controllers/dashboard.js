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
	    	{label: 'Inicio', url: 'overview'},
	    	{label: 'Usuarios', url: 'users'},
        {label: 'Vehiculo', url: 'ticket'},
        {label: 'Cliente', url: 'customer'},
        {label: 'Facturas', url: 'bill'},
        {label: 'Reportes', url: 'reports'},
        {label: 'Ventas y Reservas', url: 'sales'}
	    ]
    };
  });
  