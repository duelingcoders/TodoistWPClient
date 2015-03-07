angular.module('todoist')
    .directive('itemList', function (Item) {
        return {
            restrict: 'E',
            scope: {
                type: '=',
                ngModel: '='
            },
            link: function (scope, element, attr) {

                Item.getItemsInProject(scope.ngModel)
                    .success(function (response) {
                        scope.items = response;
                    });

            },
            templateUrl: 'components/item/item-list.html'
        }
    });