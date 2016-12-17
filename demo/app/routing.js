'use strict';

angular.module('demoApp')
    .config(function ($urlRouterProvider, $stateProvider) {

    $stateProvider
        // ------------------------------------------------------------------------------------------------
        // HOMEPAGE - Init the current value
        // ------------------------------------------------------------------------------------------------
        .state('default', {
            url : '/',
            controller : 'homepageCtrl',
            templateUrl : "pages/_homepage/homepageView.html"
        })

        // ------------------------------------------------------------------------------------------------
        // DEMO EDITOR Component
        // ------------------------------------------------------------------------------------------------

        .state('jsonEditor', {
            url : '/json-editor',
            controller : 'demoEditorCtrl',
            templateUrl : "pages/demoEditor/demoEditorView.html"
        })

        .state('myForm', {
            url : '/my-form',
            controller : 'demoFormCtrl',
            templateUrl : "pages/demoform/demoFormView.html"
        })

        .state('teamdr', {
            url : '/teamdr',
            controller : 'teamdrMainCtrl',
            templateUrl : "pages/teamdrMain/teamdrMainView.html"
        })

        .state('teamdr.teamdRecherche', {
            //parent: 'teamdr',
            url : '/recherche',
            controller : 'teamdRechercheCtrl',
            templateUrl : "pages/teamdRecherche/teamdRechercheView.html"
        })

        .state('teamdr.teamdResultat', {
            //parent: 'teamdr',
            url : '/resultats',
            controller : 'teamdResultatCtrl',
            params: {
                user: null,
                skills: null,
                field: null
            },
            templateUrl : "pages/teamdResultat/teamdResultatView.html"
        })

        .state('teamdr.teamdrTeamProfile', {
           // parent: 'teamdr',
            url : '/team-profile',
            controller : 'teamdrTeamProfileCtrl',
            params: {
                user: null,
                team: null
            },
            templateUrl : "pages/teamdrTeamProfile/teamdrTeamProfileView.html"
        })


    ;



    
    $urlRouterProvider.otherwise('/');
});