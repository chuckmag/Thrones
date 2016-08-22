const server = (state = {}, action) => {
	switch (action.type) {
		case 'joinServer':
			return Object.assign({}, action.server);
		case 'leaveServer':
			return {};
		default:
			return state;
	}
}

export default server;