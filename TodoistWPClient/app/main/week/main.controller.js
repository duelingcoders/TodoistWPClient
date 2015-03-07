angular.module('todoist')
.controller('MainCtrl', function ($scope, $state, $http, Account, Query) {

    function initialize() {

        if (!Account.isAuthenticated()) {
            $state.go('login');
        }

    }

    initialize();

});