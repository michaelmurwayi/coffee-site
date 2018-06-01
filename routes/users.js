var express = require('express');
var router = express.Router();
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var connection = require('express-myconnection');
var form = require('formidable');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var connection = mysql.createConnection({

	host: 'localhost',
    user: 'root',
    password:'picklerick',
    database:'coffee',
});

console.log('connection successfull')

app.use(function(req,res,next){
  var form = new formidable.IncomingForm({
    encoding: 'utf-8',
    uploadDir: './temp',
    multiples: true,
    keepExtensions: true,
  });
  form.once('error', err => console.log(" formidable error: ", err));
  form.parse(req,(err, fields, files) =>{
      object.assign(req,{fields,files});
      next();
  });
});

/* GET users listing. */

router.post('/sign_up', function(req, res) {
  var user = req.fields;

  var query = 'INSERT INTO users_tbl (firstname, lastname, email, password)VALUES("user.firstname","user.lastname","user.email","user.password" )';
mysql(query,(err,result) =>{
  if(!err){
    console.log("successfull sign_up");
    res.redirect('/');
  }else{
    console.log("sign_up failed");
    res.sendStatus(500);
  }
  })
});

module.exports = router;
