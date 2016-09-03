const LOAD = 'thrones/serverList/LOAD';
const LOAD_SUCCESS = 'thrones/serverList/LOAD_SUCCESS';
const LOAD_FAIL = 'thrones/serverList/LOAD_FAIL';
const SET_SERVERNAME_FILTER = 'thrones/serverList/SET_SERVERNAME_FILTER';

const DEFAULT_SERVERLIST = [
  { id: '0', name: 'TestServer1', playerCount: 3, gameType: 'Default' },
  { id: '1', name: 'TestServer2', playerCount: 3, gameType: 'Default' },
  { id: '2', name: 'TestServer3', playerCount: 3, gameType: 'Default' },
  { id: '3', name: 'TestServer4', playerCount: 3, gameType: 'Default' }
];

const initialState = {
  loaded: false,
  serverNameFilter: '',
  data: DEFAULT_SERVERLIST
};

export default function serverList(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
        // data: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: [],
        error: action.error
      };
    case SET_SERVERNAME_FILTER:
      return {
        ...state,
        serverNameFilter: action.serverNameFilter
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.serverList && globalState.serverList.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/serverList/load')
  };
}

export function setServerNameFilter(serverName) {
  return {
    type: SET_SERVERNAME_FILTER,
    serverNameFilter: serverName
  };
}

export const getVisibleServerList = (state, filter) => {
  if (!state) {
    return [];
  }

  if (filter.serverName) {
    return state.filter(server => server.name.toLowerCase().indexOf(filter.serverName.toLowerCase()) !== -1);
  }

  return state;
};
