'use strict';

angular.module('eklabs.angularStarterPack.teamdResultat')
    .factory('Teams', function($config,$http,$q, Team){

        var uri = $config.get('api')+'/teamdr-teams/';

        var Teams  = function (data){
            this.ids = [];
            this.items = [];

            if(data){
                this.addItems(data);
            }
        };

        Teams.prototype = Object.create({});
        Teams.prototype.constructor = Teams;

        /**
         * Find all Teams from the database
         * @returns {*|jQuery.promise|promise.promise|Function|Promise}
         */
        Teams.prototype.fetch = function(){

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
        Teams.prototype.addItems = function(items){
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
         * Add a single team
         * @param item
         */
        Teams.prototype.addItem = function(item){
            var team = new Team(item);
            // --- Check if not already into our items list
            if(team.getId() && this.ids.indexOf(team.getId()) == -1){
                this.ids.push(team.getId());
                this.items.push(team);
            }
        };

        /**
         * Check the data from the list
         * @returns {boolean}
         */
        Teams.prototype.isEmpty = function(){
            return this.ids.length == 0
        };

        // ------- RETURN THE OBJECT
        return Teams;

    });