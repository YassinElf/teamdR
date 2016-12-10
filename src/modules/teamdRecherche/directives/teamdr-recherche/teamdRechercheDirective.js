'use strict';

angular.module('eklabs.angularStarterPack.teamdRecherche')
    .directive('teamdRecherche',function($log, $http){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/teamdRecherche/directives/teamdr-recherche/teamdRechercheView.html',
            scope : {
                user : '=?',
                searchValues : '=?',
                callback : '=?'
            }, link : function(scope) {

                scope.$watch('searchValues', function(searchValues){
                    scope.searchValues = searchValues;
                });

                /**
                 * Default Actions
                 * @type {{onValid: default_actions.onValid}}
                 */
                var default_actions = {
                    onValid : function(searchValues){
                        $log.info('My search values are : ', searchValues)
                    }
                };

                /**
                 * Catch Callback
                 */
                scope.$watch('callback', function(callback) {
                    if(callback instanceof Object) {
                        scope.actions = angular.extend({},default_actions,callback);
                    } else {
                        scope.actions = default_actions;
                    }
                });

                scope.selectedComp = null;
                scope.searchComp = null;
                scope.skills = null;
                var allSkills = [
                    {
                        'name': 'Developpeur',
                        'type': 'Informatique'
                    },
                    {
                        'name': 'Manager',
                        'type': 'Informatique'
                    }
                ];
                scope.fields = [
                    {
                        'name': 'Informatique'
                    },
                    {
                        'name': 'Marketing'
                    }
                ];

                scope.transformChip = function(chip) {
                    if(angular.isObject(chip)){
                        return chip;
                    } else {
                        $http({
                            method: 'POST',
                            url: 'http://91.134.241.60:3080/resources/teamdr-skills',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: {
                                name: chip,
                                type: 'Inconnu'
                            }
                        }).then(function(response){
                            console.log('Successfully created '+ chip + ' chip');
                        }, function(response){
                            console.log('Error for chip' + chip + ' with response : ' + response);
                        });
                        return { name: chip, type: 'Inconnu' }
                    }
                };

                // Search for a skill within the skills array with the input string specified
                scope.searchFor = function(searchComp) {

                    var results = scope.skills.filter(function(skill){
                        return skill.name.toLowerCase().indexOf(searchComp.toLowerCase()) !== -1;
                    });
                    return results;
                };

                scope.loadSkills = function (){
                    var results = allSkills.filter(function(skill){
                        return skill.type === scope.searchValues.field.name;
                    });
                    scope.skills = results;

                };


            }
        }
    })