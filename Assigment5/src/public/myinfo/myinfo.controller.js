(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    MyInfoController.$inject = ['MenuService'];
    
    function MyInfoController(MenuService) {
      var info = this;
      info.user =MenuService.getUser();
      console.log("info=" + info.user + " len is " + info.user.firstname);
      if (angular.equals(info.user, {})) {
      
        info.completed = false;
      }else {
        info.completed = true;
      }
      console.log("complete;" + info.completed);
      
      
    }
    
    
    })();
    