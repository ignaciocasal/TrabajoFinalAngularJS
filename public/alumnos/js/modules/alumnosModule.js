(function () {
    'use strict';
    angular
        .module('Alumno', [])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $routeProvider
                        .when('/alumnos', {
                            templateUrl: 'alumnos/partials/alumnoList.html',
                            controller: 'AlumnosListCtrl'
                        })
                        .when('/alumno/:_id', {
                            templateUrl: 'alumnos/partials/alumnoForm.html',
                            controller: 'AlumnosFormCtrl'
                        })
                        .when('/alumno', {
                            templateUrl: 'alumnos/partials/alumnoForm.html',
                            controller: 'AlumnosFormCtrl'
                        });
            }]);
})()