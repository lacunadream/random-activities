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
		if (error) {
			deferred.reject(error);
		} else {
			deferred.resolve(body);
		}
	});
    	return deferred.promise;
	}

exports.randomActivity = function(req, res){
	// Process Queries
	var input1 = req.query.pc;
	var input2 = req.query.bud;
	var x
	// Fucking lousy postcode
	// Postcode API Call
	postcodeAPI(input1, 'GET')
		.then(postCodeCheck(k))
		.then(console.log('OMG'))

	function postCodeCheck(Res) {
		var deferred = Q.defer();
		res = JSON.parse(Res);
		if (res.status == "404") {
			req.flash('error', input1);
			return res.redirect('/');
		} else if (res.status == "200") {
			deferred.resolve();
		}
		return deferred.promise;
	}
	// Grab Time
	var date = new Date();
	var current_hour = date.getHours();
	if (current_hour < 7 || current_hour > 20) {
		y = 0.5;
	} else {
		y = 1;
	}
	var xy = x * y;

	// var x = 50
	// var y = 100
	// var z = random(x,y)
	// console.log(z)
	console.log('x= '+ x)
	console.log('y= ' + y)
	console.log(xy)
	// if (xy == 0) {
	// 	req.flash('error', input1);
	// 	return res.redirect('/');
	// } else {
	// 	res.render('home_real');
	// }
}

