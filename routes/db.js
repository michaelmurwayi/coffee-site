var express = require('express');
var mysql = require('mysql');

var con = mysql.createconnection({

	host: 'localhost',
    user: 'root',
    password:'picklerick',
    database:'huncho',
});

connection.connect((err){
	if (err) throw err;

	console.log('connected');
});