var express = require('express');
var router = express.Router();
// var auth = require('./config/auth');

router.get('/getLatestVesion', function(req, res) {
	var data = {
		"version": "1.5.0",
		"minContainerVersion": "1.0",
		"url": {
			"url": "http://192.168.1.201:3000/jsbundle-1.5.0.js",
			"isRelative": "no"
		}
	};
	console.log(JSON.stringify(data));
	res.json(data);
});

module.exports = router;