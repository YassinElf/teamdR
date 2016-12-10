'use strict';

angular.module('eklabs.angularStarterPack.teamdResultat')
    .directive('teamdResultat',function($log, $state, $http){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/teamdResultat/directives/teamdr-resultat/teamdResultatView.html',
            scope : {
                user : '=?',
                field : '=?',
                skills : '=?',
                searchResults : '=?',
                callback : '=?'
            }, link : function(scope) {

                scope.searchDone = false;
                scope.showSpinner = true;

                scope.populateTeamFound = function(){
                    scope.searchDone = true;
                    scope.showSpinner = false;
                    $http({
                        method: 'GET',
                        url: 'http://91.134.241.60:3080/resources/teamdr-teams'
                    }).then(function(response){
                        scope.searchResults = response.data;
                    }, function(response){
                        alert('Failure' + response);
                    });
                };

                scope.populateTeamFound();

                scope.$watch('field', function(field){
                   scope.field = field;
                });

                scope.$watch('skills', function(skills){
                   scope.skills = skills;
                });

            }
        }
    })