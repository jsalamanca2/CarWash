var db = require('./../models')
var bcrypt = require('bcrypt-nodejs');


module.exports = function(passport, LocalStrategy){
	passport.use(new LocalStrategy(
	  function(username, password, done) {
	    db.User.findOne({ username: username }).then(function(user, err){
	     	if (err) {return done(null, err)}
	     	if (!user.username) { return done(null, false); }
	     	let salt = '$2a$04$HN5eLtLO9ZYs.rHGr' + [...password].filter((a,i) => i<5).join('');
	     	let hashpassword = bcrypt.hashSync(password, salt);
	     	if (!user.password == hashpassword) { return done(null, false); }
	     	return done(null, user);
	    })
	}));


	passport.serializeUser(function(user, cb) {
	  cb(null, user.id);
	});

	passport.deserializeUser(function(id, cb) {
	  db.users.findById(id, function (err, user) {
	    if (err) { return cb(err); }
	    cb(null, user);
	  });
	});
};

