angular.module('todoist')
    .directive('indenter', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var indentLevel = parseInt(attr.indenter);
                element.css('margin-left', 15 * indentLevel + 'px');
            }
        };
    });