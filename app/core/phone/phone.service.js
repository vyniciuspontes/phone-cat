(function () {

    function factoryPhoneService($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {phoneId: 'phones'},
                isArray: true
            }
        });
    }

    factoryPhoneService.$inject = ['$resource'];

    angular.module('core.phone').factory('Phone', factoryPhoneService);

})();