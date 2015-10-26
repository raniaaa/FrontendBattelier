angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state, events) {
  $scope.Go = function(){
console.log(events.all());

    $state.go("home");
  }
})

.controller('HomeCtrl', function($scope,events,$timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.firstColor = "#000000";
  var app1 = events.all();
console.log(app1);
if(app1.Type == 'Color'){

  $scope.firstColor= '#'+app1.content;
  $timeout(function(){
    $scope.firstColor = "#FF0000";
    $timeout(function(){
      $scope.firstColor = "#008000";

    },2000);
  },2000);
}

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

})

.controller('AccountCtrl', function($scope) {

});
