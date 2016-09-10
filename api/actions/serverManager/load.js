
const DEFAULT_SERVERLIST = [
  { id: '0', name: 'TestServer1', playerCount: 3, gameType: 'Default' },
  { id: '1', name: 'TestServer2', playerCount: 3, gameType: 'Default' },
  { id: '2', name: 'TestServer3', playerCount: 3, gameType: 'Default' },
  { id: '3', name: 'TestServer4', playerCount: 3, gameType: 'Default' }
];

export function getServerList(req) {
  let serverList = req.session.serverList;
  if (!serverList) {
    serverList = DEFAULT_SERVERLIST;
    req.session.serverList = serverList;
  }
  return serverList;
}

export default function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      if (Math.random() < 0.33) {
        reject('Server List load fails 33% of the time. You were unlucky.');
      } else {
        resolve(getServerList(req));
      }
    }, 1000); // simulate async load
  });
}
