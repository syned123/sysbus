(function() {
  'use strict';

  angular
    .module('sysbus')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
