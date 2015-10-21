'use strict';
angular
	.module('NewApp')
	.controller('NewToolsCtrl', ['$scope', '$mdSidenav', 'MainSidenavService', '$timeout','$log', function($scope, $mdSidenav, MainSidenavService, $timeout, $log) {
	 var allMaintools = [];
  
 $scope.selected = null;
 $scope.maintools = allMaintools;
  $scope.selectMaintool = selectMaintool;
  $scope.toggleSidenav = toggleSidenav;
  
  $scope.close = function() {
	  $mdSidenav('left').close()
							.then(function(){
								$log.debug("close LEFT is done");
								
							});
						};
  
  loadMaintools();
  
  //*******************
  // Internal Methods
  //******************* 
 	 function loadMaintools() {
	MainSidenavService.loadAllTools()
      .then(function(maintools){
        allMaintools = maintools;
        $scope.maintools = [].concat(maintools);
        $scope.selected = $scope.maintools[0];
     })
  }
  
  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }
  
  function selectMaintool(maintool) {
    $scope.selected = angular.isNumber(maintool) ? $scope.maintools[maintool] : maintool;
    $scope.toggleSidenav('left');
  }
}])

