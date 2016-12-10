'use strict';

angular.module('demoApp')
    .controller('teamdrTeamProfileCtrl', function($scope,$mdDialog,$stateParams,$state){

        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------

        $scope.params = [{
            /**
             * Default
             */
            case         : 'Default Case',
            user         : $stateParams.user,
            team         : $stateParams.team,
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
            team: {
                    size: 3,
                    projName: "TeamdR",
                    desc: "Besoin d'une équipe pour mener à bien un projet ? Envie de participer à un projet ? TeamdR est fait pour vous",
                    icon: "https://freeiconshop.com/files/edd/many-people-solid.png",
                    users: [{
                        inTeam: true,
                        name: 'Yassin',
                        lastname: 'El Fahim',
                        birthDate: "1995-12-04",
                        skills: [{ name: 'Leader', type: 'Genéral'}, { name: 'Javascript', type: 'Informatique'}]
                    }, {
                        inTeam: true,
                        name: 'Atilla',
                        lastname: 'Topo',
                        birthDate: "1995-12-04",
                        skills: [{ name: 'Leader', type: 'Genéral'}, { name: 'Javascript', type: 'Informatique'}]
                    }, {
                        inTeam: true,
                        name: 'Leslie',
                        lastname: 'Zanon',
                        birthDate: "1995-12-04",
                        skills: [{ name: 'Leader', type: 'Genéral'}, { name: 'Javascript', type: 'Informatique'}]
                    }]
            },
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
            }
        }];

        $scope.chooseParams = function(index){
            // --- Define current status
            $scope.currentUser    = $scope.params[index].user;
            $scope.team    = $scope.params[index].team;
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
            title : 'Directive TeamdR Team Profile ',
            haveCodeSource : true,
            code : [{
                link : 'pages/teamdrTeamProfile/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive TeamdR Profil'
            },{
                link : 'pages/teamdrTeamProfile/code/params.json',
                language : 'json',
                title : 'Params available for the directive TeamdR Profile consultation'
            }]
        };

        /**
         * MODE Fullscreen
         */
        $scope.fullScreenMode = true;
        $scope.hideParams     = true;
        $scope.fullScreen = function(){
            $scope.hideParams = !$scope.hideParams;
        };

    });