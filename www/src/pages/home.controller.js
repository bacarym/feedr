"use strict";

angular.module('starter').controller("FeedController", function($http, $scope,$q) {
 
//list = ["http://www.frenchweb.fr/feed/","http://feeds.feedburner.com/Maddyness","http://www.emarketinglicious.fr/feed"]

    var list = [
            {
                name:'Frenchweb',
                url: "http://www.frenchweb.fr/feed/",
                entries:[]
            },
            {
                name:'Maddyness',
                url: "http://feeds.feedburner.com/Maddyness",
                entries:[]

            },
            {
                name:'Emarketinglicious',
                url: "http://www.emarketinglicious.fr/feed",
                entries:[]
            },
            ];

$scope.init = function() {

        var i = 0;
        function loadNextFeed(){

            $http.jsonp("//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + 5 + "&callback=JSON_CALLBACK&q="+list[i].url)
            .then(function(value){
                list[i].data = value.data.responseData.feed;    
                i++;

                if(i<list.length){
                    loadNextFeed();
                }else{
                    $scope.entries = list;
                    console.log(list)
                }
            });
        }
        loadNextFeed();
    }

$scope.browse = function(v) {
    window.open(v, "_system", "location=yes");
}

});

