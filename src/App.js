import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/login';

class App extends Component {
  constructor(props){
    super(props);

  }

  render() {
    console.log("this.state:", this.state);
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default App;
