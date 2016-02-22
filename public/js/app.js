var socket = io();
socket.on('connect', function(data) {
	console.log(data);
	socket.emit('message', {
		id: 1,
		message: 'Message'
	});
});

socket.on('message', function(data) {
	console.log("Message Received: " + data.message);
	socket.emit('message', {
		id: 2,
		message: 'Message'
	});
});