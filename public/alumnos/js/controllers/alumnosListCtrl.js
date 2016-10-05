(function () {
	'use strict';

	angular.module('Alumno')
		.controller('AlumnosListCtrl', ['$scope', 'AlumnosSrv', AlumnosListCtrl]);

	function AlumnosListCtrl(scope, service){

		scope.alumnos = [];

		service.cargar(function(err, res){
				if(err){
					return alert('Ocurrió un error cargando los alumnos: ' + err)
				}
				scope.alumnos = res;
		});

		scope.cargarAlumnos = function(){
			service.cargar(function(err, res){
				if(err){
					return alert('Ocurrió un error buscando los alumnos: ' + err)
				}
				scope.alumnos = res;
			});
		}

   		scope.eliminarAlumno = function(id) {
	        service.delete(id, function(err, res) {
	       
	        if(err){
				return alert('Error al intentar eliminar el alumno.');
			}
                scope.cargarAlumnos();
   		});
   		};

	}
})()