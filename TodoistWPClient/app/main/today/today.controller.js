angular.module('todoist')
.controller('TodayCtrl', function ($scope, $state, $http, Account, Query) {

    function initialize() {

        if (!Account.isAuthenticated()) {
            $state.go('login');
        }

    }

    initialize();

});