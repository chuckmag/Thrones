export const joinServer = (server) => {
	return {
		type: 'joinServer',
		server: server
	}
};

export const leaveServer = () => {
	return {
		type: 'leaveServer'
	}
};