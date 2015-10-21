'use strict';
angular
	.module('NewApp')
.config(
	[   	  '$stateProvider', '$urlRouterProvider',
      function($stateProvider,    $urlRouterProvider) {
  //
     /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////
	// $urlRouterProvider.otherwise('/Home');
      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
	//$urlRouterProvider
	// The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
	
	// For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home")
  //
  // Now set up the states
   //////////
        // Home //
        //////////
  $stateProvider
	 .state('home', {
      url: '/home',
      templateUrl: 'home.html'
    })
	.state('MyRepos', {
      url: '/MyRepos',
      templateUrl: 'MyRepos.html'
    })
	.state('FindUser', {
      url: '/FindUser',
      templateUrl: 'FindUser.html'
    })
}])