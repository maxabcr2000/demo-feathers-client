const io = require('socket.io-client');
const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const socketio = require('@feathersjs/socketio-client');
const auth = require('@feathersjs/authentication-client');


const serverURL = 'http://localhost:3030';

const authOptions = {
    header: 'Authorization', // the default authorization header for REST
    path: '/authentication', // the server-side authentication service path
    jwtStrategy: 'custom', // the name of the JWT authentication strategy 
  };


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

        this.client.configure(auth(authOptions));
    }

    
}

export default FeathersClient;