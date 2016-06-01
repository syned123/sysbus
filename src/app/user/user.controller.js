
(function() {
  'use strict';

  angular
    .module('sysbus')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController() {
    var vm = this;


    vm.navActive='users';
    vm.users= {
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
    }
    
  }
})();
