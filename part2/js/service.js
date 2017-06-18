app.constant("baseURL", "")
        .service('miFactory', ['$http', 'baseURL',
            function ($http, baseURL) {
                this.getImagen = function () {
                    $http({
                        method: "GET",
                        url: "resposta.php?inicio=si"
                    }).then(function mySuccess(response) {
                        return imagen = response.data;
                    }, function myError(response) {
                        return imagen = "Error";
                    });
                    //return $http.get(baseURL+"resposta.php?inicio=si");  
                };
                this.getPista = function () {
                    return $http.get(baseURL + "resposta.php?pista=si");
                };
                this.getRespuestas = function () {
                    return $http.get(baseURL + "resposta.php?respuestas=si");
                };

            }]);