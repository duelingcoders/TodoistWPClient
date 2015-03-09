angular.module('todoist')
.controller('TodayCtrl', function ($scope, $state, $http, Account, Query) {

    function initialize() {

        if (!Account.isAuthenticated()) {
            $state.go('login');
        }

        var queries = ['overdue', 'yesterday', 'today'];
        Query.query(queries)
            .success(function (queryData) {

                $scope.days = queryData;

            });

    }

    function getDate(offset) {

        var today = new Date();
        var newDate = new Date(today);
        newDate.setDate(today.getDate() + (offset - 2));

        return newDate;
    }

    initialize();

    $scope.getDate = getDate;

});