'use strict';

angular.module('eklabs.angularStarterPack.teamdRecherche')
    .directive('teamdRecherche',function($log, Skill, Skills){
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

                /**
                 * Get skills
                 * @type Skills
                 */
                var allSkills = new Skills();
                var loadSkills = function(){
                    allSkills.fetch().then(function(){
                        console.log(allSkills);
                    }, function(error){
                        console.log(error);
                    });
                };
                loadSkills();

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
                        console.log('else');
                        var chip = new Skill({ name: chip, type: 'Inconnu' });
                        chip.create();
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
                    var results = allSkills.items.filter(function(skill){
                        return skill.type === scope.searchValues.field.name;
                    });
                    scope.skills = results;
                    console.log(scope.skills);
                };


            }
        }
    })