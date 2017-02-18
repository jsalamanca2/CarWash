var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var cookieParser = require('cookie-parser');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//passport middleware
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }));

// Static directory
app.use(express.static("/public"));

// Routes =============================================================
require('./controllers/loginController.js')(passport, LocalStrategy)
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app, passport);





// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
