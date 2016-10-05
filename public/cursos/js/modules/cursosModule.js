(function () {
    'use strict';
    angular
        .module('Curso', [])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $routeProvider
                        .when('/cursos', {
                            templateUrl: 'cursos/partials/cursoList.html',
                            controller: 'CursosListCtrl'
                        })
                        .when('/curso/:_id', {
                            templateUrl: 'cursos/partials/cursoForm.html',
                            controller: 'CursosFormCtrl'
                        })
                        .when('/curso', {
                            templateUrl: 'cursos/partials/cursoForm.html',
                            controller: 'CursosFormCtrl'
                        });
            }]);
})()