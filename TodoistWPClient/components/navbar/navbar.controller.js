angular.module('todoist')
    .controller('NavbarCtrl', function ($scope, Account, $state) {

        function initialize() {

            $scope.user = Account.getUser();
            console.log($scope.user);

            angular.element('#app-menu a, .home-link')
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