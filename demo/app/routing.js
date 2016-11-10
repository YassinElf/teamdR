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
            url : '/teamdr/home',
            controller : 'teamdrMainCtrl',
            templateUrl : "pages/teamdrMain/teamdrMainView.html"
        })

        .state('teamdRecherche', {
            url : '/teamdr/recherche',
            controller : 'teamdRechercheCtrl',
            templateUrl : "pages/teamdRecherche/teamdRechercheView.html"
        })

        .state('teamdResultat', {
            url : '/teamdr/resultats',
            controller : 'teamdResultatCtrl',
            templateUrl : "pages/teamdResultat/teamdResultatView.html"
        })

        .state('teamdrTeamProfile', {
            url : '/teamdr/team-profile',
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