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
  var boucle = false;
  var i =0;
  $scope.firstColor = "#000000";
  var app1 = events.all();
console.log(app1);
if(app1.Type == 'Color'){

  $scope.firstColor= '#'+app1.content;
  $timeout(function(){
    $scope.firstColor= '#FFFF00';
    $timeout(function(){
      $scope.firstColor= '#FF0000';
    },2000);
  },2000);
}else if(app1.Type =='Image'){
  $scope.firstColor ='url("img/'+app1.content+'") no-repeat ';
}
  while (boucle = false) {
    i++;
    $scope.firstColor = "#000000";
    var app1 = events.all();
  console.log(app1);
  if(app1.Type == 'Color'){

    $scope.firstColor= '#'+app1.content;
    $timeout(function(){
      $scope.firstColor= '#FFFF00';
      $timeout(function(){
        $scope.firstColor= '#FF0000';
      },2000);
    },2000);
  }else if(app1.Type =='Image'){
    $scope.firstColor ='url("img/'+app1.content+'") no-repeat ';
  }
  console.log('______________________'+i);
  console.log('+++++++++++++++++++'+boucle);
if(i >10){
  boucle = true;
}else{
  boucle = false;
}


}








})

.controller('LoginCtrl', function($scope) {
  Ionic.io();

var push = new Ionic.Push({
  "debug": true,
  "onNotification": function(notification) {
    var payload = notification.payload;
console.log(JSON.stringify(notification));
    var alarmTime = new Date();
    alarmTime.setSeconds(alarmTime.getSeconds() + 10);
    $cordovaLocalNotification.add({
        id: "12234",
        date: alarmTime,
        message: notification.message,
        title: notification.title,
        autoCancel: true,
        sound: null
    }).then(function () {
      console.log("The notification has been set");
    });
  },
  "onRegister": function(data) {
    $scope.token = data.token
    alert(data.token);
  }
});

  push.register(function(token) {
  // Log out your device token (Save this!)
  console.log("Got Token:",token.token);
});
$scope.Register = function(firstname, lastname, email, token){
console.log(firstname+'   '+lastname+'    '+email+'  '+token);
};
})

.controller('SynchroCtrl', function($scope,$ionicLoading,Tockens,$state ) {

  $ionicLoading.show({
       template: 'Vérification des données'

     });
     if(Tockens.checkTocken(1)){
       $ionicLoading.hide();
    $state.go("dash");
     }else{
       $ionicLoading.hide();
      $state.go("login");
     }

});
