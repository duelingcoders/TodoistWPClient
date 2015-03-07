angular.module('todoist')
.controller('WeekCtrl', function ($scope, $state, $http, Account, Query) {

    function initialize() {

        if (!Account.isAuthenticated()) {
            $state.go('login');
        }

        var queries = [];
        for (var i = 0; i < 7; i++) {
            var today = new Date();
            var daysAfter = new Date(today);
            daysAfter.setDate(today.getDate() + i);
            queries.push(daysAfter.toISOString());
        }

        Query.query(queries)
            .success(function (queryData) {
            console.log(queryData);
                $scope.days = queryData;
            });

    }

    initialize();

});