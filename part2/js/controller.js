var app = angular.module('myApp', []);
app.controller('myctrl', ['$scope', 'miFactory',
    function ($scope, miFactory) {
        $scope.intent=0;
        $scope.algo="algo";
        $scope.firstName = "John";
        
        $scope.image = miFactory.getImagen();
        
        
        }]);
