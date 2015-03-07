angular.module('todoist')
    .factory('Project', function ($http, Account) {
        
        function getAllProjects() {
            return $http({
                method: 'get',
                url: 'http://todoist.com/API/getProjects',
                params: {
                    token: Account.getAuthToken()
                }
            });
        }

        function getProject(projectId) {
            return $http({
                method: 'get',
                url: 'http://todoist.com/API/getProject',
                params: {
                    token: Account.getAuthToken(),
                    project_id: projectId
                }
            });
        }

        return {
            getAllProjects: getAllProjects,
            getProject: getProject
        }

    });