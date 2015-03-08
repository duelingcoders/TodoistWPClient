angular.module('todoist')
.controller('CreateCtrl', function ($scope, $state, $http, Account, Project, Item) {

    function initialize() {

        Project.getAllProjects()
            .success(function (response) {
                $scope.projects = response;
            });

        var user = Account.getUser();

        $scope.datepickerOptions = {
            appendToBody: true,
            showWeeks: false,
            startingDay: user.start_day
        };

    }

    function createTask(task) {

        angular.element('#task-form').addClass('submitted');

        if (!$scope.taskForm.$valid) {
            return;
        }

        Item.addItem(task)
            .success(function () {
                $state.go('main');
            })
            .error(function (response) {
                console.log(response);
            });

    }


    function open($event) {
        $event.preventDefault();
        $event.stopPropagation();

        if ($scope.opened === undefined) {
            $scope.opened = false;
        }
        $scope.opened = !$scope.opened;
    };


    initialize();

    $scope.createTask = createTask;
    $scope.open = open;

});