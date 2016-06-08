(function () {
    'use strict';

    angular
        .module('app')
        .component('appLogin', {
            templateUrl: 'assets/js/components/login.html',
            controller: LoginController
        })
    ;

    LoginController.$inject = ['$state', 'userService'];

    function LoginController($state, userService) {
        var vm = this;

        vm.submit = submit;

        function submit() {
            userService.set({
                name: vm.name,
                email: vm.email
            });
            $state.go('admin');
        }
    }

}());