(function () {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .controller('Edit<%= upperCamelizeSingularName %>Controller', Edit<%= upperCamelizeSingularName %>Controller);

    /* @ngInject */
    function Edit<%= upperCamelizeSingularName %>Controller($state, <%= upperCamelizePluralName %>, <%= upperCamelizePluralName %>Form, <%= upperCamelizeSingularName %>) {

        var vm = this;

        angular.extend(vm, {

            <%= camelizedSingularName %>: {},
            form: {},
            fields: <%= upperCamelizePluralName %>Form.getEditFields(disabled),
            save: save

        });

        function save(form) {

            if (form.$valid) {
                
            }
        };
    }

})();
