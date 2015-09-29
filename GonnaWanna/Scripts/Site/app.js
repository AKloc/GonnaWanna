var gonnaWannaApp = angular.module('gonnaWannaApp', ['ui.router']);

// Configure routes...
gonnaWannaApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        // HOME STATES AND NESTED VIEWS
        .state('home', {
            url: '/home',
            templateUrl: '/partials/partial-home.html',
            controller: 'HomeController'
        })
        .state('channels', {
            url: '/channels',
            templateUrl: '/partials/partial-channels.html',
            controller: 'ChannelsController'
        })
        .state('channelDetails', {
            url: '/channels/{channelID}',
            templateUrl: '/partials/partial-channelDetails.html',
            controller: 'ChannelDetailsController'
        })
        .state('events', {
            url: '/events',
            templateUrl: '/partials/partial-events.html',
            controller: 'EventsController'
        })
        .state('eventDetails', {
            url: '/events/{eventID}',
            templateUrl: '/partials/partial-eventDetails.html',
            controller: 'EventDetailsController'
        })
        .state('locations', {
            url: '/locations',
            templateUrl: '/partials/partial-locations.html',
            controller: 'LocationsController'
        })
        .state('locationDetails', {
            url: '/locations/{locationID}',
            templateUrl: '/partials/partial-locationDetails.html',
            controller: 'LocationDetailsController'
        })
        .state('searchDetails', {
            url: '/search/{searchQuery}',
            templateUrl: '/partials/partial-search.html',
            controller: 'SearchController'
        })
        .state('register', {
            url: '/register',
            templateUrl: '/partials/partial-register.html',
            controller: 'AccountController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/partial-about.html'
        });        
});


