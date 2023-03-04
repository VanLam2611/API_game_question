'use strict';
module.exports = function(app) {
  var player = require('./controllers/PlayerController');
  var questions = require('./controllers/QuestionController');

  //Todo: Get all questions in data
  app.route('/question')
  .get(questions.get)

  //Todo: Get all type of questions in data
  app.route('/type')
  .get(questions.getType)

  //Todo: Get question have id equal with id of table type question
  app.route('/type/:typeId')
    .get(questions.showQuestionByid)

  //Todo: Get question by id
  app.route('/question/:quesId')
    .get(questions.getQuestionById)

  // todoList Routes
  app.route('/player')
    .get(player.get)
    .post(player.createPlayer);

  //Todo: Update point, question correct and wrong of player
  app.route('/player/point/:playerId')
    .post(player.updatePoint)

  //Todo: Get player by Id
  app.route('/player/:playerId')
    .get(player.getPlayerById)

  //Todo: Get player have id highest
  app.route('/player/id/highest')
    .get(player.getPlayerIdHighest)

  //Todo: Get 10 player have point highest
  app.route('/player/arrange')
    .get(player.arrangePlayer)
};
