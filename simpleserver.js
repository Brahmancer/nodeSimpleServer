var http = require('http');
var express = require('express');
var MongoClient = require('mongodb');

// Connect DB
MongoClient.connect('mongodb://umongo:mongodb1!@ds161493.mlab.com:61493/simplemongodb', function(err, db){
	if (err){
		console.log(err);
		throw err; 
	}
	else 
	{
		console.log("Connection complete");
	}
});

// Set up the app. 
var app = express();

// Use a port of 10000
app.set('port', 10000);

// Basic Hello World response to requests
app.get('/', function(req, res){
	res.send('Hello World!');
});

// Create the http server and listen to the app's port. 
http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server on port ' + app.get('port'));
})
