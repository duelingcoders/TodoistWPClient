angular.module('todoist')
    .factory('Item', function ($http, Account) {

        function getItemsInProject(projectId) {

            return $http({
                method: 'get',
                url: 'http://todoist.com/API/getUncompletedItems',
                params: {
                    token: Account.getAuthToken(),
                    project_id: projectId
                }
            });

        }

        return {
            getItemsInProject: getItemsInProject
        }
    });