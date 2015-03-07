angular.module('todoist')
    .directive('itemList', function (Item, Query) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                hasIndent: '='
            },
            link: function(scope, element, attr) {},
            templateUrl: 'components/item/item-list.html'
        }
    });