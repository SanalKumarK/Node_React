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

app.get('/get_comment',function (req, res) {
	fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
	});	
})


app.post('/post_comment/:data',function (req, res) {
	fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
		data = JSON.parse(data);
		console.log(req.query.data);
		
		data["comment3"] = {
				"author" : "mohit",
				"comment" : "password4"};
		//console.log(data);
		res.end( JSON.stringify(data));
	});	
})