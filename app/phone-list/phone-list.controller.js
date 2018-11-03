(function () {
    'use strict';

    function PhoneListController(Phone) {

        this.phones = Phone.query();
        this.orderProp = 'age';
    }

    PhoneListController.$inject = ['Phone'];

    angular.module('phoneList').controller('PhoneListController', PhoneListController);

})();