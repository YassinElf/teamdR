'use strict';

angular.module('demoApp')
    .controller('teamdrMainCtrl', function($scope,$mdDialog){


        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------

        $scope.params = [{
            /**
             * Default
             */
            case        : 'Default Case',
            user        : undefined,
            team        : undefined,
            callback    : undefined
        },{
            /**
             * Case user without team
             */
            case    : 'Case user',
            user    : {
                inTeam: true,
                name : 'Yassin',
                lastname : 'El Fahim',
                birthDate : "1995-12-04"
            },
            team    : undefined,
            callback : {
                valid: function (user) {
                    displayCode('onValid', user)
                }
            }
        },{
            /**
             * Case user with team
             */
            case: 'Case user with team',
            user: {
                inTeam: true,
                name: 'Yassin',
                lastname: 'El Fahim',
                birthDate: "1995-12-04",
                skills: ['Leader', 'Javascript'],
                rating: 5
            },
            teams: [{
                size: 3,
                projName: "TeamdR",
                desc: "Besoin d'une équipe pour mener à bien un projet ? Envie de participer à un projet ? TeamdR est fait pour vous",
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
                projName: "TeamdR",
                desc: "Besoin d'une équipe pour mener à bien un projet ? Envie de participer à un projet ? TeamdR est fait pour vous",
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
            }],
            callback: {
                valid: function (user) {
                    displayCode('onValid', user)
                }
            }
        }];

        $scope.chooseParams = function(index){
            // --- Define current status
            $scope.currentUser    = $scope.params[index].user;
            $scope.currentUserTeam    = $scope.params[index].team;
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
                link : 'pages/teamdrMain/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive TeamdRMain'
            },{
                link : 'pages/teamdrMain/code/params.json',
                language : 'json',
                title : 'Params available for the directive TeamdRMain'
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