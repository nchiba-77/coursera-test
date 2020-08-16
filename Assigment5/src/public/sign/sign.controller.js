(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignController', SignController);
    SignController.$inject = ['MenuService'];
    
    function SignController(MenuService) {
      var reg = this;
      reg.user ={};
      //reg.dish = "";
      reg.completed = false;
      reg.msg = true;
      reg.submit = function () {
        console.log(reg.user); 
        
        var promise = MenuService.getFavDish(reg.user.shortname);
            promise.then( function success(response) {
              console.log("Data" + response.name);
              reg.completed = true;
              MenuService.setUser(reg.user, 'test1');
              reg.user.dish= response.name;

        }).catch(function (error) {
          console.log("Something went terribly wrong.");
          reg.completed = false;
          reg.msg = false;
        });
      }
    }
  })();
    