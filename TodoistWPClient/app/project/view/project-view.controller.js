angular.module('todoist')
    .controller('ProjectViewCtrl', function ($scope, $state, $stateParams, Item) {

        function initialize() {

            $scope.projectName = $stateParams.projectName;
            $scope.items = Item.getItemsInProject($stateParams.projectId);

        }

        initialize();

    });