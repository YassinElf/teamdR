'use strict';

angular.module('eklabs.angularStarterPack.teamdResultat')
    .directive('teamdResultat',function($log, $state){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/teamdResultat/directives/teamdr-resultat/teamdResultatView.html',
            scope : {
                user : '=?',
                searchValues : '=?',
                searchResults : '=?',
                callback : '=?'
            }, link : function(scope) {

                scope.$watch('searchResults', function(searchResults){
                   scope.searchResults = searchResults;
                });


            }
        }
    })