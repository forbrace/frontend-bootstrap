(function (angular) {

    angular
        .module('app', [
            'ui.router',
            'ui.bootstrap'
        ])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise("/home");

            $locationProvider.html5Mode(true);

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
