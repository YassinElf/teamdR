'use strict';

angular.module('demoApp')
    .controller('demoUserCreateCtrl', function($scope,$mdDialog){


        // ----------------------------------------------------------------------------------------------------
        // ---- PARAMS CATALOGUE
        // ----------------------------------------------------------------------------------------------------

        $scope.params = [{
            /**
             * Default
             */
            case        : 'Default Case',
            user        : undefined,
            callback    : undefined
        },{
            /**
             * Case user
             */
            case       : 'Case user',
            user    : {
                name : 'Utilisateur en base',
                photo : 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/251752_2166271756724_2817236_n.jpg?oh=76a7411637758f0d009d098ba29d80c2&oe=58947A1F',
                birthDate : "1994-12-11",
                skills : [{ name: "AngularJS", type: 'Informatique' },
                          { name: "PHP", type: 'Informatique' },
                          { name: "HTML", type: 'Informatique' },
                          { name: "CSS", type: 'Informatique' },]
            },
            callback : {
                valid : function(user){
                    displayCode('onValid', user)
                }
            }
        }];

        $scope.chooseParams = function(index){
            // --- Define current status
            $scope.myUser    = $scope.params[index].user;
            $scope.myCallback = $scope.params[index].callback;

            $scope.index          = index;
            $scope.refresh        = moment().valueOf();
            $scope.haveResult     = false;
        };

        // --- Init
        $scope.chooseParams(1);

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
            title : 'directive my user create',
            haveCodeSource : true,
            code : [{
                link : 'pages/demoUserCreate/code/directive.html',
                language : 'html',
                title : 'Code HTML de la directive demo-user create'
            },{
                link : 'pages/demoUserCreate/code/params.json',
                language : 'json',
                title : 'Params available for the directive demo-user'
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
