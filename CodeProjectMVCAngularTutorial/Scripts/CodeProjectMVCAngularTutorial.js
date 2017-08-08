var CodeProjectMVCAngularTutorial = angular.module('CodeProjectMVCAngularTutorial', ['ngRoute']);

CodeProjectMVCAngularTutorial.controller('LandingPageController', LandingPageController);
CodeProjectMVCAngularTutorial.controller('LoginController', LoginController);
CodeProjectMVCAngularTutorial.controller('RegisterController', RegisterController);

CodeProjectMVCAngularTutorial.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
CodeProjectMVCAngularTutorial.factory('LoginFactory', LoginFactory);
CodeProjectMVCAngularTutorial.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider)
{

    $locationProvider.hashPrefix('!').html5Mode(true);

    $routeProvider.
        when('/routeOne', { templateUrl: 'routesDemo/one' })
        .when('/routeTwo/:donuts', { templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }})
        .when('/routeThree', { templateUrl: 'routesDemo/three' })
        .when('/login', { templateUrl: '/Account/Login', controller: LoginController });
        .when('/register', { templateUrl: '/Account/Register', controller: RegisterController })

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

CodeProjectMVCAngularTutorial.config(configFunction);