'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('TicketNewCtrl', function($scope, $state) {
  	var vm = this;
    vm.$state = $state;
    vm.ticket = {
        id: '',
        placa: '',
        Colour: '' 
    	
    };
    vm.view = {
    	save: function() {
    		console.log(vm.user)
    		vm.$state.go('ticket')
    	}
    }
  });
