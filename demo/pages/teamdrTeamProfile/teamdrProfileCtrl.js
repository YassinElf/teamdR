'use strict';

angular.module('demoApp')
    .controller('teamdProfileCtrl', function($scope,$mdDialog){


        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------

        $scope.params = [{
            /**
             * Default
             */
            case         : 'Default Case',
            user         : undefined,
            searchValues : { field: '', skills: [] },
            searchResults: undefined,
            callback     : undefined
        },{
            /**
             * Case field informatique with results
             */
            case    : 'Case field informatique',
            user    : {
                inTeam: true,
                name : 'Yassin',
                lastname : 'El Fahim',
                birthDate : "1995-12-04",
                skills: ['Developpeur', 'Manager'],
                rating: 5
            },
            searchValues : {
                field : { name: "Informatique"},
                skills: [{ name: 'Developpeur', type: 'Informatique'}]
            },
            searchResults : {
                teams: [{
                    size: 3,
                    projName: "TeamdR",
                    desc: "Besoin d'une équipe pour mener à bien un projet ? Envie de participer à un projet ? TeamdR est fait pour vous",
                    icon: "https://freeiconshop.com/files/edd/many-people-solid.png",
                    users: [{
                        inTeam: true,
                        name: 'Yassin',
                        lastname: 'El Fahim',
                        birthDate: "1995-12-04",
                        skills: ['Leader', 'Javascript']
                    }, {
                        inTeam: true,
                        name: 'Atilla',
                        lastname: 'Topo',
                        birthDate: "1995-12-04",
                        skills: ['Leader', 'Javascript']
                    }, {
                        inTeam: true,
                        name: 'Leslie',
                        lastname: 'Zanon',
                        birthDate: "1995-12-04",
                        skills: ['Leader', 'Javascript']
                    }
                    ]
                }, {
                    size: 3,
                    projName: "Tesla France",
                    desc: "Le futur, c'est Mars.",
                    icon: "http://cdn.quotesgram.com/small/60/18/2145568946-06-mars-icon.png",
                    users: [{
                        inTeam: true,
                        name: 'Yassin',
                        lastname: 'El Fahim',
                        birthDate: "1995-12-04",
                        skills: ['Leader', 'Javascript']
                    }, {
                        inTeam: true,
                        name: 'Atilla',
                        lastname: 'Topo',
                        birthDate: "1995-12-04",
                        skills: ['Leader', 'Javascript']
                    }, {
                        inTeam: true,
                        name: 'Leslie',
                        lastname: 'Zanon',
                        birthDate: "1995-12-04",
                        skills: ['Leader', 'Javascript']
                    }]
                }]},
            callback : {
                valid: function (searchValues) {

                }
            }
        },{
            /**
             * Case field informatique withtout results
             */
            case    : 'Case field informatique',
            user    : {
                inTeam: true,
                name : 'Yassin',
                lastname : 'El Fahim',
                birthDate : "1995-12-04",
                skills: ['Developpeur', 'Manager'],
                rating: 5
            },
            searchValues : {
                field : { name: "Informatique"},
                skills: [{ name: 'Developpeur', type: 'Informatique'}]
            },
            searchResults : {
                teams: []
            },
            callback : {
                valid: function (searchValues) {

                }
            }
        }];

        $scope.chooseParams = function(index){
            // --- Define current status
            $scope.currentUser    = $scope.params[index].user;
            $scope.searchValues    = $scope.params[index].searchValues;
            $scope.searchResults    = $scope.params[index].searchResults;
            $scope.myCallback = $scope.params[index].callback;

            $scope.index          = index;
            $scope.refresh        = moment().valueOf();
            $scope.haveResult     = false;
        };

        // --- Init
        $scope.chooseParams(0);

        // --- Update result viewer
        var displayCode = function(from,code,isError){

            $scope.haveResult   = true;

            $scope.result       = {
                code : code,
                isError : isError,
                title : from
            };
        };
        // ----------------------------------------------------------------------------------------------------
        // ---- DISPLAY CODE MODE
        // ----------------------------------------------------------------------------------------------------
        $scope.displayCode  = false;
        $scope.maxHeight    = $(window).height() - 250;

        $scope.showCode = function(){
            $scope.displayCode = !$scope.displayCode;
        };

        /**
         * Page description
         * @type {{title: string, icon: string, haveCodeSource: boolean}}
         */
        $scope.page         = {
            title : 'Directive TeamdR',
            haveCodeSource : true,
            code : [{
                link : 'pages/teamdProfile/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive TeamdR Profil'
            },{
                link : 'pages/teamdProfile/code/params.json',
                language : 'json',
                title : 'Params available for the directive TeamdR Profile consultation'
            }]
        };

        /**
         * MODE Fullscreen
         */
        $scope.fullScreenMode = true;
        $scope.hideParams     = false;
        $scope.fullScreen = function(){
            $scope.hideParams = !$scope.hideParams;
        };

    });