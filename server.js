var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(8081, function(){
	
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Server listening at %s, %s", host, port);
})

app.get('/',function(req,res) {
	console.log("Got a request for the homepage");
	res.send("Hello Get");
})

var fs = require("fs");

app.get('/list_users',function(req, res) {
	console.log("Get List of Users ");
	
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
	});
})


app.get('/get_user',function(req, res) {
	console.log("Get User Info");
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse(data);
		console.log( data );
		res.end( JSON.stringify(data["user1"]));// +req.params.id] );
	});
	//res.send("USER INFO");
})


app.get('/add_user', function(req,res){
	console.log("GET - Add User ");
	
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse(data);
		data["user4"] = {
"name" : "mohit",
"password" : "password4",
"profession" : "teacher",
"id": 4
};
		console.log(data);
		res.end( JSON.stringify(data));
	});
})

app.get('/del_user',function(req,res){
	console.log("DELETE ");
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse(data);
		
		console.log(req.query.id);
		delete data["user"+req.query.id];
		console.log( data );
		res.end(JSON.stringify(data));
	});
})