(function () {
	'use strict';

	angular.module('Alumno')
		.factory('AlumnosSrv', ['$http', function($http){
			return {
				cargar: function(callback){
					$http
						.get('/alumnos/listar')
						.then(
							function(res){
								return callback(false, res.data)
							},
							function(err){
								return callback(err.data)
							}
						)
				},
				guardar: function(alumno, callback){
					var config = {
					 params: alumno
					};

					$http
						.post('/alumno/guardar', alumno, config)
						.then(
							function(res){
								return callback(false, res.data)
							},
							function(err){
								return callback(err)
							}
						)
				},
				find: function(id, callback){

			        var data = {
					 _id: id
					};

			        var config = {
					 params: data
					};

					$http
			       	.get('/alumno/recuperar', config)
			        .then(
							function(res){
								return callback(false, res.data)
							},
							function(err){
								return callback(err.data)
							}
						)
				},
				delete: function(id, callback){

					var data = {
					 _id: id
					};

			        var config = {
					 params: data
					};

					$http
						.post('/alumno/eliminar', data, config)
						.then(
							function(res){
								return callback(false, res.data)
							},
							function(err){
								return callback(err.data)
							}
						)
				}

			
			};
	}]);
})();
