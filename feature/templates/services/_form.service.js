(function() {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .factory('<%= upperCamelizePluralName %>Form', <%= upperCamelizePluralName %>Form);

    /* @ngInject */
    function <%= upperCamelizePluralName %>Form() {

        return {
           getCreateFields: getCreateFields,
           getEditFields: getEditFields,
           getSearchFields: getSearchFields
        }

        function getCreateFields() {

            return [
                /*{
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Name:',
                        disabled: disabled,
                        required: true
                    }
                }*/
            ]
        }

        function getSearchFields() {
            return [

            ];
        }

        function getEditFields() {

            return [
                
            ];
        }

    }

})();
