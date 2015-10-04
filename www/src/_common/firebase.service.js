angular.module('starter').factory("FirebaseService"){

var ref = new Firebase('https://my-feedr.firebaseio.com/');

var syncObject = $firebaseObject(ref);

syncObject.$bindTo($scope, "data");
});