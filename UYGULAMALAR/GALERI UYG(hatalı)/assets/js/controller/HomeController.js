//BURADAKI ILK SATIRDAKI photos => service/photos.js teki FACTORY!
app.controller('HomeController', ['$scope', 'photos', function ($scope, photos) {
    photos.then(function (data) {
        $scope.photos = data;
    }, function (err) {
        console.log('HATA VAR');
    });

}]);
