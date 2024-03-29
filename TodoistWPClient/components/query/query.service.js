﻿angular.module('todoist')
    .factory('Query', function ($http, Account) {

        function query(queries) {
            return $http({
                url: 'http://todoist.com/API/query',
                params: {
                    queries: JSON.stringify(queries),
                    preventCache: new Date().getTime(),
                    token: Account.getAuthToken()
                },
                method: 'get'
            }).error(function (response) {
                console.log(response);
            });
        }

        return {
            query: query
        };

    });