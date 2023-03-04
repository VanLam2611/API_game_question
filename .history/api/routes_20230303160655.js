'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');
  var player = require('./controllers/PlayerController');
  var questions = require('./controllers/QuestionController');

  // todoList Routes
  app.route('/player')
    .get(player.get)
    .post(player.store);

  app.route('/question')
  .get(questions.get)


  app.route('/type')
  .get(questions.getType)


  app.route('/type/:typeId')
    .put(questions.showQuestionByid)
};
