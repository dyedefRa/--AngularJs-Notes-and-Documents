app.directive('appinfocum', function () {

    return {
        restrict: 'EA',
        scope: {
            info: '='
        },
        templateUrl: 'js/directive/appInfo.html'
    }
});
//product ile gezmisti appInfo.html de 
//info ile gezmemiz gerekecek:!