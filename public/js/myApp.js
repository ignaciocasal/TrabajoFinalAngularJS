/*
# EIPsys
## Descripcion
El sistema se encargará de gestionar los alumnos, los cursos y las inscripciones a los mismos.

## Features
1. Agregar alumnos
2. Editar alumnos
3. Eliminar alumnos
4. Agregar cursos
5. Editar cursos
6. Eliminar cursos
7. Agregar inscripciones
8. Eliminar inscripciones

*/

(function () {
	'use strict';
	angular.module('myApp', [
		'ngMessages',
		'ngRoute',
		'MyRoutes',
		'Navigation',
		'Alumno',
		'Curso',
		'Inscrip'
		])

	// Seteo título
	.run(['$rootScope',
		function($rootScope){
			$rootScope.title = "EIPsys"
		}
	])

	.factory('authInterceptor', function ($q, $window, $location) {
		return {
			request: function (config) {
				config.headers = config.headers || {};
				if ($window.sessionStorage.token) {
					config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
				}
				return config;
			},
			// Si el servidor devuelve código 401, mando al login
			responseError: function (rejection) {
				if (rejection.status === 401) {
					$location.path('/login')
				}
				return $q.reject(rejection);
			}
		};
	}).config(function ($httpProvider) {
		$httpProvider.interceptors.push('authInterceptor');
	})

	.filter('felicitar', function() {
	 return function(name) {
	    return 'Felicitaciones, ' + name + ' ha sido inscrito con éxito!';
	  };
	});
})();