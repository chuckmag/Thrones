const uuid = require('node-uuid');

const ServerManager = new function() {
	this.servers = [];
	console.log("Creating Server Manager with with blank server array.");
	this.isDuplicateServerName = function(serverName) {
		var servers = this.servers;
		var isDuplicate = false;
		for (var i = servers.length - 1; i >= 0; i--) {
			var server = servers[i];
			if (server.name === serverName) {
				isDuplicate = true;
				break;
			}
		}

		return isDuplicate;
	};

	this.validateServer = function(server) {
		if(this.isDuplicateServerName(server.name)){

			return {message : 'Server Name : ' + server.name + ' is a duplicate of an already existing Server, please select another.'};
		}
	};

	// function that returns a new uuid for the server, or error if it is not valid.
	this.createServer = function(server) {
		server.id = uuid.v4();

		var error = this.validateServer(server);
		if (error) {
			return error;
		}


		this.server.push(server);
	};
}

module.exports = ServerManager;