angular.module('todoist')
    .factory('Item', function ($http, Account, Storage) {

        function processDate(date) {
            var processedDate = undefined;

            if (date instanceof Date) {
                processedDate = new Date(date.setHours(0, 0, 0));
                return processedDate.toISOString();
            } else if (typeof date === 'string') {
                return date;
            } else {
                return '';
            }
        }

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

            var allProjects = Storage.get('Projects');
            var inboxProjectId = _.find(allProjects, function (project) {
                return project.inbox_project === true;
            }).id;

            return $http({
                method: 'get',
                url: 'http://api.todoist.com/API/addItem',
                params: {
                    token: Account.getAuthToken(),
                    project_id: task.project_id || inboxProjectId,
                    content: task.content,
                    date_string: processDate(task.date_string),
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

        function updateItem(task) {

            var allProjects = Storage.get('Projects');
            var inboxProjectId = _.find(allProjects, function (project) {
                return project.inbox_project === true;
            }).id;

            return $http({
                method: 'get',
                url: 'http://api.todoist.com/API/updateItem',
                params: {
                    id: task.id,
                    token: Account.getAuthToken(),
                    project_id: task.project_id || inboxProjectId,
                    content: task.content,
                    date_string: processDate(task.date_string),
                    priority: task.priority !== undefined ? task.priority : 1,
                    preventCache: new Date().getTime()
                }
            });

        }

        return {
            getItemsInProject: getItemsInProject,
            completeItems: completeItems,
            updateItem: updateItem,
            addItem: addItem
        }
    });