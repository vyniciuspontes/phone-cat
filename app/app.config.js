(function () {

    function configRoutes($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/phones', {
            template: '<phone-list></phone-list>'
        }).when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).otherwise('/phones');
    }

    configRoutes.$inject = ['$locationProvider', '$routeProvider'];

    angular.module('phonecatApp').config(configRoutes);

})();