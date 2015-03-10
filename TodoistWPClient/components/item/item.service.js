angular.module('todoist')
    .factory('Item', function ($http, Account, Storage) {

        function getItemsInProject(projectId) {

            var allItems = Storage.get('Items');
            return _.filter(allItems, function(item) {
                return item.project_id === Number(projectId);
            });

            //return $http({
            //    method: 'get',
            //    url: 'http://todoist.com/API/getUncompletedItems',
            //    params: {
            //        token: Account.getAuthToken(),
            //        project_id: projectId,
            //        preventCache: new Date().getTime()
            //    }
            //});

        }

        function addItem(task) {
            return $http({
                method: 'get',
                url: 'http://api.todoist.com/API/addItem',
                params: {
                    token: Account.getAuthToken(),
                    project_id: task.project_id,
                    content: task.content,
                    date_string: task.date_string instanceof Date ? task.date_string.toISOString() : typeof task.date_string === 'string' ? task.date_string : '',
                    priority: task.priority !== undefined ? task.priority : 1,
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
            completeItems: completeItems,
            addItem: addItem
        }
    });