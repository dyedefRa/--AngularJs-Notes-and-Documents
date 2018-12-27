var app = angular.module('myapp', []);
link = "http://www.filltext.com/?rows=30&pretty=true&isim={firstName}&sehir=[%22Izmir%22,%22Istanbul%22,%22Bursa%22]&hakkinda={lorem|10}}&adres={addressObject}";
app.controller('mycont', function ($scope, $http) {

    $http.get(link).then(function (cevap) {
        $scope.listem = cevap.data;
    })


});
app.directive('medyacik', function () {

    return {
        restrict: 'EA',
        transclude: true,
        templateUrl: 'directiveuygtemplateUrl.html',
        link: function (scope, element, attr) {
 
            element.on('click',function(){
                alert('tikladın');
            })
        }

    }
});