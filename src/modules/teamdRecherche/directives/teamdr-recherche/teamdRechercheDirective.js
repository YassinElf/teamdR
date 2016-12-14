'use strict';

angular.module('eklabs.angularStarterPack.teamdRecherche')
    .directive('teamdRecherche',function($log, Skill, Skills){
        return {
            //require: '^teamdrMain',
            templateUrl : 'eklabs.angularStarterPack/modules/teamdRecherche/directives/teamdr-recherche/teamdRechercheView.html',
            scope : {
                user            : '=?',
                searchValues    : '=?',
                callback        : '=?'
            }, link : function(scope) {

                scope.$watch('searchValues', function(searchValues){
                    scope.searchValues = searchValues || {fields : [], skills : []};
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
                scope.skills = [];

                /**
                 * Get skills
                 * @type Skills
                 */
                var allSkills = new Skills();
                var loadSkills = function(){
                    allSkills.fetch().then(function(){
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
                        var newSkill = new Skill({ name: chip, type: scope.searchValues.field.name });
                        newSkill.create().then(function(){
                            console.log('Success');
                        },function(error){
                            console.log('Error');
                            console.log(error);
                        });
                        Skill.create();
                        return { name: chip, type: scope.searchValues.field.name };
                    }
                };

                // Search for a skill within the skills array with the input string specified
                scope.searchFor = function(searchComp) {

                    var results = scope.skills.filter(function(skill){
                        return skill.name.toLowerCase().indexOf(searchComp.toLowerCase()) !== -1;
                    });
                    return results;
                };

                scope.loadRightSkills = function (){
                    var results = allSkills.items.filter(function(skill){
                        return skill.type === scope.searchValues.field.name;
                    });
                    results.map(function(item){
                        scope.skills.push({ name: item.name, type: item.type });
                    });
                };


            }
        }
    })