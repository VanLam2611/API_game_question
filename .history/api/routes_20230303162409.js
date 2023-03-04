'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');
  var player = require('./controllers/PlayerController');
  var questions = require('./controllers/QuestionController');

  // todoList Routes
  app.route('/player')
    .get(player.get)
    .post(player.store);

  //Todo: Get all questions in data
  app.route('/question')
  .get(questions.get)

  //Todo: Get all type of questions in data
  app.route('/type')
  .get(questions.getType)

  //Todo: Get question have id equal with id of table type question
  app.route('/type/:typeId')
    .get(questions.showQuestionByid)
};
