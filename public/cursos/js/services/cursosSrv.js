(function () {
	'use strict';

	angular.module('Curso')
		.factory('CursosSrv', ['$http', function($http){
			return {
				cargar: function(callback){
					$http
						.get('/cursos/listar')
						.then(
							function(res){
								return callback(false, res.data)
							},
							function(err){
								return callback(err.data)
							}
						)
				},
				guardar: function(curso, callback){
					var config = {
					 params: curso
					};

					$http
						.post('/curso/guardar', curso, config)
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
			       	.get('/curso/recuperar', config)
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
						.post('/curso/eliminar', data, config)
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
