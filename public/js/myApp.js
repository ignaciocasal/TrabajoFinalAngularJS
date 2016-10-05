// declare a module
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
	});
})();