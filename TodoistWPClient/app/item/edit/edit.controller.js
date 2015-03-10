angular.module('todoist')
.controller('EditCtrl', function ($scope, $state, $stateParams, $http, Account, Project, Item, Storage) {

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

        var allTasks = Storage.get('Items');
        $scope.task = _.find(allTasks, function (item) {
            return item.id === Number($stateParams.itemId);
        });

    }

    function updateTask(task) {

        angular.element('#task-form').addClass('submitted');

        if (!$scope.taskForm.$valid) {
            return;
        }

        Item.updateItem(task)
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

    $scope.updateTask = updateTask;
    $scope.open = open;

});