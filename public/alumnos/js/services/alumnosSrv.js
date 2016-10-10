(function () {
	'use strict';

	angular.module('Alumno')
		.factory('AlumnosSrv', ['$http', function($http){
			return {
				cargar: function(callback){
					$http
						.get('/alumnos/listar')
						// Llamada a SV - app/models/alumno.js → GET alumnos
						/* Respuesta del SV - 0: {_id: "57f5358c92d33c1e80ffa688", 
																				nombre: "Ignacio",
																				apellido: "Casal",
																				localidad: "Comodoro Rivadavia",
																				domicilio: "Lago Viedma 162",
																				telefono: "155123312",
																				email: "user@gmail.com"
																				}
																			1: {_id: "57f6ae858e350b1b60dce6c2", 
																			nombre: "Jose",
																			apellido: "Cardenas",
																			localidad: "Puerto Madryn",
																			domicilio: "Lago Cardiel 245",
																			telefono: "154265854",
																			email: "user2@gmail.com"
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
				guardar: function(alumno, callback){
					var config = {
					 params: alumno
					};

					$http
						.post('/alumno/guardar', alumno, config)/* Llamada a SV - app/models/alumno.js → {nombre: "Ignacio",
																				apellido: "Casal",
																				localidad: "Comodoro Rivadavia",
																				domicilio: "Lago Viedma 162",
																				telefono: "155123312",
																				email: "user@gmail.com"
																				} 
																														
																 Respuesta del SV - {_id: "57f5358c92d33c1e80ffa688", 
																				nombre: "Ignacio",
																				apellido: "Casal",
																				localidad: "Comodoro Rivadavia",
																				domicilio: "Lago Viedma 162",
																				telefono: "155123312",
																				email: "user@gmail.com"
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
			       	.get('/alumno/recuperar', config)	// Llamada a SV - app/models/alumno.js →  {_id: "57f5358c92d33c1e80ffa688"}
														/* Respuesta del SV - {_id: "57f5358c92d33c1e80ffa688", 
																				nombre: "Ignacio",
																				apellido: "Casal",
																				localidad: "Comodoro Rivadavia",
																				domicilio: "Lago Viedma 162",
																				telefono: "155123312",
																				email: "user@gmail.com"
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
				delete: function(id, callback){

					var data = {
					 _id: id
					};

			        var config = {
					 params: data
					};

					$http
						.post('/alumno/eliminar', data, config)		// Llamada a SV - app/models/alumno.js →  {_id: "57f46a5c3dea841164c30adf"}
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
