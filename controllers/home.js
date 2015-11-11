var request = require('request');
var Q = require('q');

/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home_real', {
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
	postcodeAPI(input1, 'GET').then(
		function postCodeCheck(Res) {
		var deferred = Q.defer();
		a = JSON.parse(Res);
		console.log(typeof a.status)
		console.log(a.status)
		if (a.status == 404) {
			deferred.reject();
		} else if (a.status == 200) {
			deferred.resolve();
		}
		return deferred.promise;
	}).then(
		function wtf() {
		var deferred = Q.defer();
		x = random(0,100)
		console.log('x' + x)
		//xy = x * y
		//console.log(xy)
		if (x < 50) {
			res.render('results_1')
		} else {
			res.render('results_2')
		}
	}, function() {
		//var deferred = Q.defer()
		console.log('a')
		req.flash('error', input1);
		return res.redirect('/');
		//return deferred.promise
})

	// A REMINDER TO MYSELF THAT I MESSED UP 
	// .then(
	// 	function wtf2(fuck) {
	// 		console.log('b')
	// 		var deferred = Q.defer();
	// 		if (fuck < 35){
	// 			deferred.reject();
	// 		} else {
	// 			deferred.resolve();
	// 		}
	// 		return deferred.promise
	// 	}, function() {
	// 		var deferred = Q.defer()
	// 		console.log('1')
	// 		res.render('results_1')
	// 		return deferred.promise;
	// 	}).then(
	// 	function () {
	// 		console.log('2')
	// 		res.render('results_1');
	// 	}, function() {
	// 		console.log('3')
	// 		res.render('results_1');
	// 	});

	// function () {
	// 	var deferred = Q.defer()
	// 	deferred.reject()
	// 	console.log('pass')
	// 	return deferred.promise
	// }, function () {
	// 	var deferred = Q.defer()
	// 	//deferred.resolve()
	// 	console.log('fail')
	// 	return deferred.promise
	// }).then(
	// function () {
	// 	console.log('pass2')
	// }, function () {
	// 	console.log('fail2')
	// })

	// var deferred = Q.defer();
	// x = random(0,100)
	// if (x<50) {
	// 	deferred.reject()
	// } else {
	// 	deferred.resolve()
	// }
	// return deferred.promise





	// Grab Time
	var date = new Date();
	var current_hour = date.getHours();
	if (current_hour < 7 || current_hour > 20) {
		y = 0.8;
	} else {
		y = 1;
	}
	var xy = x * y;

}

