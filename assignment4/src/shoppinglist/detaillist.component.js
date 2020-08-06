(function () {
'use strict';

angular.module('ShoppingList')
.component('detailList', {
  templateUrl: 'src/shoppinglist/templates/detaillist.template.html',
  bindings: {
    item2: '<'
  }
});

})();
