app.service('MisGastosService', ['$http',
    function ($http) {

        var urlRestService = 'http://localhost:3000/gastos';

        var obtenerListado = function () {
            return $http.get(urlRestService);
        };

        var nuevoGasto = function (gasto) {
            return $http.post(urlRestService, gasto);
        };

        var modificarGasto = function (gasto) {
            return $http.put(urlRestService+ '/' + gasto._id, gasto);
        };

        var eliminarGasto = function (gasto) {
            return $http.delete(urlRestService + '/' + gasto._id);
        };

        var obtenerGasto = function (id) {
            return $http.get(urlRestService + '/' + id);
        };

        var obtenerMonedas = function () {
            var monedas = [
                '$',
                '£',
                '€'
            ];
            return monedas;
        };

        return {
            obtenerListado: obtenerListado,
            nuevoGasto: nuevoGasto,
            modificarGasto: modificarGasto,
            obtenerGasto: obtenerGasto,
            eliminarGasto: eliminarGasto,
            obtenerMonedas: obtenerMonedas
        }
    }]);
