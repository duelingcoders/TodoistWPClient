angular.module('todoist')
    .factory('Project', function ($http, Account) {
        
        function getAllProjects() {

            return $http({
                method: 'get',
                url: 'http://todoist.com/API/getProjects',
                params: {
                    token: Account.getAuthToken(),
                    preventCache: new Date().getTime()
                }
            }).error(function(response) {
                console.log(response);
            });

        }

        function getProject(projectId) {
            return $http({
                method: 'get',
                url: 'http://todoist.com/API/getProject',
                params: {
                    token: Account.getAuthToken(),
                    project_id: projectId,
                    preventCache: new Date().getTime()
                }
            });
        }

        return {
            getAllProjects: getAllProjects,
            getProject: getProject
        }

    });