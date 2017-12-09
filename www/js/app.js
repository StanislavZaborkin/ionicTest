/**
 * Created by Станислав on 09.12.2017.
 */

angular.module('ionicApp', ['ionic'])

    .controller('AppCtrl', function($scope, $ionicModal) {

        $scope.listToDo = [
            {
                title: 'firstThing',
                description: 'to learn JS',
                started: false
            },
            {
                title: 'secondThing',
                description: 'to learn Angular',
                started: false
            }
        ];

        $scope.listDoing = [
            {
                title: 'thirdThing',
                description: 'to learn JS',
                started: true
            },
            {
                title: 'fourthThing',
                description: 'to learn Angular',
                started: true
            }
        ];

        $scope.listDone = [
            {
                title: 'fifthThing',
                description: 'to learn JS',
                started: true
            },
            {
                title: 'sixthThing',
                description: 'to learn Angular',
                started: true
            }
        ];

        $ionicModal.fromTemplateUrl('modal-template.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.addThing = function(u) {
            if (u.started === true) {
                $scope.listDoing.push({ title: u.title, description: u.description, started: u.started });
                $scope.modal.hide();
            }
            else {
                $scope.listToDo.push({ title: u.title, description: u.description, started: u.started });
                $scope.modal.hide();
            }
        };

    });