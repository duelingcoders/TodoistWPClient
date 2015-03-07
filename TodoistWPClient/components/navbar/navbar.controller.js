angular.module('todoist')
    .controller('NavbarCtrl', function ($scope, Account, $state) {

        function initialize() {
            angular.element('#app-menu a')
            .on('click', function() {
                $("#app-menu").collapse('hide');
            });
        }

        function logoff() {
            Account.logoff();
            $state.go('login');
        }

        initialize();

        $scope.logoff = logoff;

    });