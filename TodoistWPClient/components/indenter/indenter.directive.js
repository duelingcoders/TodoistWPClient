angular.module('todoist')
    .directive('indenter', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (!attr.hasIndent) {
                    return;
                }

                var indentLevel = parseInt(attr.indenter) - 1;
                element.css('margin-left', 20 * indentLevel + 'px');
            }
        };
    });