//MODULE DECLARATION
var routerModule = angular.module("routerModule", ["ngRoute"]);
var homeModule = angular.module("homeModule", []);

//APP
angular.module("app", ["routerModule", "homeModule"]);