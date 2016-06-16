'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('BillListCtrl', function($scope, $state) {
  	var vm = this;
    vm.$state = $state;
    console.log('list bill!!')
    //aqui creas el tu lista como el de tu compu
    //mockup de la lista de users
    vm.bill = {
      list: [
	      {
	        id: '001',
	        date: '10/05/2016',
          user: 'name01',
          customer: 'luis'
        },
	      
      ]
    };
    vm.view = {
    	edit: function(bill) {
    		console.log('edit', bill)
    	}
    }

  });
