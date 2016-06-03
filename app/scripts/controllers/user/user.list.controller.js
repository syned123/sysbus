'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('UserListCtrl', function($scope, $state) {
  	var vm = this;
    vm.$state = $state;
    console.log('list users!!')
    //aqui creas el tu lista como el de tu compu
    vm.users = {
      list: [
	      {
	        id: '001',
	        name: 'name01',
	        lastname: 'lastname01',
	        username: 'name01',
	        hashpassword: 'name01' 
	      },
	      {
	        id: '002',
	        name: 'name02',
	        lastname: 'lastname02',
	        username: 'name02',
	        hashpassword: 'name02' 
	      },
	      {
	        id: '003',
	        name: 'name03',
	        lastname: 'lastname03',
	        username: 'name03',
	        hashpassword: 'name03' 
	      },
	      {
	        id: '004',
	        name: 'name04',
	        lastname: 'lastname04',
	        username: 'name04',
	        hashpassword: 'name04' 
	      }
      ]
    };

  });
