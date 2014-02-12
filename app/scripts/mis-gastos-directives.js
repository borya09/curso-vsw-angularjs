app.directive('pruebaSaludo', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/prueba-directiva.html',
        replace: true,
        scope:{
        },
        link: function (scope, elem, attrs) {
            scope.de = attrs.de;
            scope.a = attrs.a;

            $(elem).on('click', function(){
                var tmp = scope.de;
                scope.de = scope.a;
                scope.a = tmp;
                scope.$apply();
            });

        }
    }
});