angular.module('todoist')
    .directive('itemList', function (Item, Query) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                hasIndent: '=',
                showDates: '=',
                showNoTaskText: '='
            },
            link: function(scope, element, attr) {},
            templateUrl: 'components/item/item-list.html'
        }
    });