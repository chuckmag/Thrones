import React from 'react';
import $ from "jquery";

var ServerList = React.createClass({
	render: function() {
		if (this.props.servers.length === 0) {
			return <span>There are no servers! Want to Create one?</span>
		}
    	var createServer = function(server) {
      		return <li key={server.id}>Server Name : {server.serverName} | Player Count : {server.playerCount}/6 | Game Type : {server.gameType}</li>;
    	};
    	return <ul>{this.props.servers.map(createServer)}</ul>;
  	}
});

class ServerBrowser extends React.Component {

  	constructor(props) {
    	super(props);
    	this.state = {
    		//servers : [{id: Date.now(), serverName: 'First Server', playerCount: 0, gameType: 'Default'}],
    		servers: [],
    		serverNameSearch : '',
    		serverNameCreate : ''
    	};
    	this.createServer = this.createServer.bind(this);
    	this.searchServers = this.searchServers.bind(this);
    	this.serverNameSearchChange = this.serverNameSearchChange.bind(this);
    	this.serverNameCreateChange = this.serverNameCreateChange.bind(this);
    	this.preventDuplicateServer = this.preventDuplicateServer.bind(this);
  	}

  	componentDidMount () {
  		$.ajax({
  			url:'./api/getServerList',
  			dataType: 'json',
  			cache: false,
  			success: function (data) {
  				this.setState({servers: data});
  			}.bind(this),
  			error: function(xhr, status, err) {
        		console.error('./api/getServerList', status, err.toString());
      		}.bind(this)
  		});
  	}

  	searchServers (e) {
  		e.preventDefault();

  	}

  	preventDuplicateServer() {
  		var serverNameCreateCheck = this.state.serverNameCreate;
  		var serversToCheck = this.state.servers;
  		var duplicateServer = false;
  		for (var i = 0; i < serversToCheck.length; i++) {
  			var serverToCheck = serversToCheck[i];
  			if (serverToCheck.serverName === serverNameCreateCheck) {
  				duplicateServer = true;
  				break;
  			}
  		}

  		return duplicateServer;
  	}

  	createServer (e) {
    	e.preventDefault();

    	if (this.preventDuplicateServer()) {
    		return;
    	}

    	/*var nextServers = this.state.servers.concat([{serverName: this.state.serverNameCreate, id: Date.now(), playerCount: 1, gameType: 'Default'}]);
    	var nextServerNameCreate = '';
    	this.setState({servers: nextServers, serverNameCreate: nextServerNameCreate});*/
    	this.props.onServerSelect({serverName: this.state.serverNameCreate, id: Date.now(), playerCount: 1, gameType: 'Default'});
  	}

  	serverNameSearchChange (e) {
  		this.setState({serverNameSearch : e.target.value});
  	}
  
  	serverNameCreateChange (e) {
  		this.setState({serverNameCreate : e.target.value});
  	}

  	render() {
    	return (
      		<div>
      			<form onSubmit={this.searchServers}>
      				<span>Server Name : <input onChange={this.serverNameSearchChange} value={this.state.serverNameSearch} /> 
        			<button>Search Servers</button>
    				</span>
      			</form>
      			<ServerList servers={this.state.servers} />
      			<form onSubmit={this.createServer}>
      				<span>Server Name : <input onChange={this.serverNameCreateChange} value={this.state.serverNameCreate} /> 
        			<button>Create Server</button>
    				</span>
      			</form>
      		</div>
    	);
  	}
}

export default ServerBrowser;