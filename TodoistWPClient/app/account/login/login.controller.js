angular.module('todoist')
.controller('LoginCtrl', function ($scope, $state, Account, Storage) {

    function initialize() {

        $scope.flags = {
            loginError: false
        };

    }

    function login(user) {

        $scope.flags.loginError = false;

        Account.login(user)
        .success(function (response) {

            if (response === 'LOGIN_ERROR') {
                $scope.flags.loginError = true;
                return;
            }

            $state.go('main');

        }).error(function (data, stats) {
            $scope.flags.loginError = true;
        });

    }

    initialize();

    $scope.login = login;

});