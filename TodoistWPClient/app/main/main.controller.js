angular.module('todoist')
.controller('MainCtrl', function ($scope, $state, $http, Account) {

    function initialize() {

        if (!Account.isAuthenticated()) {
            $state.go('login');
        }

        //$http({
        //    url: 'http://todoist.com/API/getUncompletedItems',
        //    params: {
        //        token: Account.getAuthToken()
        //    },
        //    method: 'get'
        //}).success(function(response) {
        //    console.log(response);
        //}).error(function(data) {
        //    console.log(data);
        //});

    }

    initialize();

});