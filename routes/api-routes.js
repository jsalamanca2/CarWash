var db = require('../models');

module.exports = function(app, passport){
	app.post('/api/login',
		passport.authenticate('local', { successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true })
	);
	app.post('/Register', function(req, res){
		db.User.create({
	      username: req.body.username,
	      password: req.body.password,
	      firstName: req.body.firstname,
	      lastName: req.body.lastname,
	      email: req.body.email
    }).then(function(results){
       return res.redirect('/login')
		})
	})
}
