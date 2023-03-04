'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');
  var player = require('./controllers/PlayerController');
  var questions = require('./controllers/QuestionController');

  // todoList Routes
  app.route('/player')
    .get(player.get)
    .post(player.store);

  app.route('/questions')
  .get(questions.get)
  .get(questions.getType)
  .put(questions.showQuestionByid)


  app.route('/questions/:quesId')
    .get(questions.get)
    .get(questions.getType)
    .put(questions.showQuestionByid)
};
