module.exports.controllers=function(app){
	app.get('/',function (req,res){
		res.send("project");
	});
}