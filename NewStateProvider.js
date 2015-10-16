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
	.state('DelCRM', {
      url: '/DelCRM',
      templateUrl: 'Delcrm.html'
    })
	.state('DelBI', {
      url: '/DelBI',
      templateUrl: 'Delbi.html'
    })
	.state('DelDocs', {
      url: '/DelDocs',
      templateUrl: 'Deldocs.html'
    })
	.state('Accounts', {
      url: '/Accounts',
      templateUrl: 'accounts.html'
    })
	.state('Finance', {
      url: '/Finance',
      templateUrl: 'finance.html'
    })
	.state('Brokerage', {
      url: '/Brokerage',
      templateUrl: 'Brokerage.html'
    })
	.state('Freight', {
      url: '/Freight',
      templateUrl: 'Freight.html'
    })
	.state('Sales', {
      url: '/Sales',
      templateUrl: 'Sales.html'
    })
	.state('HR', {
      url: '/HR',
      templateUrl: 'hr.html'
    })
	.state('Links', {
      url: '/Links',
      templateUrl: 'links.html'
    })
}])
