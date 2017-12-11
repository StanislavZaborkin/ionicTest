/**
 * Created by Станислав on 09.12.2017.
 */

angular.module('ionicApp', ['ionic'])

    .controller('AppCtrl', function($scope, $ionicModal) {
      $scope.listToDo = [
            {
                title: 'First thing to do',
                description: 'to learn JS',
                started: false,
                finished: false
            },
            {
                title: 'Second  thing to do',
                description: 'to learn AngularJS',
                started: false,
                finished: false
            }
        ];

        $scope.listDoing = [
            {
                title: 'Third thing to do',
                description: 'to learn HTTP-requests',
                started: 'Dec 10, 2017 2:30:59 PM',
                finished: false
            },
            {
                title: 'Fourth thing to do',
                description: 'to make first project using Ionic & AngularJS',
                started: 'Dec 10, 2017 4:40:59 PM',
                finished: false
            }
        ];

        $scope.listDone = [
            {
                title: 'Fifth thing to do',
                description: 'to learn HTML',
                started: 'Dec 9, 2017 1:26:49 PM',
                finished: 'Dec 10, 2017 2:30:59 PM',
                totalTime: 'Days: 1 Hours: 4 Minutes: 3 Seconds: 10'
            },
            {
                title: 'Sixth  thing to do',
                description: 'to learn CSS',
                started: 'Dec 10, 2017 2:28:29 PM',
                finished: 'Dec 10, 2017 2:30:59 PM',
                totalTime: 'Days: 0 Hours: 2 Minutes: 2 Seconds: 30'
            }
        ];

        /*$scope.obtained_array = [{
          title: '',
          description: ''
        }];*/

        $ionicModal.fromTemplateUrl('modal-template.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.addThing = function(u) {
            if (u.started === true) {
                $scope.listDoing.push({ title: u.title, description: u.description, started: new Date() });
                $scope.modal.hide();
            }
            else {
                $scope.listToDo.push({ title: u.title, description: u.description });
                $scope.modal.hide();
            }
        };


        $scope.addToDoingList = function(u) {
                $scope.listToDo.splice($scope.listToDo.indexOf(u), 1);
                $scope.listDoing.push({ title: u.title, description: u.description, started: new Date() });
                $scope.modal.hide();
        };

        $scope.addToDoneList = function(u) {
                $scope.end = new Date();

          $scope.listDoing.splice($scope.listDoing.indexOf(u), 1);

                $scope.totalTimes = ('Days: ' + (u.started.getDate() - $scope.end.getDate())*(-1) +
                ' Hours: ' + (u.started.getHours() - $scope.end.getHours())*(-1) +
                ' Minutes: ' + (u.started.getMinutes() - $scope.end.getMinutes())*(-1) +
                ' Seconds: ' + (u.started.getSeconds() - $scope.end.getSeconds())*(-1) );

                $scope.listDone.push({ title: u.title, description: u.description, started: u.started, finished: new Date(), totalTime: $scope.totalTimes });
                $scope.modal.hide();
        };

        $scope.deleteThing = function(u) {
            $scope.listToDo.splice($scope.listToDo.indexOf(u), 1);
        };

        // $scope.shit = function() {
        //   $scope.msgArray = [
        //     {
        //       title: 'First thing to do',
        //       description: 'to learn JS',
        //       started: false,
        //       finished: false
        //     }
        //   ];
        //   localStorage.setItem("testArr",JSON.stringify($scope.msgArray));
        //   $scope.obtained_array = localStorage.getItem("testArr");
        //
        //   console.log($scope.obtained_array);
        // };

        $scope.saveToLocal = function (i) {
          $scope.name = new Date();
          localStorage.setItem($scope.name,JSON.stringify(i));
          $scope.obtained_array = localStorage.getItem($scope.name);
          // set --> get --> parse --> set
          // потом записать все в переменную и через неё выводить в ng-repeat
          console.log($scope.obtained_array);
          $scope.modal.hide();
        }

    });
