/**
* File: simpleserver.js
* Author: dmiller4991@gmail.com
*
* Description:
*	A "simple" server application written in javascript using NodeJS.
*	Express will handle the actual application of the server.
*   MongoDB will act as the DB.
*   Any additions added to this will be defined in as different javascript files.
*/

// declare requirements here.
var http = require('http');
var express = require('express');
var MongoClient = require('mongodb');
var PythonShell = require('python-shell');
var dbMetaData = require('./dist/DBMetaData.js')

// variables
var dbPythonOptions = {
	mode: 'text',
	args: ['dbfile.txt']
};
var dbData = new dbMetaData('', ''); // Container of Mongo Metadata;

// shell to run the python script to grab MongoDB credentials.
var pyshell = new PythonShell('python/dbParser.py', dbPythonOptions);

// retrieve any data run by the python script.
pyshell.on('message', function(message){
	if (message.indexOf("username: ") > -1)
	{
		index = message.indexOf(": ");
		dbuser = message.substring(index + 2);
		dbData.setUsername(dbuser);
		// console.log("dbuser: " + dbuser);
	}
	else if (message.indexOf("password: ") > -1)
	{
		index = message.indexOf(": ");
		dbpass = message.substring(index + 2);
		dbData.setPassword(dbPass);
		// console.log("dbpass: " + dbpass);
	}
	else
	{
		console.log(message)
	}

});

// Terminate the shell.
pyshell.end(function(err){
	if (err){
		throw err;
	}
});

// Set up the app.
var app = express();

// Use a port of 10000
app.set('port', 10000);

// Basic Hello World response to requests
// TODO: Add responses to requests. Essentially set up the protocol for the client application.
app.get('/', function(req, res){
	res.send('Hello World!');
});

// Create the http server and listen to the app's port.
http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server on port ' + app.get('port'));
})
