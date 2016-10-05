(function () {
	'use strict';

	angular.module('Alumno')
		.controller('AlumnosFormCtrl', ['$scope','$window','$routeParams', 'AlumnosSrv', AlumnosFormCtrl]);

	function AlumnosFormCtrl(scope, $window, params, service){

		scope.alumno = {};

		scope.guardarAlumno = function() {
			service.guardar(scope.alumno, function(err, res){
				if(err){
					return alert('Ocurrió un error guardando los alumnos: ' + err);
				}

				$window.location.href = '#/alumnos';
				
				scope.alumno._id = res._id;
				scope.limpiarDatos();
			});

   		};

		scope.recuperarAlumno = function(){
			service.find(scope.alumnoId, function(err, res) {
			if(err){
				return alert('Error al intentar recuperar el alumno.');
			}
			scope.alumno = res;
                     
       		});
		};

		scope.limpiarDatos = function() {
	        scope.alumno = {};
	    };

	   	if(params._id){
			scope.alumnoId = params._id;
			scope.recuperarAlumno();
		}
	}
})()