var socket = io();
console.log(socket);

socket.on("connect", function(socket){
	console.log("Connected to Socket.io Server!");
});