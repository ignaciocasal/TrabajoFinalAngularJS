/* 
Modulo CURSO
    Este modulo es el encargado de resolver el listado de las inscripciones y el formulario de creacion de cada uno de ellas. 
*/

(function () {
    'use strict';
    angular
        .module('Inscrip', [])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $routeProvider
                        .when('/inscripciones', { 
                            templateUrl: 'inscripciones/partials/inscripList.html', //Lista
                            controller: 'InscripsListCtrl'
                        })
                        .when('/inscripcion', {
                            templateUrl: 'inscripciones/partials/inscripForm.html', //Creacion - Formulario
                            controller: 'InscripsFormCtrl'
                        });
            }]);
})()