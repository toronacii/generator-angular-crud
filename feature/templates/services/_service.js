(function() {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .factory('<%= upperCamelizePluralName %>', <%= upperCamelizePluralName %>);

    /* @ngInject */
    function <%= upperCamelizePluralName %>() {

        var service = {
            
        };

        return service;

    }

})();
