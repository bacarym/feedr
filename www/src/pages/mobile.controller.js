"use strict";

angular.module('starter').controller("FeedControllerMobile", function($http, $scope,$q) {
 
//list = ["http://www.frenchweb.fr/feed/","http://feeds.feedburner.com/Maddyness","http://www.emarketinglicious.fr/feed"]

    var list = [
            {
                name:'Service Mobile',
                url: "http://www.servicesmobiles.fr/feed/",
                entries:[]
            },
            {
                name:'AppDays',
                url: "http://appdays.fr/news/feed",
                entries:[]

            },
            {
                name:'Viuz',
                url: "http://www.viuz.com/category/mobile/feed/",
                entries:[]
            },
            ];

$scope.init = function() {

        var i = 0;
        function loadNextFeed(){

            $http.jsonp("//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + 10 + "&callback=JSON_CALLBACK&q="+list[i].url)
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

