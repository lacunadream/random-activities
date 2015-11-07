var request = require('request');
var Q = require('q');

/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('homepage', {
    title: 'Home',
  });
};

/**
 * POST /
 * Obtain data
 */

exports.postDetails = function(req, res, next){
	var input1 = req.body.postcode;
	var input2 = req.body.budget;
	var input3
	var inptu4
	//console.log(input);
	res.redirect('/results?pc=' + input1 + '&bud=' + input2);
}

/**
 * GET /
 * Massive wtf
 */
	// Ahh scoping

	function random (low, high) {
		return Math.random() * (high - low) + low;
	}

	function postcodeAPI (apiURL, apiMethod) {
		var deferred = Q.defer();
		request({
			url: 'http://api.postcodes.io/postcodes/' + apiURL, 
			method: apiMethod
	}, function(error, response, body) {
		if (error) deferred.reject(error)
    	else deferred.resolve(body)
	});
    	return deferred.promise
	}

exports.randomActivity = function(req, res){
	// Process Queries
	var input1 = req.query.pc;
	var input2 = req.query.bud;

	// Fucking lousy postcode
	// Random Generator

	// Postcode API Call
	var zzz = postcodeAPI(input1, 'GET').then(x = 50, x = 0);

	// Grab Time
	var date = new Date();
	var current_hour = date.getHours();
	//console.log(current_hour)

	// var x = 50
	// var y = 100
	// var z = random(x,y)
	// console.log(z)
	console.log(x)
	if (x == 0) {
		req.flash('error', input1);
		return res.redirect('/');
	} else {
		res.render('home_real');
	}
}

