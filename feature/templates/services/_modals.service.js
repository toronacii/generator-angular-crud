(function() {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .factory('Modals<%= upperCamelizeSingularName %>', <%= upperCamelizeSingularName %>Modals);

    /* @ngInject */
    function <%= upperCamelizeSingularName %>Modals($uibModal) {

        return {
            create: create
        }

        function create() {

            return $uibModal.open({
				templateUrl: '<%= path %>/modals/create-<%= slugifiedSingularName %>-modal.html',
				controller: 'Create<%= upperCamelizeSingularName %>ModalController as vm',
				//size: 'lg'
			}).result;
        }

    }

})();