(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);


ShoppingListService.$inject = ['$q', '$timeout', '$http']
function ShoppingListService($q, $timeout, $http) {
  var service = this;

  // List of shopping items
  var items = [];
  var item2 =[];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      //deferred.resolve(items);
      $http({
        url: "https://davids-restaurant.herokuapp.com/categories.json"})
        .then(function(response) {
            items = response.data;
            // Some manipulation on data
            deferred.resolve(items);
          });
    }, 800);

    return deferred.promise;
  };

  service.getItems2 = function (item_id) {
    var deferred = $q.defer();
    console.log("item_id=" +item_id);
    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      //deferred.resolve(items);
      $http({
        //url: "https://davids-restaurant.herokuapp.com/categories/" + item_id + ".json"
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
        params: {category: item_id}
      })
        .then(function(response) {
            item2 = response.data['menu_items'];
            console.log(item2);
            // Some manipulation on data
            deferred.resolve(item2);
          });
    }, 800);

    return deferred.promise;
  };
}

})();
