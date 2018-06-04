var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');
var form = require('formidable');
var jsonparser = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({ extended: false });

var index = require('./routes/index');

var app = express();
app.listen(3000, () => {
    console.log('App listening on port 3000');
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use('/', index);


fs.readdirSync('./controllers').forEach(function (file) {

    if (file.substr(-3) == '.js') {

        route = require('./controllers/' + file);
        route.controllers(app);
    }
});


/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        console.log('We have an error!!', err);
        res.status(err.status || 500);
        res.render('error.jade', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.jade', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
