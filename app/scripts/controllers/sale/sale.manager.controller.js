'use strict';

/**
 * @ngdoc function
 * @name sysbus.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of sysbus
 */
angular.module('sysbus')
  .controller('SalesManagerCtrl', function($scope, $state, app_manager) {

  	var vm = this;
    vm.$state = $state;
    vm.view = {
      selectField: function(field, status) {
        console.log(field, status);
        if (vm.fieldsCache.selected && field && field.field == vm.fieldsCache.selected.field) {
          vm.fieldsCache.selected = {};
          delete vm.fieldsCache.reserved[field.field];
          delete vm.fieldsCache.sold[field.field];
        }
        if (field && status) {
          if (status == 'sold') {
            vm.fieldsCache.sold[field.field] = true;
          }else if (status == 'reserved') {
            vm.fieldsCache.reserved[field.field] = true;
          }
        }
      }
    }
    vm.fieldsCache = {
      reserved: {},
      selected: {},
      sold: {}
    }
  });
  