var path = require('path');
var express = require('express');
var app = express();


// var app = require('express').createServer();
// var io = require('socket.io')(app);

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(8080, () => {
	console.log('server start...')
})

let tickets = []
for (var i = 0; i < 20; i++) {
	let a = []
	for(var j = 0; j < 20; j++) {
		a.push(0)
	}
	tickets.push(a)
}

io.on('connection', function (socket) {
	// console.log(socket)
	socket.on('initTicket', function (data) {
		socket.emit('initTicket', tickets)
	});
	socket.on('disconnect', function () {
		// connection.MQChannel && connection.MQChannel.close();
		console.log((new Date()) + ' Peer  disconnected.');
	});
	socket.on('changeTicket', function(datas){
		tickets = datas;
		socket.broadcast.emit('changeTicket', tickets);
	})
	
});