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
            fields: <%= upperCamelizePluralName %>Form.getEditFields(),
            edit: edit

        });

        function edit(form) {

            if (form.$valid) {
                
            }
        };
    }

})();
