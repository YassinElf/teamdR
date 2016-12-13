'use strict';

angular.module('eklabs.angularStarterPack.teamdrTeamProfile')
    .directive('teamdrTeamProfile',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/teamdrTeamProfile/directives/teamdr-team-profile/teamdrTeamProfileView.html',
            scope : {
                currentUser : '=?',
                team        : '=?',
                callback    : '=?'
            }, link : function(scope) {

                scope.$watch('team', function(team){
                    console.log(team);
                    scope.team = team;
                    scope.team.projLeader.birthDate = moment(scope.team.projLeader.birthDate, 'MM-DD-YYYY').format('DD MMMM YYYY');
                    scope.team.users.map(function(user){
                       user.birthDate =  moment(user.birthDate, 'MM-DD-YYYY').format('DD MMMM  YYYY')
                    });
                });

                scope.$watch('currentUser', function(currentUser){
                    scope.user = currentUser;
                });



            }
        }
    })