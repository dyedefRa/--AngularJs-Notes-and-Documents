var app = angular.module('myapp', []);
app.controller('todocont', function ($scope) {

    $scope.todochoices = [
        { 'ad': 'yapıalcak1', 'isDone': false },
        { 'ad': 'yapıalcak1', 'isDone': false },
        { 'ad': 'İmkansızlık', 'isDone': false },
        { 'ad': 'yapıalcak1', 'isDone': false },
        { 'ad': 'yapıalcak1', 'isDone': false },
        { 'ad': 'yapıalcak1', 'isDone': false },
        { 'ad': 'yapıalcak1', 'isDone': true },
        { 'ad': 'yapıalcak1', 'isDone': false }
    ]
    $scope.yenitodoekle = function () {

        $scope.todochoices.push({ 'ad': $scope.yenitodo, 'isDone': false });

    }
    $scope.yapilansil = function () {
        $scope.todochoices = $scope.todochoices.filter(function (a) {
            return a.isDone==false;
        })
    }
});