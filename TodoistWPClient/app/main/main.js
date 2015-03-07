'use strict';

angular.module('todoist')
.config(function ($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        })
        .state('today', {
            url: '/today',
            templateUrl: 'app/main/today/today.html',
            controller: 'TodayCtrl'
        })
        .state('week', {
            url: '/week',
            templateUrl: 'app/main/week/week.html',
            controller: 'WeekCtrl'
        });
});