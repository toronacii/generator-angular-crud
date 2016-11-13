(function () {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .controller('Edit<%= upperCamelizeSingularName %>Controller', Edit<%= upperCamelizeSingularName %>Controller);

    /* @ngInject */
    function Edit<%= upperCamelizeSingularName %>Controller($state, OData, <%= upperCamelizePluralName %>Form, <%= upperCamelizeSingularName %>) {

        var vm = this;

        angular.extend(vm, {

            <%= camelizedSingularName %>: <%= upperCamelizeSingularName %>,
            form: {},
            fields: <%= upperCamelizePluralName %>Form.getEditFields(),
            edit: edit,
            editAndRedirect: editAndRedirect

        });

        activate();

        function edit(form) {

            if (form.$valid) {
                
                return vm.<%= camelizedSingularName %>.$update();
            }

            toastr.error("Error en campos del formulario");

            return $q.reject();
        }

        function activate() 
        {

        }

        function editAndRedirect(form) {

            edit(form).then(function() {

                $state.go('<%= moduleName %>.list', {}, { reload: true })
            })
        }
    }

})();
