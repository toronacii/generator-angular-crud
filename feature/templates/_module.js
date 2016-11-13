(function () {
    'use strict';

    angular.module('<%= moduleName %>', []);
    angular.module('<%= parentRoute %>').requires.push('<%= moduleName %>');

})();
