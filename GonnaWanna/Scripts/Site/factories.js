var gonnaWannaApp = angular.module('gonnaWannaApp');

gonnaWannaApp.service("UserAccountService", function ($http) {
    
    var viewModel = this;
    //$scope.viewModel = this;
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
            return data;
            //$scope.returnData = data;
        });
    };

    viewModel.LoginUser = function () {
        // Format the URL string.
        urlParams = "grant_type=password&username=" + UserName + "&password=" + Password;

        $http.post("/api/token", urlParams, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function (data) {
            //$scope.returnData = data;
        });
    };


    return viewModel;

    //        $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

});

gonnaWannaApp.service("EventService", function ($http) {
    var eventService = this;

    eventService.GetAllEvents = function (callBack) {
        $http.get("/api/events").success(function (data) {
            callBack(data);
        });
    };

    eventService.GetEvent = function (eventID, callBack) {
        $http.get("/api/events/" + eventID).success(function (data) {
            callBack(data);
        });
    };

    return eventService;
});

gonnaWannaApp.service("ChannelService", function ($http) {
    var channelService = this;

    channelService.GetAllChannels = function (callBack) {
        $http.get("/api/channels").success(function (data) {
            callBack(data);
        });
    };

    channelService.GetChannel = function (channelID, callBack) {
        $http.get("/api/channels/" + channelID).success(function (data) {
            callBack(data);
        });
    };

    return channelService;
});


gonnaWannaApp.service("LocationService", function ($http) {
    var locationService = this;

    locationService.GetAllLocations = function (callBack) {
        $http.get("/api/locations").success(function (data) {
            callBack(data);
        });
    };

    locationService.GetLocation = function (locationID, callBack) {
        $http.get("/api/locations/" + locationID).success(function (data) {
            callBack(data);
        });
    };

    return locationService;
});


gonnaWannaApp.service("SearchService", function ($http) {
    var searchService = this;

    searchService.SearchEventsAndChannels = function (searchQuery, callBack) {
        $http.get("/api/search/" + searchQuery).success(function (data) {
            callBack(data);
        });
    };

    /*
    searchService.SearchEvents = function (searchQuery, callBack) {
        $http.get("/api/search/" + searchQuery).success(function (data) {
            callBack(data);
        });
    };

    searchService.SearchChannels = function (searchQuery, callBack) {
        $http.get("/api/search/" + searchQuery).success(function (data) {
            callBack(data);
        });
    };
    */

    return searchService;
});