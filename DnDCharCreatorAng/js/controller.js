var app = angular.module('myApp', []);

app.controller('personCtrl', function ($scope, $http) {
    $scope.firstName = "",
    $scope.lastName = "",
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    }
    $http.get("races.json")
        .then(function (response) {
            console.log("ww got it");
            $scope.bio = response.data.races.human.bio;
            $scope.racialBonus = response.races.human.racialBonus;
            $scope.speed = data.races.human.speed;
            test = $scope.bio
            $scope.myData = response.data.races;
        });
    });

    //var racesApp = angular.module('races', []);
    //var test = null;
    //racesApp.controller('customersCtrl', function ($scope, $http) {
    //    $http.get("races.json")
    //        .then(function (response) {
    //            console.log("ww got it");
    //        $scope.bio = response.data.races.human.bio;
    //        $scope.racialBonus = response.races.human.racialBonus;
    //        $scope.speed = data.races.human.speed;
    //        test = $scope.bio
    //        $scope.myData = response.data.races;
    //        });
    //    test;
    //});