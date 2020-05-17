angular.module("routerModule").config([
    "$routeProvider",

    function config($routeProvider) {
        $routeProvider
            .when("/not-found", {
                templateUrl: "/404.html"
            })
            .when("/", {
                templateUrl: "/app/modules/home/views/home.view.html",
                controller: "HomeController"
            })
            .when("/home", {
                templateUrl: "/app/modules/home/views/home.view.html",
                controller: "HomeController"
            })
            .otherwise("/not-found");
    },
]);