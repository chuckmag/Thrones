import { combineReducers } from 'redux';
import server from './server.jsx';
import serverList, * as fromServerList from './serverList.jsx';

const thronesApp = combineReducers({
	server,
	serverList
});

export default thronesApp;

export const getVisibleServerList = (state, filter) =>
	fromServerList.getVisibleServerList(state.serverList, filter);