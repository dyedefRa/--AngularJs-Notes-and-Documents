var app = angular.module('myapp', []);
app.controller('mycont', ['$scope', function ($scope) {

    $scope.degerler = [
        {
            isim: 'Follik',
            sinif: '8. Sinif',
            yas: 24

        },
        {
            isim: 'Muhtar',
            sinif: '11. Sinif',
            yas: 22

        }, {
            isim: 'Furya',
            sinif: '6. Sinif',
            yas: 18

        },
        {
            isim: 'Memluh',
            sinif: '2. Sinif',
            yas: 07

        }
    ];

}]);