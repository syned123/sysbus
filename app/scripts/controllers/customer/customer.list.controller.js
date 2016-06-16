'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('CustomerListCtrl', function($scope, $state) {
  	var vm = this;
    vm.$state = $state;
    console.log('list customer!!')
    //aqui creas el tu lista como el de tu compu
    //mockup de la lista de users
    vm.customer = {
      list: [
	      {
	        id: '001',
	        name: 'luis',
          lastname: 'perez lopez', 
          ci: '10203040'
        },
	      
      ]
    };
    vm.view = {
    	edit: function(customer) {
    		console.log('edit', customer)
    	}
    }

  });
