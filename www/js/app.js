/**
 * Created by Станислав on 09.12.2017.
 */

angular.module('ionicApp', ['ionic'])

  .controller('AppCtrl', function($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('modal-template.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.addToDoingList = function(u) {
      $scope.arrr.splice($scope.arrr.indexOf(u), 1);
      $scope.arrr.push({ title: u.title, description: u.description, started: new Date() });
      localStorage.setItem('list', JSON.stringify($scope.arrr));
    };

    $scope.addToDoneList = function(u) {

       $scope.end = new Date();
       $scope.start = new Date(u.started);
       $scope.totalTimes = ('Days: ' + Math.abs($scope.start.getDate() - $scope.end.getDate()) +
       ' Hours: ' + Math.abs($scope.start.getHours() - $scope.end.getHours()) +
       ' Minutes: ' + Math.abs($scope.start.getMinutes() - $scope.end.getMinutes()) +
       ' Seconds: ' + Math.abs($scope.start.getSeconds() - $scope.end.getSeconds()) );
       $scope.arrr.splice($scope.arrr.indexOf(u), 1);
       $scope.arrr.push({ title: u.title, description: u.description, started: u.started, finished: new Date(), totalTime: $scope.totalTimes });
       localStorage.setItem('list', JSON.stringify($scope.arrr));
    };

    $scope.deleteThing = function(u) {
      $scope.arrr.splice($scope.arrr.indexOf(u), 1);
      localStorage.setItem('list', JSON.stringify($scope.arrr));
    };

    if (!localStorage.length) {
      $scope.arrr = [];
      localStorage.setItem('list', JSON.stringify($scope.arrr));
    }
    else {
      $scope.arrr = JSON.parse(localStorage.getItem('list'));
    }

    $scope.saveToLocal = function (i) {

      if (i.started != null) {
        $scope.arrr.push({title: i.title, description: i.description, started: new Date()});
        localStorage.setItem('list', JSON.stringify($scope.arrr));
        $scope.modal.hide();
      }
      else {
        $scope.arrr.push({title: i.title, description: i.description});
        localStorage.setItem('list', JSON.stringify($scope.arrr));
        $scope.modal.hide();
      }
    };
  });
