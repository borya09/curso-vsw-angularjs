app.directive('pruebaSaludo', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/prueba-directiva.html',
        replace: true,
        link: function (scope, elem, attrs) {
            scope.de = attrs.de;
            scope.a = attrs.a;
        }
    }
});