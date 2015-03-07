angular.module('todoist')
.controller('ProjectViewCtrl', function ($scope, $state, $stateParams) {

    function initialize() {
        $scope.projectId = $stateParams.projectId;
        $scope.projectName = $stateParams.projectName.toLowerCase();
    }

    initialize();

});