(function () {
    'use strict';

    angular
        .module('<%= moduleName %>')
        .controller('List<%= upperCamelizePluralName %>Controller', List<%= upperCamelizePluralName %>Controller);

    /* @ngInject */
    function List<%= upperCamelizePluralName %>Controller($scope, $compile, $filter, _, swal, DTOptionsBuilder, DTColumnDefBuilder, OData, <%= upperCamelizeSingularName %>Modals, <%= upperCamelizePluralName %>Form) {

        var vm = this;

        angular.extend(vm, {
            showCreateModal: showCreateModal,
            showDeleteModal: showDeleteModal,
            search: {
                params: {},
                fields: <%= upperCamelizePluralName %>Form.getSearchFields(),
                doSearch: doSearch
            },
            dtInstance: {}

        });

        activate();

        function doSearch(form) {

            vm.dtInstance.changeData(_get<%= upperCamelizePluralName %>());
        }

        function showCreateModal() {
            <%= upperCamelizeSingularName %>Modals.create()
                .then(function(<%= camelizedSingularName %>) {

                    vm.dtInstance.changeData(get<%= upperCamelizePluralName %>())
                });
        }

        function showDeleteModal(id) {
            
            swal({
                title: "¿Estas Seguro?",
                text: "¿Deseas eliminar este <%= camelizedSingularName %>?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Eliminar",
                closeOnConfirm: false,
                html: false
            }, function() {

                var <%= camelizedSingularName %> = new OData.<%= upperCamelizePluralName %>();
                
                <%= camelizedSingularName %>.Id = id;
                <%= camelizedSingularName %>.$delete(function() {
                    
                    vm.dtInstance.changeData(get<%= upperCamelizePluralName %>());
                    swal('<%= upperCamelizeSingularName %> eliminado!');
                })
            })
        }

        function activate() {

            vm.dtOptions = DTOptionsBuilder
                            .fromFnPromise(get<%= upperCamelizePluralName %>)
                            .withBootstrap()
                            .withPaginationType('full_numbers') 
                            .withOption('createdRow', function(row, data, dataIndex) {

                                    $compile(angular.element(row).contents())($scope);
                            });

            vm.dtColumns = [
                //DTColumnBuilder.newColumn('Code').withTitle('Codigo'),
                DTColumnBuilder.newColumn(null).withTitle('Acciones').notSortable().renderWith(_renderActionButtons)
            ];
        }

        function get<%= upperCamelizePluralName %>(predicate) {

            var clausules = OData.<%= upperCamelizeSingularName %>
                    .odata();
                    /*expands */

            if (predicate) {

                clausules = clausules.filter(predicate);
            }

            return  clausules
                    .query()
                    .$promise
                    .then(function (<%= camelizedPluralName %>) {

                        return _.map(<%= camelizedPluralName %>, function (<%= camelizedSingularName %>) {

                            return {
                                Id: <%= camelizedSingularName %>.Id,
                                //others properties
                            }
                        });

                    });
        }

        function _renderActionButtons(data, type, full, meta) {

                return  (
                    '<button class="btn btn-warning btn-sm" ui-sref="<%= moduleName %>.edit({ <%= camelizedSingularName %>Id: {0} })">' +
                    '   <i class="fa fa-edit"></i>' +
                    '</button>&nbsp;' +
                    '<button class="btn btn-danger btn-sm" ng-click="vm.showDeleteModal({0})">' +
                    '   <i class="fa fa-trash-o"></i>' +
                    '</button>'
                )
                .format(data.Id);
        }
    }

})();
