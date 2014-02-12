app.controller("MisGastosListaController", ['$scope', '$http', 'MisGastosService', function ($scope, $http, servicio) {

    $scope.monedas = servicio.obtenerMonedas();

    servicio.obtenerListado()
        .success(function(gastos){
            $scope.gastos = gastos;
        })
        .error(function(error){
            $scope.error = 'Se ha producido un error recuperando el listado de gastos';
        });

    $scope.eliminar = function(gasto){
        servicio.eliminarGasto(gasto)
            .success(function(){
                $scope.gastos.splice(gasto, 1);
            })
            .error(function(error){
                $scope.error = 'Se ha producido un error al eliminar';
            });

    }

}]);