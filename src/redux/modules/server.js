const JOIN_SERVER = 'thrones/JOIN_SERVER';
const LEAVE_SERVER = 'thrones/LEAVE_SERVER';

const initialState = {
  id: undefined
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case JOIN_SERVER:
      return Object.assign({}, action.server);
    case LEAVE_SERVER:
      return initialState;
    default:
      return state;
  }
}

export function joinServer(server) {
  return {
    type: JOIN_SERVER,
    server: server
  };
}

export const leaveServer = () => {
  return {
    type: LEAVE_SERVER
  };
};

