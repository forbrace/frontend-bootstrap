(function () {
    'use strict';

    angular
        .module('app')
        .component('appAuthResult', {
            templateUrl: '/assets/js/components/auth-result.html',
            controller: appAuthResultController
        })
    ;

    appAuthResultController.$inject = ['$state', 'userService'];

    function appAuthResultController($state, userService) {
        var vm = this;

        vm.name = userService.get().name;
        vm.email = userService.get().email;

        if(angular.isUndefined(vm.name && vm.email)) {
            $state.go('home');
        }
    }

}());