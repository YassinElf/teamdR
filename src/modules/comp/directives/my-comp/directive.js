'use strict';

angular.module('eklabs.angularStarterPack.comp')
    .directive('myComp',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/comp/directives/my-comp/view.html',
            scope : {
                user : '=?',
                callback : '=?'
            },link : function(scope){


                /**
                 *
                 */
                scope.$watch('callback',function(callback){
                    $log.info('Check callback',callback);

                    if(callback && callback.valid){
                        scope.isEditable = true;
                    }else{
                        scope.isEditable = false;
                    }
                });

                scope.$watch('user',function(user){
                    $log.info('test user change',user);
                    if(user){
                        scope.user.birthDate = new Date(user.birthDate);
                    }else{
                        scope.user = undefined;
                    }

                });

                /**
                 *
                 */
                scope.isModeEdition = false;
                scope.goToEdition = function(){
                    scope.isModeEdition = !scope.isModeEdition;
                    scope.userEdit = (JSON.parse(JSON.stringify(scope.user)));
                };

                /**
                 *
                 */
                scope.valid = function(user){
                    scope.isModeEdition = !scope.isModeEdition;
                    scope.user = angular.extend({},scope.userEdit);
                    scope.callback.valid(user);
                }


            }
        }
    })
