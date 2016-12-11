'use strict';

angular.module('eklabs.angularStarterPack.teamdResultat')
    .factory('Team', function($config,$http,$q){

        var uri = $config.get('api')+'/teamdr-teams/';

        /**
         * Constructor
         * @param data
         * @constructor
         * Copyright Laurent Breda
         */
        var Team  = function (data){
            if(data){
                this.id         = data.id;
                this.icon       = data.icon;
                this.projLeader = data.projLeader;
                this.size       = data.size;
                this.name       = data.name;
                this.desc       = data.desc;
                this.users      = data.users;
                this.skillsNeed = data.skillsNeed;

            }
        };

        Team.prototype = Object.create({});
        Team.prototype.constructor = Team;

        Team.prototype.getId = function(){
            return this.id;
        };

        Team.prototype.get = function(id){

            var defer       = $q.defer(),
                accessUri   = uri + (id ? id : (this.id) ? this.id : undefined);

            $http.get(accessUri).then(function(response){
                defer.resolve(new Team(response.data));
            },function(reason){
                defer.reject(reason)
            });

            return defer.promise;
        };

        Team.prototype.create = function(){
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

        return Team;

    });