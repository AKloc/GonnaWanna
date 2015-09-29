var gonnaWannaApp = angular.module('gonnaWannaApp');

gonnaWannaApp.factory("UserAccountFactory", function ($http) {
    
    var viewModel = this;
    //$scope.viewModel = this;
    viewModel.isLoggedIn = false;
    viewModel.isRegistered = false;
    viewModel.token = "";
    viewModel.UserData =
        {
            FirstName: "testFirstName",
            LastName: "testLastName",
            Email: "test@email.com",
            UserName: "testUserName",
            Password: "Pass_1",
            ConfirmPassword: "Pass_1",
        };

    viewModel.RegisterUser = function (callBack) {
        $http.post("/api/account/register", viewModel.UserData).success(function (data) {
            callBack(data);
        });
    };

    viewModel.LoginUser = function (callBack) {
        // Format the URL string.
        urlParams = "grant_type=password&username=" + viewModel.UserData.UserName + "&password=" + viewModel.UserData.Password;

        $http.post("/token", urlParams, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function (data) {
            viewModel.token = data.access_token;
            viewModel.isLoggedIn = true;
            callBack(data);
        }).error(function (data) {
            var dadsf = 3;
        });
    };

    

    /*
        var _login = function (loginData) {

        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            _authentication.isAuth = true;
            _authentication.userName = loginData.userName;

            deferred.resolve(response);

        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });

        return deferred.promise;

    };
    */
    


    return viewModel;
    //        $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
});





gonnaWannaApp.factory("EventFactory", function ($http) {
    var eventFactory = this;

    eventFactory.GetAllEvents = function (callBack) {
        $http.get("/api/events").success(function (data) {
            callBack(data);
        });
    };

    eventFactory.GetEvent = function (eventID, callBack) {
        $http.get("/api/events/" + eventID).success(function (data) {
            callBack(data);
        });
    };

    return eventFactory;
});

gonnaWannaApp.factory("ChannelFactory", function ($http) {
    var channelFactory = this;

    channelFactory.GetAllChannels = function (callBack) {
        $http.get("/api/channels").success(function (data) {
            callBack(data);
        });
    };

    channelFactory.GetChannel = function (channelID, callBack) {
        $http.get("/api/channels/" + channelID).success(function (data) {
            callBack(data);
        });
    };

    return channelFactory;
});


gonnaWannaApp.factory("LocationFactory", function ($http) {
    var locationFactory = this;

    locationFactory.GetAllLocations = function (callBack) {
        $http.get("/api/locations").success(function (data) {
            callBack(data);
        });
    };

    locationFactory.GetLocation = function (locationID, callBack) {
        $http.get("/api/locations/" + locationID).success(function (data) {
            callBack(data);
        });
    };

    return locationFactory;
});


gonnaWannaApp.factory("SearchFactory", function ($http) {
    var searchFactory = this;

    searchFactory.SearchEventsAndChannels = function (searchQuery, callBack) {
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

    return searchFactory;
});