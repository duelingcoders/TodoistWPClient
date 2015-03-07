angular.module('todoist')
.controller('ProjectListCtrl', function ($scope, $state, Project) {

    function initialize() {
        Project.getAllProjects()
        .success(function(response) {
            $scope.projects = response;
        });
    }

    initialize();

});