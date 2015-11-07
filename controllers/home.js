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
	//console.log('omg is' + omg);
}

exports.postPostCode = function(req, res, next){
	var omg = req.body.postcode;
	console.log(omg)
	return omg;
	res.redirect('/results')
}