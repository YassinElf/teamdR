'use strict';

angular.module('eklabs.angularStarterPack.teamdResultat')
    .directive('teamdResultat',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/teamdResultat/directives/teamdr-resultat/teamdResultatView.html',
            scope : {
                user : '=?',
                searchValues : '=?',
                searchResults : '=?',
                callback : '=?'
            }, link : function(scope) {

                scope.$watch('searchResults', function(searchResults){
                    console.log(searchResults);
                   scope.searchResults = searchResults;
                });
            }
        }
    })