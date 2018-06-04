var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.status(200).render('project');
});


// ABOUT PAGE
router.get('/about', function (req, res) {
    res.render('about');
});


// SIGN_UP PAGE
router.get('/sign_up', function (req, res) {
    res.render('sign_up');
});


//post SIGN UP details
router.post('/sign_up', function (req, res) {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    };
    console.log(response);

    //Redirect back to home
    res.redirect('/').end();
});


//LOG_IN PAGE
router.get('/log_in', function (req, res) {
    res.render('log_in');
});


module.exports = router;

