(function () {
	'use strict';

	angular.module('Inscrip')
		.controller('InscripsListCtrl', ['$scope', 'InscripsSrv', InscripsListCtrl]);

	function InscripsListCtrl(scope, service){

		scope.inscrips = [];

		scope.cargarInscrips = function(){
			service.cargar(function(err, res){
				if(err){
					return alert('Ocurrió un error buscando las inscripciones: ' + err)
				}
				scope.inscrips = res;
	
			});
		}

   		scope.eliminarInscrip = function(id) {
	        service.delete(id, function(err, res) {
	       
	        if(err){
				return alert('Error al intentar eliminar la inscripción.');
			}
                scope.cargarInscrips();
   		});
   		};

	}
})()