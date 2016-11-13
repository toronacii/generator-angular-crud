(function () {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .controller('<%= upperCamelizePluralName %>Controller', <%= upperCamelizePluralName %>Controller);

    /* @ngInject */
    function <%= upperCamelizePluralName %>Controller() {

        var vm = this;

        angular.extend(vm, {

        });

        activate();

        function activate() {
            
            
        }
    }

})();
