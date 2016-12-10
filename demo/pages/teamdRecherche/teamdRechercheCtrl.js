'use strict';

angular.module('demoApp')
    .controller('teamdRechercheCtrl', function($scope,$mdDialog){


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
            callback     : undefined
        },{
            /**
             * Case field informatique
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
            callback : {
                valid: function (searchValues) {

                }
            }
        }];

        $scope.chooseParams = function(index){
            // --- Define current status
            $scope.currentUser    = $scope.params[index].user;
            $scope.searchValues    = $scope.params[index].searchValues;
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
                link : 'pages/teamdRecherche/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive TeamdR Recherche'
            },{
                link : 'pages/teamdRecherche/code/params.json',
                language : 'json',
                title : 'Params available for the directive TeamdR Search'
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