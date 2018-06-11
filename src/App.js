import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/login';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      login: null,
    };

  }

  componentDidMount = () => {
    const {feathersAPI} = this.props;

    feathersAPI.client.on('authenticated', login => {
      console.log('on authenticated:', login);

      this.setState({login:login});
    });
  }

  render() {
    console.log("this.state:", this.state);
    return (
      <div>
        { !this.state.login && <LoginForm feathersAPI={this.props.feathersAPI}/>}
      </div>
    );
  }
}

export default App;
