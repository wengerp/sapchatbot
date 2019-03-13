var config = require('../config');
var { discoverMovie } = require('./movieApi');

function loadMovieRoute(app) {
  app.post('/discover-movies', function(req, res) {
    console.log('[POST] /discover-movies');
	//console.log(req.body.conversation);
    var kind = req.body.conversation.memory['recording'].type;

    var genreId = req.body.conversation.memory['genre'].id;

    var language = req.body.conversation.memory['language'];
    var nationality = req.body.conversation.memory['nationality'];

    var isoCode = language
      ? language.short.toLowerCase()
      : nationality.short.toLowerCase();

    return discoverMovie(kind, genreId, isoCode)
      .then(function(carouselle) {
        res.json({
          replies: carouselle,
          conversation: {
          }
        });
      })
      .catch(function(err) {
        console.error('movieApi::discoverMovie error: ', err);
      });
  });
}

module.exports = loadMovieRoute;