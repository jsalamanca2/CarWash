var path = require('path');

module.exports = function(app) {
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/index.html'))
	});
	app.get('/cardetails', function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/cardetails.html"))
	});
    app.get('/services', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/services.html"))
    })
    app.get('/Checkout', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/scratch.html"))
    })
    app.get('/Register', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/Register.html"))
    })
    app.get('/Payment', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/Payment.html"))
    })
    app.get('/confirmation', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/confirmation.html"))
    })
    app.get('/login', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/login.html"))
    })
};