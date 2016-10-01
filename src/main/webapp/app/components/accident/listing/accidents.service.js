(function() {
    'use strict';

    angular
        .module('hlydaBosApp')
        .factory('AccidentsService', AccidentsService);

    AccidentsService.$inject = ['$resource'];

    function AccidentsService ($resource) {
        return $resource('api/accident', {}, {
            'findOne': {method: 'GET', isArray: false},
            'findAll': {method: 'GET', isArray: true},
            'update': {method: 'PUT'}
        });
    }
})();
