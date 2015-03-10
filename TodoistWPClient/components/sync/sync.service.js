angular.module('todoist')
    .factory('Sync', function ($http, Account, Storage) {

        function syncAll() {
            return $http({
                url: 'http://todoist.com/TodoistSync/v5.3/get',
                method: 'get',
                params: {
                    api_token: Account.getAuthToken(),
                    seq_no: 0,
                    preventCache: new Date().getTime()
                }
            }).success(function(response) {
                for (var key in response) {
                    if (response.hasOwnProperty(key)) {
                        Storage.set(key, response[key]);
                    }
                }
            });
        }


        return {
            syncAll: syncAll
        };

    });