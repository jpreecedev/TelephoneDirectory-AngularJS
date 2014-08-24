(function () {

    var dataservice = function ($http) {

        var deleteEntry = function (entry) {
            return $http.delete("/api/Data/" + entry.id)
            .then(function (response) {
                return response.data;
            });
        };

        var getEntries = function () {
            return $http.get("/api/Data")
                .then(function (response) {
                    return response.data;
                });
        };

        var addEntry = function (entry) {
            return $http.post('/api/Data', entry)
                .then(function (response) {
                    return response.data;
                });
        };

        var editEntry = function (entry) {

        };

        return {
            deleteEntry: deleteEntry,
            getEntries: getEntries,
            addEntry: addEntry,
            editEntry: editEntry
        };
    };

    var module = angular.module("telephoneDirectory");
    module.factory("dataservice", dataservice);

}());