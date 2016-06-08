(function () {
    'use strict';

    angular
        .module('app')
        .factory('userService', userService)
    ;

    function userService() {
        var savedData = {};
        var userService = {
            set: set,
            get: get
        };
        return userService;

        function set(data) {
            savedData = data;
        }

        function get() {
            return savedData;
        }
    }

}());