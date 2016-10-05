(function () {
    'use strict';
    angular
        .module('Inscrip', [])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $routeProvider
                        .when('/inscripciones', {
                            templateUrl: 'inscripciones/partials/inscripList.html',
                            controller: 'InscripsListCtrl'
                        })
                        .when('/inscripcion/:_id', {
                            templateUrl: 'inscripciones/partials/inscripForm.html',
                            controller: 'InscripsFormCtrl'
                        })
                        .when('/inscripcion', {
                            templateUrl: 'inscripciones/partials/inscripForm.html',
                            controller: 'InscripsFormCtrl'
                        });
            }]);
})()