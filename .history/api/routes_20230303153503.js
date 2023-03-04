'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');
  var player = require('./controllers/PlayerController');

  // todoList Routes
  app.route('/player')
    .get(player.get)
    // .post(player.store)
    .post((req, res) => {
      console.log(req);
    });


  app.route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
};
