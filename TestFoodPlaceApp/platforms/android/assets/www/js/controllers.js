var APIuserkey = '22df009baabd4fd3204b1ddfabb0ad70';
var APIquerykey = 'kuala lumpur';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $state, $ionicPopup, $timeout) {
    // Code Push access key: d-XsHC28OjjumBtjRun372-5HNW-Ekw9wOV4z
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      console.log('check for code push update');

      var vm = this;
      var deploymentKey = 'q8hz4ChBVHXZXMWWK2lEwMYe1ZGaEkw9wOV4z';
      vm.codePush = codePush;

      logRes = function (res) {
          console.log(res);
      }

      //codePush.getPendingPackage(function (update) {
      //        console.log(update);
      //});

      //vm.checkForUpdate = function () {
      //    debugger
      //    codePush.checkForUpdate(logRes, logRes, deploymentKey);

      //        //.catch(onError);
      //};

      vmsyncCallback = function (res) {
          console.log(res);
      }

      vm.sync = function () {
          debugger
          //codePush.sync(deploymentKey);
          codePush.sync(vmsyncCallback, { updateDialog: true }, deploymentKey);

              //.catch(onError);
      };

      var onError = function (error) {
          vm.error = error;
          console.log(error);
      };

      //vm.sync();

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
        $state.go('app.playlists');
    }, 1000);
  };

})

.controller('PlaylistsCtrl', function ($scope, $http, $log) {
  //$scope.playlists = [
  //  { title: 'Reggae', id: 1 },
  //  { title: 'Chill', id: 2 },
  //  { title: 'Dubstep', id: 3 },
  //  { title: 'Indie', id: 4 },
  //  { title: 'Rap', id: 5 },
  //  { title: 'Cowbell', id: 6 }
    //];
   

    $scope.moredata = false;
    debugger;
    $scope.loadMoreData = function () {
        //$scope.items.push({ id: $scope.items.length });
        //if ($scope.items.length == 100) {
        //    $scope.moredata = true;
        //}
        //$scope.$broadcast('scroll.infiniteScrollComplete');

       // $http({
       //     method: 'GET',
       //     url: 'https://developers.zomato.com/api/v2.1/search',
       //     headers: { 'user-key': APIuserkey },
       //     data: {
       //         "q": APIquerykey
       //     },
       // })
       //.then(function (res) {
       //    console.log(res);

       //    $scope.items = res.data;

       //    $scope.$broadcast('scroll.infiniteScrollComplete');
       //}, function (reason) {

       //    $log.info(reason);

        //});

        $scope.items = [
            { title: 'Item 1', id: 1, Content: 'Valid User 1' },
            { title: 'Item 2', id: 2, Content: 'Valid User 1' },
            { title: 'Item 3', id: 3, Content: 'Valid User 1' },
            { title: 'Item 4', id: 4, Content: 'Valid User 1' },
            { title: 'Item 5', id: 5, Content: 'Valid User 1' },
            { title: 'Item 6', id: 6, Content: 'Valid User 1' },
            { title: 'Item 7', id: 7, Content: 'Valid User 1' },
            { title: 'Item 8', id: 8, Content: 'Valid User 1' },
            { title: 'Item 9', id: 9, Content: 'Valid User 1' },
            { title: 'Item 10', id: 10, Content: 'Valid User 1' }
        ];

   
        if ($scope.items.length == 99 ) {
            $scope.moredata = true;
        }

        $scope.$broadcast('scroll.infiniteScrollComplete');
    }

    $scope.$on('$stateChangeSuccess', function () {
        $scope.loadMoreData();
    });

    $scope.items = [];
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {

});
