(function () {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .controller('List<%= upperCamelizePluralName %>Controller', List<%= upperCamelizePluralName %>Controller);

    /* @ngInject */
    function List<%= upperCamelizePluralName %>Controller(DTColumnDefBuilder, <%= upperCamelizePluralName %>Form, All<%= upperCamelizePluralName %>) {

        var vm = this;

        angular.extend(vm, {

            <%= camelizedPluralName %>: [],
            dtColumnDefs: [],
            search: {
                params: {},
                fields: <%= upperCamelizePluralName %>Form.getSearchFields(),
                doSearch: doSearch
            }

        });

        active();

        function doSearch(form) {

            
        };

        function active() {


        }
    }

})();
