﻿angular.module('todoist')
.controller('MainCtrl', function ($scope, $state, $http, Account, Sync) {

    function initialize() {

        if (!Account.isAuthenticated()) {
            $state.go('login');
        } else {

            Sync.syncAll();

            var startPage = Account.getUser().start_page;
            if (startPage.indexOf('7') > 0) {
                $state.go('week');
            } else if (startPage.indexOf('today')) {
                $state.go('today');
            }
        }

    }

    initialize();

});