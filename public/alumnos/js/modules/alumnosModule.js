/* 
Modulo ALUMNO
    Este modulo es el encargado de resolver el listado de los alumnos y el formulario de creacion o edicion de cada uno de ellos. 
*/

(function () {
    'use strict';
    angular
        .module('Alumno', [])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $routeProvider
                        .when('/alumnos', {
                            templateUrl: 'alumnos/partials/alumnoList.html', //Lista
                            controller: 'AlumnosListCtrl'
                        })
                        .when('/alumno/:_id', {
                            templateUrl: 'alumnos/partials/alumnoForm.html', //Edicion - Formulario
                            controller: 'AlumnosFormCtrl'
                        })
                        .when('/alumno', {
                            templateUrl: 'alumnos/partials/alumnoForm.html', //Creacion - Formulario
                            controller: 'AlumnosFormCtrl'
                        });
            }]);
})()



