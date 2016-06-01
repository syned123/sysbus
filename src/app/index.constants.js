/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('sysbus')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('appname','SYSBUS');
})();
