'use strict';

angular.module('eklabs.angularStarterPack.teamdrMain')
    .directive('teamdrMain',function($log, User){
        return {
            //restrict: 'E',
            templateUrl : 'eklabs.angularStarterPack/modules/teamdrMain/directives/teamdr-main/teamdrMainView.html',
            scope : {
                user : '=?',
                team : '=?',
                callback : '=?'
            }, link : function(scope){

                scope.user          = new User();
                scope.searchMode    = true;
                scope.resultsMode   = false;
                scope.profileMode   = false;
                scope.searchValues  = null;
                scope.teamProfile   = null;

                // Load current user data
                var loadUser = function(id){
                    scope.user.get(id).then(function(response){
                        scope.user = response;
                    }, function(error){
                        alert(error);
                    });
                };

                loadUser('584c5e8fc4569917c0c47e32');

                // Get form data from teamdRecherche to parent directive
                // Set the mode from searchMode to resultsMode
                scope.$on('searchDone', function(event, data){
                    console.log('searchDone event');
                    scope.searchMode = false;
                    scope.resultsMode = true;
                    scope.searchValues = data.searchValues;
                });

                // Get team chosen by user from teamdResultat to parent directive
                // Set the mode from resultsMode to profileMode
                scope.$on('teamProfileResult', function(event, data){
                    scope.resultsMode = false;
                    scope.profileMode = true;
                    scope.teamProfile = data;
                });

                // Return to search results from teamdTeamProfile
                // Set the mode from profileMode to resultsMode
                scope.$on('returnToResults', function(){
                    scope.profileMode = false;
                    scope.resultsMode = true;
                });

                // Define menu
                scope.menu = [
                    {
                        link : '',
                        title: 'Paramètres',
                        icon: 'settings'
                    },
                    {
                        link : '',
                        title: 'Amis',
                        icon: 'people'
                    },
                    {
                        link : '',
                        title: 'Messages',
                        icon: 'email'
                    }
                ];

                // Define activities
                scope.dashboard = [
                    {
                        title : 'Trump président: Good news ou Bad news ?',
                        name: 'News',
                        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
                        type: 'priority_high'
                    },
                    {
                        title : 'Un anniversaire dans les jours prochains.',
                        name: 'Amis',
                        content: 'Souhaitez lui un joyeux anniversaire!',
                        type: 'priority_high'
                    },
                    {
                        title : 'Le saviez-vous : L\'eau froide',
                        name: 'Tips',
                        content: 'Il est plus rapide de refroidir de l\'eau chaude que de l\'eau froide!',
                        type: 'priority_high'
                    }
                ];
            }
        }
    })