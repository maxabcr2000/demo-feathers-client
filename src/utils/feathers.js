const io = require('socket.io-client');
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const serverURL = 'http://localhost:3030';


class FeathersClient {
    constructor(){
        this.client = null;

        const socket = io(serverURL);
        this.client = feathers();
        this.client.configure(socketio(socket));
    }
}

export default FeathersClient;