import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { joinServer } from '../actions/index.jsx';
import ServerList from '../components/ServerList.jsx';
import { getVisibleServerList } from '../reducers/index.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		serverList: getVisibleServerList(state, { serverName : ownProps.serverNameFilter })
	}
};

const VisibleServerList = connect(
	mapStateToProps,
	{ onJoinServerClick: joinServer }
)(ServerList);

export default VisibleServerList;