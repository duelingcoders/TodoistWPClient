angular.module('todoist')
    .controller('NavbarCtrl', function ($scope, Account, $state) {

        function initialize() {

            $scope.user = Account.getUser();

            angular.element('#app-menu a, .home-link')
            .on('click', function () {
                $("#app-menu").collapse('hide');
            });

        }

        function logoff() {
            Account.logoff();
            $state.go('login');
        }

        function isActive(state_name) {
            return $state.current.name === state_name;
        }

        initialize();

        $scope.logoff = logoff;
        $scope.isActive = isActive;

    });