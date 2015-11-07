/**
 * Module dependencies.
 */
var express = require('express');
var logger = require('morgan');

/**
 * Controllers (route handlers).
 */
var homeController = require('./controllers/home')

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