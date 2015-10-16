'use strict';
angular
	.module('NewApp')
		.controller('NewAppCtrl', ['$scope', 'MainSidenavService', '$mdSidenav', '$location', '$http', '$timeout', '$q', '$log', function($scope, MainSidenavService, $mdSidenav,$location,$http, $timeout, $q, $log)

 {
 
  var allMaintools = [];
  var self = this;
  var pendingTask;
  var repos_url 
  var repos = [];
  
  $scope.selected = null;
  $scope.maintools = allMaintools;
  $scope.selectMaintool = selectMaintool;
  $scope.toggleSidenav = toggleSidenav;
  
  
  
  loadMaintools();
  
	$scope.isOpen = false;
      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedAlignment: 'md-left'
      };
	 
  
  $scope.reposLoaded = false;
  $scope.userLoaded = false;

  
  $scope.username = "1012";
  $http.get("https://api.github.com/users/"+$scope.username)
	.success(function(data){
		$scope.userData = data;
		loadRepos();
		    });
	var loadRepos = function() {
		$http.get($scope.userData.repos_url)
			.success(function (data){
				$scope.repoData = data;
			});
	};
	
	$scope.predicate = '-updated_at';
	
	/////////////////////////////////////////////////////////////
	
	$scope.itemsLoaded = false;
	$scope.location = "Mexico City";
	$http.get("https://api.github.com/search/users?q=location:"+$scope.location)
		.success(function(data2){
				$scope.usersData = data2;
				loadItems();
			});
			
	//////////////////////////////////////////////////////////////
	
	$scope.items2Loaded = false;
	$scope.location2 = "Toronto";
	$scope.language = "Python";
	$http.get("https://api.github.com/search/users?q=language:"+$scope.language+'+'+$scope.location2)
		.success(function(data3){
			$scope.usersData2 = data3;
			loadItems2();
		});
	
	// $scope.master = null;
	// $scope.update = function(input){
		// $scope.master = angular.copy(input);
	// };
	// $scope.reset = function(){
		 // $scope.input = angular.copy($scope.master);
		 // };
	//$scope.master = {location: "Mexico City"};
	//$scope.user.location = "Toronto";
	// $http.get("https://api.github.com/search/users?q=location:"+$scope.location)
		// .success(function(data2){
			// $scope.usersData = data2;
			// loadItems();
		// });
		// var loadItems = function() {
			// $http.get($scope.usersData.items)
				// .success(function (data2){
					// $scope.itemsData = data2;
				// });
		// };
		
		// $scope.reset();
		
 
  // if($scope.search === undefined){
	  // $scope.search = "Sherlock Holmes";
	  // fetch();
  // }
  
  
  
  // $scope.change = function(){
	  // if(pendingTask){
		  // clearTimeout(pendingTask);
	  // }
	  // pendingTask = setTimeout(fetch,800);
  // };
  
    
  //*******************
  // Internal Methods
  //*******************
  
  function querySearch (query){
	var results = query?self.languages.filter(createFilterFor(query)): self.languages,
			deferred;
		if (self.simulateQuery){
		deferred = $q.defer();
		$timeout(function () { deferred.resolve(results);}, Math.random() * 1000, false);
		return deferred.promise;
		} else {
		return results;
		}
	}
	function searchTextChange(text) {
		$log.info('Text changed to ' + text);
	}
	function selectedItemChange(item) {
		$log.info('Item changed to' + JSON.stringify(item));
	}
	/**
	*Build 'languages' list of key/value pairs
	*/
	function loadAllLanguages(){
		var allLanguages = 'Chinese, English, French, Portuguese, Spanish';
		return allLanguages.split(/, +/g).map(function (language){
			return{
				value: language.toLowerCase(),
				display: language
				};
			});
		}
	
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
  
 // function fetch(){
      // $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
       // .success(function(response){ $scope.details = response; });

      // $http.get("http://www.omdbapi.com/?s=" + $scope.search)
       // .success(function(response){  $scope.related = response; });
    // }

    // $scope.update = function(movie){
      // $scope.search = movie.Title;
      // $scope.change();
    // };

    // $scope.select = function(){
      // this.setSelectionRange(0, this.value.length);
    // }
}])

	
