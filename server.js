var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(1337, 'localhost', function (err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:1337');
});

/*'use strict';

const Hapi = require('hapi');
const SocketIO = require('socket.io');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

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
});

// register a static html page to display at the root of the website.
server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route([
		{method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./public/index.html');}
		},
		{method: 'GET',
        path: '/src/{fileName}',
        handler: function (request, reply) {
            reply.file('./src/' + request.params.fileName);}
		},
		{method: 'GET',
        path: '/src/dependencies/angular-socket-io-master/{fileName}',
        handler: function (request, reply) {
            reply.file('./src/dependencies/angular-socket-io-master/' + request.params.fileName);}
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
	},
	{method: 'GET',
    path:'/isPalindrome/{stringToCheck}', 
    handler: palindromeHandler
	},
	{method: 'GET',
    path:'/isPalindromeBad/{stringToCheck*2}', 
    handler: palindromeBadHandler
	}]);

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});*/