(function () {
	'use strict';

	angular.module('Curso')
		.controller('CursosFormCtrl', ['$scope','$window','$routeParams', 'CursosSrv', CursosFormCtrl]);

	function CursosFormCtrl(scope, $window, params, service){

		scope.curso = {};

		scope.guardarCurso = function() {
			service.guardar(scope.curso, function(err, res){
				if(err){
					return alert('Ocurrió un error guardando los cursos: ' + err);
				}

				$window.location.href = '#/cursos';
				
				scope.curso._id = res._id;
				scope.limpiarDatos();
			});

   		};

		scope.recuperarCurso = function(){
			service.find(scope.cursoId, function(err, res) {
			if(err){
				return alert('Error al intentar recuperar el curso.');
			}
			scope.curso = res;
                     
       		});
		};

		scope.limpiarDatos = function() {
	        scope.curso = {};
	    };

	   	if(params._id){
			scope.cursoId = params._id;
			scope.recuperarCurso();
		}
	}
})()