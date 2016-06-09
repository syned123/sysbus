'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('UserNewCtrl', function($scope, $state) {
  	var vm = this;
    vm.$state = $state;
    vm.user = {
    	id: '',
        name: '',
        lastname: '',
        username: '',
        hashpassword: '',
        confirm: ''
    };
    vm.view = {
    	save: function() {
    		console.log(vm.user)
    		vm.$state.go('users')
    	}
    }
  });
