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

                scope.$watch('field', function(field){
                    scope.field = field;
                });

                scope.$watch('skills', function(skills){
                    scope.skills = skills;
                });

                scope.populateTeamFound = function(){
                    var teams = new Teams();
                    teams.fetch().then(function(){
                        scope.searchResults = [];
                        // Fonction compliquée car librairie underscore.js ne veut pas se lancer
                        teams.items.map(function(team){
                            team.skillsNeed.map(function(teamSkill){
                                console.log(teamSkill);
                                scope.skills.map(function(skill){
                                    console.log(skill);
                                    if(teamSkill.field == skill.type && teamSkill.name == skill.name){
                                        console.log('here');
                                        scope.searchResults.push(team);
                                    }
                                });
                            });
                        });
                        scope.searchDone    = true;
                        scope.showSpinner   = false;
                    }, function(error){
                        console.log(error);
                    });
                };

                scope.populateTeamFound();

                scope.sendTeamProfile = function(team){

                    scope.$emit('teamProfileResult', team);

                };

            }
        }
    })