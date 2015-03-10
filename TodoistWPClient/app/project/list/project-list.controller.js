angular.module('todoist')
.controller('ProjectListCtrl', function ($scope, $state, Project, Storage) {

    function initialize() {


        $scope.projects = Storage.get('Projects');

        //Project.getAllProjects()
        //.success(function (response) {
        //    $scope.projects = response;
        //});
    }

    initialize();

});