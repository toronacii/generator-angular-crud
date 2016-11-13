(function () {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .controller('Create<%= upperCamelizeSingularName %>Controller', Create<%= upperCamelizeSingularName %>Controller);

    /* @ngInject */
    function Create<%= upperCamelizeSingularName %>Controller($q, $state, OData, toastr, <%= upperCamelizePluralName %>Form) {

        var vm = this;

        var <%= camelizedSingularName %> = new OData.<%= upperCamelizePluralName %>();

        angular.extend(vm, {

            <%= camelizedSingularName %>: angular.extend(<%= camelizedSingularName %>, {
                //add default properties here
            }),
            fields: <%= upperCamelizePluralName %>Form.getCreateFields(),
            create: create,
            createAndRedirect: createAndRedirect

        });

        activate();

        function create(form) {

            if (form.$valid) {

                return vm.<%= camelizedSingularName %>.$save();
            }

            toastr.error("Error en campos del formulario");

            return $q.reject();
        }

        function activate() {

        }

        function createAndRedirect(form) {

            create(form).then(function() {

                $state.go('<%= moduleName %>.list', {}, { reload: true })
                
            });
        }
    }

})();
