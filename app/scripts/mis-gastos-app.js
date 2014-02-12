var app = angular.module('MisGastosApp', ['ngRoute']);

app.config(['$httpProvider',
    function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-Requested-With'] = undefined;
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
        $httpProvider.defaults.cache = false;
    }]);


