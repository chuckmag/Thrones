const GET_SERVERLIST = 'thrones/GET_SERVERLIST';

const initialState = [];

const DEFAULT_SERVERLIST = [
  {
    id: '0',
    name: 'TestServer1',
    playerCount: 3,
    gameType: 'Default'
  },
  {
    id: '1',
    name: 'TestServer2',
    playerCount: 3,
    gameType: 'Default'
  },
  {
    id: '2',
    name: 'TestServer3',
    playerCount: 3,
    gameType: 'Default'
  },
  {
    id: '3',
    name: 'TestServer4',
    playerCount: 3,
    gameType: 'Default'
  },
];

const serverList = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SERVERLIST:
      return DEFAULT_SERVERLIST;
    default:
      return state;
  }
};

export default serverList;


export const getVisibleServerList = (state, filter) => {
  if (filter.serverName) {
    return state.filter(server => server.name.toLowerCase().indexOf(filter.serverName.toLowerCase()) !== -1);
  }

  return state;
};
