(function() {
    'use strict';

    angular
        .module('hlydaBosApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('accidents', {
            parent: 'admin',
            url: '/accidents',
            data: {
                authorities: ['ROLE_ADMIN', 'ROLE_USER'],
                pageTitle: 'Accidents Tracking'
            },
            views: {
                'content@': {
                    templateUrl: 'app/components/accident/listing/accidents.html',
                    controller: 'AccidentListController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
