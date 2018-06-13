import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/login';
import MessagePanel from './components/message';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      login: null,
      messages: [],
      username: "",
    };

  }

  componentDidMount = () => {
    const {feathersAPI} = this.props;

    feathersAPI.client.on('authenticated', login => {
      console.log('on authenticated:', login);

      this.setState({login:login});
    });

    feathersAPI.client.service('my-service').on('created', data => {
      console.log('on test created:', data);
    });

    feathersAPI.client.service('messages').on('created', message => {
      console.log('on messages created:', message);
      
      let messages = this.state.messages;
      messages.push(message);

      console.log("messges:", messages);

      this.setState({
        messages: messages
      });
    });
  }

  handleUserName= (username) => {
    this.setState({
      username:username,
    });
  }

  handleTest = () => {
    const {feathersAPI} = this.props;

    feathersAPI.client.service('my-service').create({"text": "Test"});
  }

  render() {
    console.log("this.state:", this.state);
    return (
      <div>
        { !this.state.login && <LoginForm feathersAPI={this.props.feathersAPI} handleUserName={this.handleUserName} />}
        {this.state.login && <MessagePanel username={this.state.username} feathersAPI={this.props.feathersAPI} messages={this.state.messages}/>}
        {/* <button onClick={this.handleTest}>Test</button> */}
      </div>
    );
  }
}

export default App;
