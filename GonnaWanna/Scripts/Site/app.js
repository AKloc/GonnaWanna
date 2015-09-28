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


// Need to know about all of the events and channels JUST FOR COUNTS. Also add a function to allow page "redirects" from the search bar and button.
gonnaWannaApp.controller('NavBarController', function ($scope, $http, $location) {
    $scope.ChangeRoute = function (newPath) {
        $location.path(newPath);
    };

    $http.get("/api/events").success(function (data) {
        $scope.Events = data;
    });

    $http.get("/api/channels").success(function (data) {
        $scope.Channels = data;
    });
});

gonnaWannaApp.controller('HomeController', function ($scope, $http, $location) {    
    $http.get("/api/events").success(function (data) {
        $scope.Events = data;
    });
});

gonnaWannaApp.controller('EventsController', function ($scope, $http) {
    $http.get("/api/events").success(function (data) {
        $scope.Events = data;
    });
});

gonnaWannaApp.controller('EventDetailsController', function ($scope, $http, $stateParams) {
    var eventID = $stateParams.eventID;

    $http.get("/api/events/" + eventID).success(function (data) {
        $scope.Event = data;
    });
});

gonnaWannaApp.controller('ChannelsController', function ($scope, $http) {
    $http.get("/api/channels").success(function (data) {
        $scope.Channels = data;
    });
});

gonnaWannaApp.controller('ChannelDetailsController', function ($scope, $http, $stateParams) {
    var channelID = $stateParams.channelID;

    $http.get("/api/channels/" + channelID).success(function (data) {
        $scope.Channel = data;
    });
});

gonnaWannaApp.controller('LocationsController', function ($scope, $http) {
    $http.get("/api/locations").success(function (data) {
        $scope.Locations = data;
    });
});

gonnaWannaApp.controller('LocationDetailsController', function ($scope, $http, $stateParams) {
    var locationID = $stateParams.locationID;

    $http.get("/api/locations/" + locationID).success(function (data) {
        $scope.Location = data;
    });
});

gonnaWannaApp.controller('SearchController', function ($scope, $http, $stateParams) {
    var searchQuery = $stateParams.searchQuery;

    $http.get("/api/search/" + searchQuery).success(function (data) {
        $scope.SearchResults = data;
    });
});


gonnaWannaApp.controller('AccountController', function ($scope, $http, $stateParams) {
    
    var viewModel = this;
    $scope.viewModel = this;
    viewModel.isLoggedIn = false;
    viewModel.isRegistered = false;
    viewModel.UserData =
        {
            FirstName: "testFirstName",
            LastName: "testLastName",
            Email: "test@email.com",
            UserName: "testUserName",
            Password: "Pass_1",
            ConfirmPassword: "Pass_1",
        };

    viewModel.RegisterUser = function () {
        $http.post("/api/account/register", viewModel.UserData).success(function (data) {
            $scope.returnData = data;
        });
    }
});