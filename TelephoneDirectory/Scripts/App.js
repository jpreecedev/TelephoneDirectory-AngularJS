﻿(function () {

    var app = angular.module("telephoneDirectory", ["ngRoute"]);

    app.config(function ($routeProvider) {

        $routeProvider.when("/main", {
            templateUrl: "main.html",
            controller: "MainController"
        })
        .otherwise({ redirectTo: "/main" });

    });

}());