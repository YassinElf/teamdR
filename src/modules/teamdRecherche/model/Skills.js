'use strict';

angular.module('eklabs.angularStarterPack.teamdRecherche')
    .factory('Skills', function($config,$http,$q, Skill){

        var uri = $config.get('api')+'/teamdr-skills/';

        var Skills  = function (data){
            this.ids = [];
            this.items = [];

            if(data){
                this.addItems(data);
            }
        };

        Skills.prototype = Object.create({});
        Skills.prototype.constructor = Skills;

        /**
         * Find all Skills from the database
         * @returns {*|jQuery.promise|promise.promise|Function|Promise}
         */
        Skills.prototype.fetch = function(){

            var defer = $q.defer(),
                self = this;

            $http.get(uri).then(function(response){
                self.addItems(response.data);
                defer.resolve();
            },function(reason){
                defer.reject(reason)
            });

            return defer.promise;
        };
        /**
         * Add users to our list
         * @param items
         */
        Skills.prototype.addItems = function(items){
            if(Array.isArray(items)){
                var self = this; // -- To keep the reference
                angular.forEach(items, function(item){
                    self.addItem(item);
                })
            } else{
                this.addItem(data);
            }
        };
        /**
         * Add a single skill
         * @param item
         */
        Skills.prototype.addItem = function(item){
            var skill = new Skill(item);
            // --- Check if not already into our items list
            if(skill.getId() && this.ids.indexOf(skill.getId()) == -1){
                this.ids.push(skill.getId());
                this.items.push(skill);
            }
        };

        /**
         * Check the data from the list
         * @returns {boolean}
         */
        Skills.prototype.isEmpty = function(){
            return this.ids.length == 0
        };

        // ------- RETURN THE OBJECT
        return Skills;

    });