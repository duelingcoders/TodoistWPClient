'use strict';

angular.module('todoist')
.config(function ($stateProvider) {
    $stateProvider
        .state('project', {
            url: '/project',
            templateUrl: 'app/project/list/project-list.html',
            controller: 'ProjectListCtrl'
        })
        .state('project-view', {
            url: '/project/:projectName/:projectId',
            templateUrl: 'app/project/view/project-view.html',
            controller: 'ProjectViewCtrl'
        });
});