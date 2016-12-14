'use strict';

angular.module('eklabs.angularStarterPack.teamdRecherche')
    .factory('Skill', function($config,$http,$q){

        var uri = $config.get('api')+'/teamdr-skills/';

        /**
         * Constructor
         * @param data
         * @constructor
         * Copyright Laurent Breda
         */
        var Skill  = function (data){
            if(Object.keys(data).length == 3){
                this.name       = data.name;
                this.id         = data.id;
                this.type       = data.type;
            } else if(Object.keys(data).length == 2){
                this.name       = data.name;
                this.type       = data.type;
                this.id         = null;
            }
        };

        Skill.prototype = Object.create({});
        Skill.prototype.constructor = Skill;

        Skill.prototype.getId = function(){
            return this.id;
        };

        Skill.prototype.get = function(id){

            var defer       = $q.defer(),
                accessUri   = uri + (id ? id : (this.id) ? this.id : undefined);

            $http.get(accessUri).then(function(response){
                defer.resolve(new Skill(response.data));
            },function(reason){
                defer.reject(reason)
            });

            return defer.promise;
        };

        Skill.prototype.create = function(){
            var self = this,
                defer = $q.defer();

            $http.post(uri, this).then(function(response){
                self.id = response.data.id;
                defer.resolve(self);
            },function(reason){
                defer.reject(reason)
            });

            return defer.promise;

        };

        return Skill;

    });