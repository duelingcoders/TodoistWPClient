angular.module('todoist')
    .controller('NavbarCtrl', function ($scope, $state, Account, Storage) {

        function initialize() {

            $scope.user = Account.getUser();

            angular.element('#app-menu a:not(.coming-soon), .home-link')
            .on('click', function () {
                $("#app-menu").collapse('hide');
            });

            var allProjects = Storage.get('Projects');
            $scope.inboxProject = _.find(allProjects, function(project) {
                return project.inbox_project === true;
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