'use strict';

angular.module('demoApp')
    .controller('teamdResultatCtrl', function($scope,$mdDialog,$stateParams,$state){


        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------

        $scope.params = [{
            /**
             * Default
             */
            case         : 'Default Case',
            user         : $stateParams.user,
            field        : $stateParams.field,
            skills       : $stateParams.skills,
            searchResults: undefined,
            callback     : undefined
        },{
            /**
             * Case field informatique with results
             */
            case    : 'Case field informatique',

            callback : {
                valid: function () {

                }
            }
        },{
            /**
             * Case field informatique withtout results
             */
            case    : 'Case field informatique',

            callback : {
                valid: function (searchValues) {

                }
            }
        }];

        $scope.chooseParams = function(index){
            // --- Define current status
            $scope.currentUser    = $scope.params[index].user;
            $scope.field    = $scope.params[index].field;
            $scope.skills    = $scope.params[index].skills;
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
                link : 'pages/teamdResultat/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive TeamdR Resultat'
            },{
                link : 'pages/teamdResultat/code/params.json',
                language : 'json',
                title : 'Params available for the directive TeamdR Results'
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