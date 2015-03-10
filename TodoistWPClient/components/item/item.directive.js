angular.module('todoist')
    .directive('item', function (Item, Storage, $filter) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                showDates: '=',
                showProject: '='
            },
            link: function (scope, element, attr) {

                function initialize() {

                    if (scope.showDates) {
                        scope.itemDueDate = getDateString(scope.ngModel.date_string);
                    }

                }

                function getDateString(date) {

                    var today = new Date();
                    var userDate = new Date(date);
                    var tomorrow = new Date(today);

                    tomorrow.setDate(today.getDate() + 1);
                    var yesterday = new Date(today);
                    yesterday.setDate(today.getDate() - 1);

                    today.setHours(0, 0, 0, 0);
                    userDate.setHours(0, 0, 0, 0);
                    tomorrow.setHours(0, 0, 0, 0);
                    yesterday.setHours(0, 0, 0, 0);

                    if (today.toISOString() === userDate.toISOString()) {
                        return 'Today';
                    } else if (tomorrow.toISOString() === userDate.toISOString()) {
                        return 'Tomorrow';
                    } else if (yesterday.toISOString() === userDate.toISOString()) {
                        return 'Yesterday';
                    } else {
                        return $filter('date')(date, 'EEE MMM d');
                    }

                }

                function toggleComplete(id) {

                    var completedItemsIds = [];
                    completedItemsIds.push(id);

                    Item.completeItems(completedItemsIds)
                        .success(function (response) {
                            if (response === 'ok') {
                                scope.ngModel.checked = 1;
                            }
                        });

                }

                initialize();

                scope.toggleComplete = toggleComplete;

            },
            templateUrl: 'components/item/item.html'
        }
    });