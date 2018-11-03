(function() {

    function phoneDetailController($routeParams, Phone){
        var self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
        };

    }

    phoneDetailController.$inject = ['$routeParams', 'Phone'];

    angular.module('phoneDetail').controller('PhoneDetailController', phoneDetailController);

})();