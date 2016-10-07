(function () {
	'use strict';

	angular.module('Inscrip')
		.controller('InscripsFormCtrl', ['$scope','$window','$routeParams', 'InscripsSrv', InscripsFormCtrl]);

	function InscripsFormCtrl(scope, $window, params, service){

		scope.inscrip = {};
	

		scope.guardarInscrip = function() {
			service.guardar(scope.inscrip, function(err, res){
				if(err){
					return alert('Ocurrió un error guardando los inscripciones: ' + console.log(err));
				}
				
				$window.location.href = '#/inscripciones';
				
				scope.inscrip._id = res._id;
				scope.limpiarDatos();
			});

   		};


		scope.limpiarDatos = function() {
	        scope.inscrip = {};
	    };


	}
})()