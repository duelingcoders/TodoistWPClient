angular.module('todoist')
    .directive('colorSelector', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.css('color', attr.colorSelector);
            }
        };
    });