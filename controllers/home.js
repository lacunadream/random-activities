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

exports.randomActivity = function(req, res){
	// Process Queries
	var input1 = req.query.pc;
	var input2 = req.query.bud;
	console.log('omg is ' + input1 + ' ' + input2);

	//Random Generator
	function random (low, high) {
		return Math.random() * (high - low) + low;
	}
	var x = 50
	var y = 100
	var z = random(x,y)
	if (z > 75) {
		res.render('home2');
	} else {
		res.render('homepage');
	}

	// Grab Time
	var date = new Date();
	var current_hour = date.getHours();
	console.log(current_hour)
}

