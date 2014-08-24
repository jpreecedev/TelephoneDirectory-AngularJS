(function () {

    var app = angular.module("telephoneDirectory");

    var MainController = function ($scope, dataservice) {

        $scope.selectedEntry = null;
        $scope.entries = {};

        dataservice.getEntries().then(function(data) {
            $scope.entries = data;
        });
        
        $scope.edit = function(entry) {
            $scope.selectedEntry = entry;
        }

        $scope.delete = function(entry) {
            dataservice.deleteEntry(entry).then(function () {
                var index = $scope.entries.indexOf(entry);
                if (index > -1) {
                    $scope.entries.splice(index, 1);
                }
            });
        }

        $scope.submit = function () {
            dataservice.addEntry($scope.selectedEntry).then(function(data) {
                $scope.entries.push(data);
                $scope.selectedEntry = null;
            });

        }
    };

    app.controller("MainController", MainController);

}());