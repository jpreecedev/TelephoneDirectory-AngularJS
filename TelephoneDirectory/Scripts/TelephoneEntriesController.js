(function () {

    var app = angular.module("telephoneDirectory");

    var TelephoneEntriesController = function ($scope, webService) {

        $scope.add = function () {
            webService.addEntry($scope.entry);
        };

        $scope.edit = function () {

        };

        $scope.delete = function () {
            webService.deleteEntry($scope.entry);
        };

        $scope.reset = function () {

        };

    };

    app.controller("TelephoneEntriesController", TelephoneEntriesController);

}());