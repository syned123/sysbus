'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('BillNewCtrl', function($scope, $state) {
  	var vm = this;
    vm.$state = $state;
    vm.bill = {
        id: '',
        date: '',
        user: '',
        customer: ''
    	
    };
    vm.view = {
    	save: function() {
    		console.log(vm.bill)
    		vm.$state.go('bill')
    	}
    }
  });
