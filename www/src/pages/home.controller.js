"use strict";

angular.module('starter').controller("FeedController", function($http, $scope) {
 
    $scope.init = function() {

        $http.jsonp("//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + 10 + "&callback=JSON_CALLBACK&q="+"http://www.frenchweb.fr/feed/")

        //$http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0", "q": "http://www.frenchweb.fr/actualite/" } })
            .success(function(data) {
                
                console.log(data)
                $scope.rssTitle = data.responseData.feed.title;
                $scope.rssUrl = data.responseData.feed.feedUrl;
                $scope.rssSiteUrl = data.responseData.feed.link;
                $scope.entries = data.responseData.feed.entries;
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });
    }

   
});