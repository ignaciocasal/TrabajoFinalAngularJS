/* 
Modulo CURSO
    Este modulo es el encargado de resolver el listado de los cursos y el formulario de creacion o edicion de cada uno de ellos. 
*/

(function () {
    'use strict';
    angular
        .module('Curso', [])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $routeProvider
                        .when('/cursos', {
                            templateUrl: 'cursos/partials/cursoList.html', //Lista
                            controller: 'CursosListCtrl'
                        })
                        .when('/curso/:_id', {
                            templateUrl: 'cursos/partials/cursoForm.html', //Edicion - Formulario
                            controller: 'CursosFormCtrl'
                        })
                        .when('/curso', {
                            templateUrl: 'cursos/partials/cursoForm.html', //Creacion - Formulario
                            controller: 'CursosFormCtrl'
                        });
            }]);
})()