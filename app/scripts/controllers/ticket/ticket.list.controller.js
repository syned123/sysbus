'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('TicketListCtrl', function($scope, $state) {
  	var vm = this;
    vm.$state = $state;
    console.log('list ticket!!')
    //aqui creas el tu lista como el de tu compu
    //mockup de la lista de users
    vm.tickets = {
      list: [
	      {
	        id: '001',
	        placa: '345-GHJ',
	        Colour: 'blanco' 
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
