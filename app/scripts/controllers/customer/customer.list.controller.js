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
    vm.customers = {
      list: [
	      {
	        id: '001',
	        nombre: 'luis',
          apellido_paterno: 'perez',
          apellido_materno: 'lopez',
          ci: '10203040',
          
	      },
	      {
	        id: '002',
	        placa: '789-ASD',
	        Colour: 'verde' 
	      }
      ]
    };
    vm.view = {
    	edit: function(user) {
    		console.log('edit', user)
    	}
    }

  });
