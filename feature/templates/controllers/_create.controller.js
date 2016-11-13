(function () {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .controller('Create<%= upperCamelizeSingularName %>Controller', Create<%= upperCamelizeSingularName %>Controller);

    /* @ngInject */
    function Create<%= upperCamelizeSingularName %>Controller($state, <%= upperCamelizePluralName %>, <%= upperCamelizePluralName %>Form) {

        var vm = this;

        angular.extend(vm, {

            <%= camelizedSingularName %>: {},
            fields: <%= upperCamelizePluralName %>Form.getCreateFields(),
            create: create

        });

        function create(form) {

            if (form.$valid) {

                
            }
        };
    }

})();
