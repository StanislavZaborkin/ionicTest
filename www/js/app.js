/**
 * Created by Станислав on 09.12.2017.
 */

angular.module('ionicApp', ['ionic'])

    .controller('AppCtrl', function($scope, $ionicModal) {

        $scope.listToDo = [
            {
                title: 'firstThing',
                description: 'to learn JS',
                started: false,
                finished: false
            },
            {
                title: 'secondThing',
                description: 'to learn Angular',
                started: false,
                finished: false
            }
        ];

        $scope.listDoing = [
            {
                title: 'thirdThing',
                description: 'to learn JS',
                started: 'Dec 10, 2017 2:30:59 PM',
                finished: false
            },
            {
                title: 'fourthThing',
                description: 'to learn Angular',
                started: 'Dec 10, 2017 4:40:59 PM',
                finished: false
            }
        ];

        $scope.listDone = [
            {
                title: 'fifthThing',
                description: 'to learn JS',
                started: true,
                finished: true,
                totalTime: ''
            },
            {
                title: 'sixthThing',
                description: 'to learn Angular',
                started: true,
                finished: true,
                totalTime: ''
            }
        ];

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
                $scope.listToDo.pop(u);
                $scope.listDoing.push({ title: u.title, description: u.description, started: new Date() });
                $scope.modal.hide();
            //alert('Moved to doing');

        };

        $scope.addToDoneList = function(u) {
                $scope.end = new Date();

                $scope.listDoing.pop(u);

                $scope.totalTimes = ('Total time spent: ' + 'Days: ' + (u.started.getDate() - $scope.end.getDate())*(-1) +
                ' Hours: ' + (u.started.getHours() - $scope.end.getHours())*(-1) +
                ' Minutes: ' + (u.started.getMinutes() - $scope.end.getMinutes())*(-1) +
                ' Secondsssssssss: ' + (u.started.getSeconds() - $scope.end.getSeconds())*(-1) );

                $scope.listDone.push({ title: u.title, description: u.description, started: u.started, finished: new Date(), totalTime: $scope.totalTimes });
                $scope.modal.hide();

        };

        /*$scope.A = function(){
            $scope.button_A = new Date();
        };
        $scope.B = function(){
            $scope.button_B = new Date();

            $scope.totalTime = ('Total time spent: ' + 'Days: ' + ($scope.button_A.getDay() - $scope.button_B.getDay())*(-1) +
            ' Hours: ' + ($scope.button_A.getHours() - $scope.button_B.getHours())*(-1) +
            ' Minutes: ' + ($scope.button_A.getMinutes() - $scope.button_B.getMinutes())*(-1) +
            ' Seconds: ' + ($scope.button_A.getSeconds() - $scope.button_B.getSeconds())*(-1) );
        };*/

    });