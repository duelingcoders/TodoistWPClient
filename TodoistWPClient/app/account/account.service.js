angular.module('todoist')
.factory('Account', function ($http, Storage) {

    function login(user) {

        return $http({
            url: 'https://todoist.com/API/login',
            method: 'GET',
            params: user
        }).success(function(response) {
            if (response === 'LOGIN_ERROR') {
                return;
            }

            Storage.set('user', response);
            Storage.set('authToken', response.api_token);
        });

    }

    function isAuthenticated() {
        var user = Storage.get('user');
        return user !== null && user !== undefined;
    }

    function getAuthToken() {
        return Storage.get('authToken');
    }

    function getUser() {
        return Storage.get('user');
    }

    function logoff() {
        Storage.remove('user');
        Storage.remove('authToken');
    }

    return {
        isAuthenticated: isAuthenticated,
        login: login,
        logoff: logoff,
        getAuthToken: getAuthToken,
        getUser: getUser
    }
    
});