app.controller('homeController', ['$scope', function ($scope) {
    $scope.products = [
        {
            icon: 'https://static1.squarespace.com/static/5851a2f66a49633a158177de/t/58531084b8a79b29988d1dc4/1481838726027/Kedi-Textless_ProRes422HQ_LtRtLRCLfeLsRS_177_101316_3099.jpg?format=300w',
            title: 'Kedi 1',
            type: 'Asian',
            price: 400
        }, {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLdskwgI2dcyVoOh8jYOcfvK5SGbuNKFCexabzihvtm1yzFQL',
            title: 'Kedi 2',
            type: 'Philiphins',
            price: 600
        }, {
            icon: 'http://img2.blogcu.com/images/k/e/d/kediler1/kedi_82.jpg',
            title: 'Kedi 3',
            type: 'Europe',
            price: 200
        }, {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78UGgW_m75DdV97XJdfAQppqTrRCeP9mmbwo-Yg4da0x2risA',
            title: 'Kedi 4',
            type: 'Turkish',
            price: 500
        }
    ]
}]);

