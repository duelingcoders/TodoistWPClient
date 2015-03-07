angular.module('todoist')
    .factory('Item', function ($http, Account) {

        function getItemsInProject(projectId) {

            return $http({
                method: 'get',
                url: 'http://todoist.com/API/getUncompletedItems',
                params: {
                    token: Account.getAuthToken(),
                    project_id: projectId,
                    preventCache: new Date().getTime()
                }
            });

        }

        function completeItems(completedItems) {

            return $http({
                method: 'get',
                url: 'http://todoist.com//API/completeItems',
                params: {
                    token: Account.getAuthToken(),
                    ids: JSON.stringify(completedItems)
                }
            });

        }

        return {
            getItemsInProject: getItemsInProject,
            completeItems: completeItems
        }
    });