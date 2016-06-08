(function (angular) {

    angular
        .module('app', [
            'ui.router',
            'ui.bootstrap'
        ])
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/home");

            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "assets/js/partials/home.html"
                })
                .state('admin', {
                    url: "/admin",
                    templateUrl: "assets/js/partials/admin.html"
                });
        });

})(angular);
