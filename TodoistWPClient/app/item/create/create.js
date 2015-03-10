'use strict';

angular.module('todoist')
.config(function ($stateProvider) {
    $stateProvider
        .state('create', {
            url: '/create',
            templateUrl: 'app/item/create/create.html',
            controller: 'CreateCtrl'
        });
});