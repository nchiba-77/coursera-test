(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.myuser ={};
  //myuser.firstname = 'Norie';

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavDish = function (name) {
    return $http.get(ApiPath + '/menu_items/' + name + '.json').then(function (response) {
      return response.data;
    });
  };
  service.setUser = function (user, test) {
    console.log("setting user1=" + user.firstname);
    console.log("setting test=" + test);
    service.myuser = user;
    console.log("setting user2=" + service.myuser.firstname);
  };

  service.getUser = function () {
    console.log("getting user=" + service.myuser.firstname);
    return service.myuser;
  };

}



})();
