(function() {
    'use strict';

    angular
        .module('hlydaBosApp')
        .controller('AccidentσController', AccidentσController);

    AccidentσController.$inject = ['AccidentsService'];

    function AccidentσController (AccidentsService) {
        var vm = this;

        vm.accidents = AccidentsService.findAll();
    }
})();
