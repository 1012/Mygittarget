'use strict';
angular
	.module('NewApp')
	.service('MainSidenavService', ['$http', '$log', '$timeout', '$q',  function($http, $log, $timeout, $q  ) {
	var maintools = [{
      name: 'home',
      content: 'home.html'
	  }, {
      name: 'MyRepos'
		}, {
      name: 'FindUser'          
  
  }];

  // Promise-based API
  return {
      loadAllTools: function() {
          // Simulate async nature of real remote calls
          return $q.when(maintools);
      }
  };
}])