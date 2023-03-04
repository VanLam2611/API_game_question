'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');
  var player = require('./controllers/PlayerController');

  // todoList Routes
  app.route('/player')
    .get(player.get)
    .post(productsCtrl.store);


  app.route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
};
