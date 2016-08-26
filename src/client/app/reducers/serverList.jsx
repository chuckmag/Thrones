const serverList = (state = [], action) => {
	switch (action.type) {
		case 'getServerList':
			//return [
	        //	...state,
	        //	todo(undefined, action)
	      	//];
			return [
				{
					id:'0',
					name: 'TestServer1',
					playerCount: 3,
					gameType: 'Default'
				},
				{
					id:'1',
					name: 'TestServer2',
					playerCount: 3,
					gameType: 'Default'
				},
				{
					id:'2',
					name: 'TestServer3',
					playerCount: 3,
					gameType: 'Default'
				},
				{
					id:'3',
					name: 'TestServer4',
					playerCount: 3,
					gameType: 'Default'
				},
			];
		default:
			return [
				{
					id:'0',
					name: 'TestServer1',
					playerCount: 3,
					gameType: 'Default'
				},
				{
					id:'1',
					name: 'TestServer2',
					playerCount: 3,
					gameType: 'Default'
				},
				{
					id:'2',
					name: 'TestServer3',
					playerCount: 3,
					gameType: 'Default'
				},
				{
					id:'3',
					name: 'TestServer4',
					playerCount: 3,
					gameType: 'Default'
				},
			];
	}
}

export default serverList;


export const getVisibleServerList = (state, filter) => {
	/*switch(filter) {
		default:
			return serverList;
	}*/

	if (filter.serverName) {
		return state.filter(s => s.name.toLowerCase().indexOf(filter.serverName.toLowerCase()) !== -1);
	}

	return state;
};