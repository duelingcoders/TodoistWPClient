angular.module('todoist')
.controller('TodayCtrl', function ($scope, $state, $http, Account, Query) {

    function initialize() {

        if (!Account.isAuthenticated()) {
            $state.go('login');
        }

        var queries = [];
        var today = new Date().toISOString();
        queries.push(today);
        Query.query(queries)
            .success(function (queryData) {

                for (var i = 0; i < queryData.length; i++) {
                    var currentQueryData = queryData[i];
                    if (currentQueryData.query === today) {
                        $scope.items = currentQueryData.data;
                    }
                }
            });

    }

    initialize();

});