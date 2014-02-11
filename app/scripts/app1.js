var app = angular.module('MyTutorialApp', []);

app.config(['$httpProvider',
    function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-Requested-With'] = undefined;
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
        $httpProvider.defaults.cache = false;
    }]);


app.controller("MainController", function ($scope, $http) {
    $scope.understand = "I now understand how the scope works!";


    $http.get('http://localhost:3000/gastos',{
        lala: 'rrrrr'
    })
        .then(function (data) {
            console.log('ok');
        }, function (err) {
            console.log(err);
        })

});