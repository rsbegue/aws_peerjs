const { PeerServer } = require('peer');

const peerServer = PeerServer(
    {
        port: process.env.PEER_PORT,
        path: process.env.PEER_PATH
    },
    () => console.log('Chat OK')
);