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
 * GET /
 * Massive wtf
 */

exports.randomActivity = function(req, res){
	var x = 100
	var y = 200
	function random (low, high) {
		return Math.random() * (high - low) + low;
	}
	var z = random(x,y)
	console.log(z)
	res.render('home2');
	var input1 = req.query.pc;
	var input2 = req.query.bud;
	console.log('omg is ' + input1 + ' ' + input2);
}

exports.postPostCode = function(req, res, next){
	var input1 = req.body.postcode;
	var input2 = req.body.budget;
	var input3
	var inptu4
	//console.log(input);
	res.redirect('/results?pc=' + input1 + '&bud=' + input2);
}