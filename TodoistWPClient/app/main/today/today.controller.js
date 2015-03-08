angular.module('todoist')
.controller('TodayCtrl', function ($scope, $state, $http, Account, Query) {

    function initialize() {

        if (!Account.isAuthenticated()) {
            $state.go('login');
        }

        var queries = ['today'];
        Query.query(queries)
            .success(function (queryData) {

                $scope.items = queryData[0].data;

            });

    }

    initialize();

});