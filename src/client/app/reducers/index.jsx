import { combineReducers } from 'redux';
import server from './server.jsx';
import serverList from './serverList.jsx';

const thronesApp = combineReducers({
	server,
	serverList
});

export default thronesApp;