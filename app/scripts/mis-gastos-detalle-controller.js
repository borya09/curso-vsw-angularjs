app.controller("MisGastosDetalleController", ['$scope', '$location', '$routeParams', 'MisGastosService', function ($scope, $location, $routeParams, servicio) {

    $scope.monedas = servicio.obtenerMonedas();


    var id = $routeParams.id;


    if (id) {

        //EDICIÓN GASTO
        servicio.obtenerGasto(id)
            .success(function (gasto) {
                $scope.gasto = gasto;
            })
            .error(function (error) {
                $scope.error = 'Se ha producido un error al recuperar el gasto ' + id;
            });


        $scope.guardar = function () {
            servicio.modificarGasto($scope.gasto)
                .success(function () {
                    $location.path('/');
                })
                .error(function (error) {
                    $scope.error = 'Se ha producido un error al modificar el gasto';
                });
        }

    } else {

        //NUEVO GASTO
        $scope.gasto = {};

        $scope.guardar = function () {
            servicio.nuevoGasto($scope.gasto)
                .success(function () {
                    $location.path('/');
                })
                .error(function (error) {
                    $scope.error = 'Se ha producido un error al grabar el nuevo gasto';
                });
        }
    }


}]);