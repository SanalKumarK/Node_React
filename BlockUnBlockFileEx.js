console.log("Using readFileSync - blocked Read");

var fs = require("fs");

//var data = fs.readFileSync("apptoinst.txt");

//console.log(data.toString());

console.log("********************");

console.log("Using readFile - Unblocked Read");

fs.readFile("apptoinst.txt", function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
	});
	
	
console.log("********************");