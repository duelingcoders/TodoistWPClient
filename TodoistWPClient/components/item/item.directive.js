angular.module('todoist')
    .directive('item', function (Item) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            link: function (scope, element, attr) {

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

                scope.toggleComplete = toggleComplete;

            },
            templateUrl: 'components/item/item.html'
        }
    });