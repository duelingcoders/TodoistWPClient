angular.module('todoist')
.controller('ProjectViewCtrl', function ($scope, $state, $stateParams, Item) {

    function initialize() {

        $scope.projectName = $stateParams.projectName;

        Item.getItemsInProject($stateParams.projectId)
        .success(function (response) {

            $scope.items = response;

        });

    }

    initialize();

});