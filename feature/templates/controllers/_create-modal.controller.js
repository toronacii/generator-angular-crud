(function () {

	'use strict';

	angular
        .module('<%= moduleName %>')
        .controller('Create<%= upperCamelizeSingularName %>ModalController', Create<%= upperCamelizeSingularName %>ModalController);

	/** $ngInject */
	function Create<%= upperCamelizeSingularName %>ModalController($uibModalInstance) {

		var vm = this;

		angular.extend(vm, {
			submit: submit,
			cancel: cancel,
			extend: extend
		});

		function submit(form) {

			return vm.create(form).then(function() {

				return $uibModalInstance.close(vm.<%= camelizedSingularName %>);

			});
		}

		function cancel() {

			$uibModalInstance.dismiss('cancel');
		}

		function extend(controller) {

			angular.extend(vm, controller);
		}

	}
})();