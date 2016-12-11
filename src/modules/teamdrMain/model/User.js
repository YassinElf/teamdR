'use strict';

angular.module('eklabs.angularStarterPack.teamdrMain')
    .factory('User', function($config,$http,$q){

        var uri = $config.get('api')+'/kebab2/';

        /**
         * Constructor
         * @param data
         * @constructor
         * Copyright Laurent Breda
         */
        var User  = function (data){
            if(data){
                this.id         = data.id;
                this.skills     = data.skills;
                this.lastname   = data.lastname;
                this.firstname  = data.firstname;
                this.photo      = data.photo;
                this.birthdate  = data.birthdate;
            }
        };

        User.prototype = Object.create({});
        User.prototype.constructor = User;

        User.prototype.getId = function(){
            return this.id;
        };

        User.prototype.get = function(id){

            var defer       = $q.defer(),
                accessUri   = uri + (id ? id : (this.id) ? this.id : undefined);
            $http.get(accessUri).then(function(response){
                defer.resolve(new User(response.data));
            },function(reason){
                defer.reject(reason)
            });

            return defer.promise;
        };

        return User;

    });