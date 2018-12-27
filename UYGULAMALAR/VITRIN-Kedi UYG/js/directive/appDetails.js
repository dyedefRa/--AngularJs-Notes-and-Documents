app.directive('detailsappcim', function () {
    return {
        restrict: 'AE',
        templateUrl: 'js/directive/appDetails.html',
        link: function ($scope, element, attr) {
            $scope.buttonText = 'Detay';
            $scope.enabled = false;
            $scope.details = function () {
         
            //  element.nextSibling.addClass('ss');
                if($scope.enabled){
                    $scope.buttonText='Detay';
                    $scope.enabled=false;
                }else{
                    $scope.buttonText='İncelendi';
                    $scope.enabled=true;
                }
            }
        }
    }
});