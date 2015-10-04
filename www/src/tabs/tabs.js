angular.module('starter')
	.config(function ($stateProvider) {
		$stateProvider

			// setup an abstract state for the tabs directive
			.state('tab', {
				url: "/tab",
				abstract: true,
				templateUrl: "src/nav/menu/menu.html",
				controller: "MenuCtrl"

				//disable resolve auth to test more quickly
				/*resolve:{
					auth: authResolve
				}*/
			})
			// Each tab has its own nav history stack:
			.state('tab.web', {
				url: '/web',
				data:{
					title:"Web"
				},
				views: {
					'tab-web': {
						templateUrl: 'src/pages/home.html',
						controller:'FeedController'
					}
				}
			})
			.state('tab.mobile', {
				url: '/mobile',
				data:{
					title:"Mobile"
				},
				views: {
					'tab-mobile': {
						templateUrl: 'src/pages/mobile.html',
						controller:'FeedController'
					}
				}
			})
			.state('tab.sport', {
				url: '/sport',
				data:{
					title:"Sport"
				},
				views: {
					'tab-sport': {
						templateUrl: 'src/pages/sport.html',
						controller:'FeedController'
					}
				}
			})	

	});
