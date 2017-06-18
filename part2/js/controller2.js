var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
        $scope.intent = 0;
        $scope.algo = "algo";
        $scope.firstName = "John";

        //$scope.image = miFactory.getImagen();
        
        $scope.getImagen = function(){ $http({
            method: "GET",
            url: "resposta.php?inicio=si"
        }).then(function mySuccess(response) {
            $scope.imagen = response.data;
            $scope.dispImg = true;
        }, function myError(response) {
            $scope.imagen = "Error";
        })};
        
        $scope.getPista = function(){ $http({
            method: "GET",
            url: "resposta.php?pista=si"
        }).then(function mySuccess(response) {
            $scope.pista = response.data;
        }, function myError(response) {
            $scope.pista = "Error";
        })};
        
        $scope.getRespuesta = function(){ $http({
            method: "GET",
            url: "resposta.php?respuestas=si"
        }).then(function mySuccess(response) {
            $scope.respuestas = response.data;
            $scope.imagen = "";
            $scope.dispAns = true;
            
        }, function myError(response) {
            $scope.respuestas = "Error";
        })};
    
    $scope.correcion = function(){
        document.getElementById('goodAns').className = 'btn btn-success btn-block';
        document.getElementById('badAns').className = 'btn btn-danger btn-block';        
    }

    });
