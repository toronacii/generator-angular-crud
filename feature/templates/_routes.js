(function() {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {

        $stateProvider

			.state('<%= moduleName %>', {
                url: '/<%= slugifiedName %>',
                abstract: true,
                controller: '<%= upperCamelizePluralName %>Controller',
                controllerAs: 'vm'
			})

            .state('<%= moduleName %>.list', {
                url: '',
				views: {
					'content@app.private': {
						templateUrl: '<%= path %>/views/list-<%= slugifiedName %>.html',
						controller: 'List<%= upperCamelizePluralName %>Controller as vm'
					}
				},
				resolve: {
					All<%= upperCamelizePluralName %>: All<%= upperCamelizePluralName %>
				}
			})

            .state('<%= moduleName %>.create', {
                url: '/create',
				views: {
					'content@app.private': {
						templateUrl: '<%= path %>/views/create-<%= slugifiedSingularName %>.html',
						controller: 'Create<%= upperCamelizeSingularName %>Controller as vm'
					}
				}
			})

            .state('<%= moduleName %>.view', {
                url: '/:<%= camelizedSingularName %>Id',
				views: {
					'content@app.private': {
						templateUrl: '<%= path %>/views/view-<%= slugifiedSingularName %>.html',
						controller: 'View<%= upperCamelizeSingularName %>Controller as vm'
					}
				},
				resolve: {
					<%= upperCamelizeSingularName %>: <%= upperCamelizeSingularName %>
				}
			})

            .state('<%= moduleName %>.edit', {
                url: '/:<%= camelizedSingularName %>Id/edit',
				views: {
					'content@app.private': {
						templateUrl: '<%= path %>/views/edit-<%= slugifiedSingularName %>.html',
						controller: 'Edit<%= upperCamelizeSingularName %>Controller as vm'
					}
				},
				resolve: {
					<%= upperCamelizeSingularName %>: <%= upperCamelizeSingularName %>
				}
			})
    }

	/* @ngInject */
	function All<%= upperCamelizePluralName %>(OData<%= upperCamelizePluralName %>) {

		return OData<%= upperCamelizePluralName %>.odata().query()
	}

	/* @ngInject */
	function <%= upperCamelizeSingularName %>($stateParams, OData<%= upperCamelizePluralName %>) {

		return OData<%= upperCamelizePluralName %>.odata().get($stateParams.<%= camelizedSingularName %>Id)
	}

})();
