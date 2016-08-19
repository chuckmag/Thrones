import React from 'react';
import {render} from 'react-dom';
import ServerBrowser from './ServerBrowser.jsx';
import Game from './Game.jsx';

class App extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		server: null
    	};

    	this.onServerSelect = this.onServerSelect.bind(this);
    	this.onLeaveGame = this.onLeaveGame.bind(this);
    }

    onServerSelect (server) {
    	this.setState({server: server});
    }

    onLeaveGame () {
    	this.setState({server: null});
    }

	render () {
		var showServerBrowser = function(app) {
			if (app.state.server) {
				return <Game server={app.state.server} onLeaveGame={app.onLeaveGame}/>
			} else {
				return <ServerBrowser onServerSelect={app.onServerSelect}/>
			}
		}
		return (
	    	<div>
	        	<p> Hello Throneser!</p>
	        	{showServerBrowser(this)}
	    	</div>
		);
	}
}

render(<App/>, document.getElementById('app'));

/*
//CommonJs style import
var greet = require('./greet');

//Es6 module style import
import sum from './sum';

//Scss entry point
require('../styleSheets/base.scss');

console.log('Index Loaded, the sum is', sum);
alert(greet);*/