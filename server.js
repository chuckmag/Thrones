'use strict';

const Hapi = require('hapi');
const SocketIO = require('socket.io');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 8000
});
/*
var io = SocketIO.listen(server.listener);
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(username){
	console.log(username + ' disconnected');
  });
  socket.on('reverse string', function(s){
	console.log('reversing the string: ' + s);
	var reversedString = reverseString(s);
	console.log('reversed string: ' + reversedString);
	io.emit('reverse string', reversedString);
  });
});*/

var serverManager = new function() {
	this.servers = [];
	console.log("Creating server manager with with blank server array.")
}


// register a static html page to display at the root of the website.
server.register(require('inert'), (err) => {

	if (err) {
		throw err;
	}

	server.route([
		{method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply.file('index.html');}
		},
		{method: 'GET',
		path: '/static/{fileName}',
		handler: function (request, reply) {
			reply.file('./src/client/public/' + request.params.fileName);}
		}
	]);
});


const reverseStringHandler = function (request, reply) {
	return reply(reverseString(request.params.stringToReverse));
};


// Adding a route to reverse a string that is sent as a parameter.
server.route([{
	method: 'GET',
	path:'/reverseString/{stringToReverse}',
	handler: reverseStringHandler
	}]);

// Start the server
server.start((err) => {

	if (err) {
		throw err;
	}
	console.log('Server running at:', server.info.uri);
});