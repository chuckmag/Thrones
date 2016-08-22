import expect from 'expect';
import redux from 'redux';
import deepFreeze from 'deep-freeze';

const Server = (state = {}, action) => {

	switch (action.type) {
		case 'joinServer':
			return Object.assign({}, state, {
				server: action.server
			 });
		case 'leaveServer':
			return Object.assign({}, state, {
				server: undefined
			});
		default:
			return state;
	}
}


const thronesApp = redux.combineReducers({
	server
});

const thronesStore = redux.createStore(thronesApp);

const joinServer = (state, server) => {
	return Object.assign({}, state, {
		server: server
	 });
};

const leaveServer = (state) => {
	return Object.assign({}, state, {
		server: undefined
	});
};

const testJoinServer = () => {
	const stateBefore = {
		server: undefined
	};

	const action = {
		type: 'joinServer',
		server:  {serverName: 'Test'}
	};

	const stateAfter = {
		server: {serverName: 'Test'}
	};

	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(
		server(stateBefore, action)
		).toEqual(stateAfter);
};

const testLeaveServer = () => {

	const stateBefore = {
		server: {serverName: 'Test'}
	};

	const action = {
		type: 'leaveServer'
	};

	const stateAfter = {
		server: undefined
	};

	deepFreeze(stateBefore);
	deepFreeze(action);
	expect(
		server(stateBefore, action)
		).toEqual(stateAfter);
};

testJoinServer();
testLeaveServer();
console.log("All Tests Passed!");


export default thronesStore;