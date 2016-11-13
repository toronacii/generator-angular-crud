(function () {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .controller('View<%= upperCamelizeSingularName %>Controller', View<%= upperCamelizeSingularName %>Controller);

    /* @ngInject */
    function View<%= upperCamelizeSingularName %>Controller(<%= upperCamelizePluralName %>, <%= upperCamelizeSingularName %>) {

        var vm = this;

        angular.extend(vm, {

            <%= camelizedSingularName %>: {}

        });
    }

})();
