(function () {
	'use strict';

	angular.module('Curso')
		.factory('CursosSrv', ['$http', function($http){
			return {
				cargar: function(callback){
					$http
						.get('/cursos/listar')   // Llamada a SV - app/models/curso.js → GET cursos
												 // Respuesta del SV - 0: {_id: "57f46a5c3dea841164c30adf", nombre: "Angular JS", descripcion: "Framework Javascript Angular", 
												 //						 	docente: "Esp. Lic. Damián Barry."}
												 // 				   1: {_id: "57f6f8e3299f5f1660933154", nombre: "Node.JS ", descripcion: "Middleware con Node.JS 
												 // 						Introducción a servidores JAVASCRIPT asincrónicos.", docente: "A.P.U. Juan Manuel Cortéz"}

						.then(
							function(res){
								console.log(res.data);
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
						.post('/curso/guardar', curso, config)	// Llamada a SV - app/models/curso.js → {nombre: "Curso1", descripcion: "desc", docente: "Dr. Ing. Leonardo Ordinez"} 										
																// Respuesta del SV - {_id: "57f46a5c3dea841164c30adf", nombre: "Curso1", descripcion: "desc",
																//						 	docente: "Dr. Ing. Leonardo Ordinez"}
															
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
			       	.get('/curso/recuperar', config) 	// Llamada a SV - app/models/curso.js →  {_id: "57f46a5c3dea841164c30adf"}
														// Respuesta del SV - {_id: "57f46a5c3dea841164c30adf", nombre: "Curso1", descripcion: "desc",
 														//						 docente: "Dr. Ing. Leonardo Ordinez"}
												
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
						.post('/curso/eliminar', data, config)	// Llamada a SV - app/models/curso.js →  {_id: "57f46a5c3dea841164c30adf"}
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
