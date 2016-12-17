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

                scope.user = new User();
                scope.searchMode = true;
                scope.resultsMode = false;
                scope.searchValues;

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
                    scope.searchMode = false;
                    scope.resultsMode = true;
                    scope.searchValues = data.searchValues;
                });


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
            }
        }
    })