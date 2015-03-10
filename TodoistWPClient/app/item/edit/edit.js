'use strict';

angular.module('todoist')
.config(function ($stateProvider) {
    $stateProvider
        .state('edit', {
            url: '/edit/:itemId',
            templateUrl: 'app/item/edit/edit.html',
            controller: 'EditCtrl'
        });
});