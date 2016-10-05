(function () {
	'use strict';

	angular.module('Curso')
		.controller('CursosListCtrl', ['$scope', 'CursosSrv', CursosListCtrl]);

	function CursosListCtrl(scope, service){

		scope.cursos = [];

		service.cargar(function(err, res){
			if(err){
				return alert('Ocurrió un error cargando los cursos: ' + err)
			}
			scope.cursos = res;
		});

		scope.cargarCursos = function(){
			service.cargar(function(err, res){
				if(err){
					return alert('Ocurrió un error buscando los cursos: ' + err)
				}
				scope.cursos = res;
			});
		}

   		scope.eliminarCurso = function(id) {
	        service.delete(id, function(err, res) {
	       
	        if(err){
				return alert('Error al intentar eliminar el curso.');
			}
                scope.cargarCursos();
   		});
   		};

	}
})()