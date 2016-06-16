'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('CustomerNewCtrl', function($scope, $state) {
  	var vm = this;
    vm.$state = $state;
    vm.customer = {
        id: '',
        name: '',
        lastname: '', 
        ci: ''
    	
    };
    vm.view = {
    	save: function() {
    		console.log(vm.customer)
    		vm.$state.go('customer')
    	}
    }
  });
