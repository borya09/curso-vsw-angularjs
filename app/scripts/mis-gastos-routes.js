app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/mis-gastos-lista.html',
            controller: 'MisGastosListaController'
        })
        .when('/gasto/:id', {
            templateUrl: 'views/mis-gastos-detalle.html',
            controller: 'MisGastosDetalleController'
        })
        .when('/gasto', {
            templateUrl: 'views/mis-gastos-detalle.html',
            controller: 'MisGastosDetalleController'
        })
        .otherwise({redirectTo: '/'});

});