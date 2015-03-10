angular.module('todoist')
    .directive('projectItem', function (Storage) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                showItemCount: '='
            },
            link: function (scope, element, attr) {

                var projectColors = [
                    '#95ef63', '#ff8581', '#ffc471', '#f9ec75', '#a8c8e4',
                    '#d2b8a3', '#e2a8e4', '#cccccc', '#fb886e', '#ffcc00',
                    '#74e8d3', '#3bd5fb', '#dc4fad', '#ac193d', '#d24726',
                    '#82ba00', '#03b3b2', '#008299', '#5db2ff', '#0072c6',
                    '#000000', '#777777'
                ];

                if (scope.ngModel.name !== undefined) {
                    scope.project = scope.ngModel;
                } else {
                    var allProjects = Storage.get('Projects');
                    scope.project = _.find(allProjects, function (project) {
                        return project.id === Number(scope.ngModel);
                    });
                }

                if (scope.project.color.indexOf !== undefined && scope.project.color.indexOf('#') > 0) {
                    element.find('.fa-circle').css('color', scope.project.color);
                } else {
                    element.find('.fa-circle').css('color', projectColors[scope.project.color]);
                }

                var allItems = Storage.get('Items');
                scope.itemCount = _.filter(allItems, function(item) {
                    return item.project_id === scope.project.id;
                }).length;

            },
            template: '<i class="fa fa-circle"></i> {{project.name}} <span ng-if="itemCount > 0 && showItemCount" class="grayedout">{{itemCount}}<span>'
        };
    });