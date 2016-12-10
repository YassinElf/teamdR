'use strict';

angular.module('demoApp')
    
    .controller('appCtrl', function($scope, $timeout, $mdSidenav, $log,$http,$state){

        // ----- FROM MATERIAL ANGULAR
        $scope.toggleRight = buildToggler('right');

        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        //$log.debug("toggle " + navID + " is done");
                    });
            }
        }
        // ----- FROM MATERIAL ANGULAR
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    //$log.debug("close RIGHT is done");
                });
        };

        // -----HOMEMADE
        $http.get('data/pages.json').then(function(response){
            $scope.pages = response.data;
        });

        $scope.goTo = function(state){
            $scope.close();
            $state.transitionTo(state);
        };

        moment.locale('en', {
            months : ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
        });
    });
    
