import React from 'react';
import { connect } from 'react-redux';
import ServerBrowser from '../containers/ServerBrowser.jsx';
import Game from '../containers/Game.jsx';

const mapStateToProps = (state) => {
	return {
		server: state.server
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(leaveServer())
		}
	}
}

let App = ({server, params}) => {

	if (server.id) {
		return <Game />
	}

	return <ServerBrowser serverNameFilter={params.serverNameFilter}/>
}
App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;