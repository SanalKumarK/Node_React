var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("data_received", function(){
	console.log("Data Received... anonymous fn - Event handler");
});

eventEmitter.on("data_received", connectHandler);

var connectHandler = function connected() {
console.log('connection successful.');
// Fire the data_received event
}

eventEmitter.emit("data_received");

console.log("Program Ended");