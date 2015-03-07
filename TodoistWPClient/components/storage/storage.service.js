angular.module('todoist')
    .factory('Storage', function () {

        function set(itemName, item) {
            localStorage.setItem(itemName, JSON.stringify(item));
        }

        function get(itemName) {
            return JSON.parse(localStorage.getItem(itemName));
        }

        function remove(itemName) {
            localStorage.removeItem(itemName);
        }

        return {
            set: set,
            get: get,
            remove: remove
        };

    });