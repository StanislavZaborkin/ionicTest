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

        $scope.addThing = function(u) {
            if (u.started === true) {
                $scope.arrr.push({ title: u.title, description: u.description, started: new Date() });
                $scope.modal.hide();
            }
            else {
                $scope.arrr.push({ title: u.title, description: u.description });
                $scope.modal.hide();
            }
        };


        $scope.addToDoingList = function(u) {
                $scope.arrr.splice($scope.arrr.indexOf(u), 1);
                $scope.arrr.push({ title: u.title, description: u.description, started: new Date() });
                localStorage.setItem('list', JSON.stringify($scope.arrr));
        };

        $scope.addToDoneList = function(u) {

                // $scope.end = new Date();
                //
                // $scope.totalTimes = ('Days: ' + (u.started.getDate() - $scope.end.getDate())*(-1) +
                // ' Hours: ' + (u.started.getHours() - $scope.end.getHours())*(-1) +
                // ' Minutes: ' + (u.started.getMinutes() - $scope.end.getMinutes())*(-1) +
                // ' Seconds: ' + (u.started.getSeconds() - $scope.end.getSeconds())*(-1) );
                //
                // $scope.arrr.splice($scope.arrr.indexOf(u), 1);
                // $scope.arrr.push({ title: u.title, description: u.description, started: u.started, finished: new Date(), totalTime: $scope.totalTimes });
                // localStorage.setItem('list', JSON.stringify($scope.arrr));

              // прочитать про дейт на лерн джс. нужно перезаписать объекты в этой функции
        };

        $scope.deleteThing = function(u) {
            $scope.arrr.splice($scope.arrr.indexOf(u), 1);
            localStorage.setItem('list', JSON.stringify($scope.arrr));
        };


      $scope.arrr = JSON.parse(localStorage.getItem('list'));

        $scope.saveToLocal = function (i) {

          $scope.arrr.push({title: i.title, description: i.description});

          localStorage.setItem('list', JSON.stringify($scope.arrr));

          $scope.modal.hide();
        };
    });


