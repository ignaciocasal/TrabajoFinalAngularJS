(function () {
	'use strict';

	angular.module('Inscrip')
		.controller('InscripsFormCtrl', ['$scope','$window','$routeParams', 'InscripsSrv', InscripsFormCtrl]);

	function InscripsFormCtrl(scope, $window, params, service){

		scope.inscrip = {};

		scope.guardarInscrip = function() {
			service.guardar(scope.inscrip, function(err, res){
				if(err){
					return alert('Ocurrió un error guardando los inscrips: ' + err);
				}

				$window.location.href = '#/inscrips';
				
				scope.inscrip._id = res._id;
				scope.limpiarDatos();
			});

   		};

		scope.recuperarInscrip = function(){
			service.find(scope.inscripId, function(err, res) {
			if(err){
				return alert('Error al intentar recuperar el inscrip.');
			}
			scope.inscrip = res;
                     
       		});
		};

		scope.limpiarDatos = function() {
	        scope.inscrip = {};
	    };

	   	if(params._id){
			scope.inscripId = params._id;
			scope.recuperarInscrip();
		}
	}
})()