'use strict';

angular.module('eklabs.angularStarterPack.teamdrMain')
    .directive('teamdrMain',function($log, User){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/teamdrMain/directives/teamdr-main/teamdrMainView.html',
            scope : {
                user : '=?',
                team : '=?',
                callback : '=?'
            }, link : function(scope){

                scope.user = new User();

                var loadUser = function(id){
                    scope.user.get(id).then(function(response){
                        scope.user = response;
                    }, function(error){
                        alert(error);
                    });
                };

                loadUser('584c5e8fc4569917c0c47e32');

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