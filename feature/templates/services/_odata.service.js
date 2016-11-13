(function() {

    'use strict';

    angular
        .module('app.util.odata')
        .factory('OData<%= upperCamelizePluralName %>', OData<%= upperCamelizePluralName %>)
        .run(config);

    /** @ngInject */
    function OData<%= upperCamelizePluralName %>($odataresource, ENDPOINT) {
        var params = {
            <%= camelizedSingularName %>Id: '@id'
        };

        var API_URL = ENDPOINT + '/<%= upperCamelizeSingularName %>/:<%= camelizedSingularName %>Id';

        return $odataresource(API_URL, params, {}, { odatakey : 'Id'});
    }

    /** @ngInject */
    function config(OData, OData<%= upperCamelizePluralName %>) {

        OData['<%= upperCamelizePluralName %>'] = OData<%= upperCamelizePluralName %>;
    }

})();