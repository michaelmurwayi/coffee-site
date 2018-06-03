module.exports.controllers=function(app){
	app.get('/users/home',function (req,res){
		res.send("Home page");
	});
}