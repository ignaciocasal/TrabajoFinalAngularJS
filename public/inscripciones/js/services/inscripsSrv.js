(function () {
	'use strict';

	angular.module('Inscrip')
		.factory('InscripsSrv', ['$http', function($http){
			return {
				cargar: function(callback){
					$http
						.get('/inscrips/listar')
						// Llamada a SV - app/models/inscrip.js → GET alumnos
						/* Respuesta del SV - 0: {alumno: {_id: "57f5358c92d33c1e80ffa688", nombre: "Ignacio", apellido: "Casal", localidad: "Puerto Madryn",…}
											curso: {_id: "57f46a5c3dea841164c30adf", nombre: "Angular JS", descripcion: "Framework Javascript Angular",…}
											}	
											1: {alumno: {_id: "57f5358c92d33c1e80ffa688", nombre: "Ignacio", apellido: "Casal", localidad: "Puerto Madryn",…}
											curso: {_id: "57f6f8e3299f5f1660933154", nombre: "Node JS", descripcion: "Middleware con Node.JS Introducción a servidores JAVASCRIPT asincrónicos.",…}
											}
																			
											*/
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

						/* Llamada a SV - app/models/inscrip.js → {alumno: "57f5358c92d33c1e80ffa688",
																curso: "57f46a5c3dea841164c30adf",
																} 
																														
						 Respuesta del SV - {alumno: {_id: "57f5358c92d33c1e80ffa688", nombre: "Ignacio", apellido: "Casal", localidad: "Puerto Madryn",…}
											curso: {_id: "57f46a5c3dea841164c30adf", nombre: "Angular JS", descripcion: "Framework Javascript Angular",…}
										}															
										*/




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
						.post('/inscrip/eliminar', data, config)	// Llamada a SV - app/models/inscrip.js →  {_id: "57f46a5c3dea841164c30adf"}
																	// Respuesta del SV - Ok/Error
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
