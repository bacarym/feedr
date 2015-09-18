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



        for (var i = 0; i < list.length; i++) { 

            var url = list[i].url;

            var promise = $q.defer();
        list[i].entries =  $http.jsonp("//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + 10 + "&callback=JSON_CALLBACK&q="+url)
         .success(function(data) {
                
            
                //$scope.rssTitle = data.responseData.feed.title;
                //$scope.rssUrl = data.responseData.feed.feedUrl;
                //$scope.rssSiteUrl = data.responseData.feed.link;
     console.log(" data.responseData.feed.entries: " ,  data.responseData.feed);
                 promise.resolve(data.responseData);
                 return promise;
                
            }).then(function(data){
                console.log("then ",data.responseData);
         });
            /*.catch(function(data) {
                console.log("ERROR: " + data);
            });*/

            console.log(list[i].entries);

        
      


        }

              $scope.entries = list;




    }

   
});