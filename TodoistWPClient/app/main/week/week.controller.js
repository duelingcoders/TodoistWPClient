angular.module('todoist')
.controller('WeekCtrl', function ($scope, $state, $http, Account, Query) {

    function initialize() {

        if (!Account.isAuthenticated()) {
            $state.go('login');
        }

        var queries = ['today', '+1', '+2', '+3', '+4', '+5', '+6'];
        Query.query(queries)
            .success(function (queryData) {
                $scope.days = queryData;
            });

    }

    function getDate(offset) {

        var today = new Date();
        var newDate = new Date(today);
        newDate.setDate(today.getDate() + offset);

        return newDate;
    }

    initialize();

    $scope.getDate = getDate;

});