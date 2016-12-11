'use strict';

angular.module('demoApp')
    .controller('teamdrTeamProfileCtrl', function($scope,$mdDialog,$stateParams,$state){

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