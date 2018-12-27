app.factory('photos', ['$http', function ($http) {
    return $http.get('http://5b7ca540b4516f00148781a7.mockapi.io/Resimli')
        .then(function (data) {
            return data;
        }, function (err) {
            return err;
        });

}]);