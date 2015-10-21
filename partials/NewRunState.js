'use strict';
angular
	.module('NewApp')
	.run(
	[        '$rootScope', '$state', '$stateParams',
	  function($rootScope, $state, $stateParams){
	  $rootScope.$state = $state;
	  $rootScope.$stateParams = $stateParams;
	  }
	 ]
 )
 
 