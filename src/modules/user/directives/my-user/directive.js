'use strict';

angular.module('eklabs.angularStarterPack.user')
    .directive('myUser',function(){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/user/directives/my-user/view.html',
            scope : {
                user : '=?',
                callback : '=?'
            },link : function(scope){
                
            }
        }
    })