(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['item2','$stateParams']
function ItemDetailController(item2, $stateParams) {
  var itemDetail = this;
  
  itemDetail.item2 = item2;
  itemDetail.name = $stateParams.itemId;
  
}

})();
