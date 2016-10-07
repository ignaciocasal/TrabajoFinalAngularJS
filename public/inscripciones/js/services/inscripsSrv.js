(function () {
	'use strict';

	angular.module('Inscrip')
		.factory('InscripsSrv', ['$http', function($http){
			return {
				cargar: function(callback){
					$http
						.get('/inscrips/listar')
						.then(
							function(res){
								return callback(false, res.data)
							},
							function(err){
								return callback(err.data)
							}
						)
				},
				guardar: function(ins, callback){
					var inscrip = {
						alumno: ins.alumno,
						curso: ins.curso
					};

					var config = {
					 params: inscrip
					};

					console.log(inscrip);

					$http
						.post('/inscrip/guardar', inscrip, config)
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
			       	.get('/inscrip/recuperar', config)
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
						.post('/inscrip/eliminar', data, config)
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
