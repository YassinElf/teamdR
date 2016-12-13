'use strict';

angular.module('eklabs.angularStarterPack.teamdResultat')
    .directive('teamdResultat',function($log, $state, $http, Team, Teams){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/teamdResultat/directives/teamdr-resultat/teamdResultatView.html',
            scope : {
                user          : '=?',
                field         : '=?',
                skills        : '=?',
                searchResults : '=?',
                callback      : '=?'
            }, link : function(scope) {

                scope.searchDone = false;
                scope.showSpinner = true;


                scope.populateTeamFound = function(){
                    var teams = new Teams();
                    teams.fetch().then(function(){
                        scope.searchResults = teams.items;
                        scope.searchDone    = true;
                        scope.showSpinner   = false;
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