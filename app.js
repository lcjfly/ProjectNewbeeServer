var express = require('express');
var app = express();

var PORT = 3000,
	ORIGIN = "http://localhost"

//var auth = require('./config/auth')
var bundles = require('./routes/bundles');

app.use(express.static('public'));
app.use('/bundles', bundles);

/*
app.all('*', function(req, res, next) {
	res.set('Access-Control-Allow-Origin', ORIGIN);
	res.set('Access-Control-Allow-Credentials', true);
	res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
	if ('OPTIONS' == req.method) return res.send(200);
	next();
});

app.get('/signin', function(req, res) {
	//verify credential (use POST)

	//build userData to store with the token
	var userData = {id:1, firstname: 'John', lastname: 'Doe'};
	auth.createAndStoreToken(userData, 60*60, function(err, token) {
		if (err) {
			console.log(err);
			return res.send(400);
		} 
		//Send back token
		return res.send(200, token);
	});
});

app.get('/protected', auth.verify, function(req, res) {
	if (req._user) {
		console.log(req._user);
		return res.send(200, req._user);
	}
});


app.get('/expire', function(req, res) {
	auth.expireToken(req.headers, function(err, success) {
		if (err) {
			console.log(err);
			return res.send(401);
		}
		if (success) res.send(200);
		else res.send(401);
	});
});
*/

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(process.env.PORT || PORT);