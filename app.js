/**
 * Module dependencies.
 */
var express = require('express');
var logger = require('morgan');
var path = require('path');
var compress = require('compression');
var bodyParser = require('body-parser');

/**
 * Controllers (route handlers).
 */
var homeController = require('./controllers/home');

/**
 * Create Express server.
 */
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('layout', '_layouts/default');
app.set('view engine', 'html');
app.engine('html', require('hogan-express'));
app.set("partials", {
  header: "_partials/header",
  footer: "_partials/footer"
});

app.use(compress());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
app.post('/', homeController.postPostCode);
app.get('/results', homeController.randomActivity);


/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});
//module.exports = app;