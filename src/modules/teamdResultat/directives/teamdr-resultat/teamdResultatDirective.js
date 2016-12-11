'use strict';

angular.module('eklabs.angularStarterPack.teamdResultat')
    .directive('teamdResultat',function($log, $state, $http, Team){
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
                    scope.searchResults = new Team();
                    scope.searchResults.fetch().then(function(response){
                        scope.showSpinner = false;
                    }, function(error){
                        console.log(error);
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