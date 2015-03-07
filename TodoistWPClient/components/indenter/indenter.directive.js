angular.module('todoist')
    .directive('indenter', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var indentLevel = parseInt(attr.indenter) - 1;
                element.css('margin-left', 20 * indentLevel + 'px'); 
            }
        };
    });