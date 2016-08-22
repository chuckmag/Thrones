import { connect } from 'react-redux';
import { joinServer } from '../actions/index.jsx';
import ServerList from '../components/ServerList.jsx';

const getVisibleServers = (serverList, filter) => {
	switch(filter) {
		default:
			return serverList;
	}
};

const mapStateToProps = (state) => {
	return {
		serverList: getVisibleServers(state.serverList, {})
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onJoinServerClick: (server) => 
			dispatch(joinServer(server))
		
	}
};

const VisibleServerList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ServerList);

export default VisibleServerList;