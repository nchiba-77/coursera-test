(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['item2']
function ItemDetailController(item2) {
  var itemDetail = this;
  
  itemDetail.item2 = item2;

  
}

})();
