var app = angular.module('myapp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './components/home.html',
        controller: 'homeCtrl'
    }).when('/login', {
        templateUrl: './components/login.html',
        controller: 'loginCtrl'
    }).otherwise({
        template: '404'
    })
});
app.controller('homeCtrl', function ($scope,$location) {

    $scope.goToLogin = function () {
        $location.path('/login');
    }
    $scope.register = function () {
        $location.path('/register');
    }
});
app.controller('loginCtrl', function ($scope) {
    $scope.login = function () {
        var userName = $scope.username;
        var password = $scope.password;
    }
});