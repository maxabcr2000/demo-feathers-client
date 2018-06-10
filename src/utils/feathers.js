const io = require('socket.io-client');
const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const socketio = require('@feathersjs/socketio-client');
const serverURL = 'http://localhost:3030';


class FeathersClient {
    constructor(){
        this.client = null;

        this.client = feathers();

        try{
            const socket = io(serverURL);
            this.client.configure(socketio(socket));
        }catch(err){
            console.log(err);
            const restClient = rest(serverURL)
            this.client.configure(restClient.fetch(window.fetch));
        }
    }

    
}

export default FeathersClient;