(function() {
  'use strict';

  angular
    .module('sysbus')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '=',
          activeNav: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment,appname) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();*/
      vm.appname=appname;
      vm.listOption=[
      {
        title: 'Home',
        url:'#/',
        key: 'home'

      },
      {
        title: 'Usuarios',
        url: '#/users',
        key: 'users'
      },
      {
        title: 'Clientes',
        url: '#/client',
        key: 'client'
      }
      ];
    }
  }

})();
