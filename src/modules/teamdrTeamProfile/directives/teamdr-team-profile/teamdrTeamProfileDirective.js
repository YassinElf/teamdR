'use strict';

angular.module('eklabs.angularStarterPack.teamdrTeamProfile')
    .directive('teamdrTeamProfile',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/teamdrTeamProfile/directives/teamdr-team-profile/teamdrTeamProfileView.html',
            scope : {
                currentUser : '=?',
                team : '=?',
                callback : '=?'
            }, link : function(scope) {

                scope.$watch('team', function(team){
                    scope.team = team;
                });

                scope.$watch('currentUser', function(currentUser){
                    scope.user = currentUser;
                });


            }
        }
    })