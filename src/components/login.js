import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props){
      super(props);
  
      this.state={
        username: "",
        password:"",
      };
    }
  
    handleNameChanged = (e) => {
      this.setState({
        username: e.target.value
      });
    }
  
    handlePassChanged = (e) => {
      this.setState({
        password: e.target.value
      });
    }
  
    render() {
      console.log("this.state:", this.state);
      return (
        <form >
            <label>
                Username:
                <input type="text" name="name" value={this.state.username} onChange={this.handleNameChanged}/>
            </label>
            <br/>
            <label>
                Password:
                <input type="password" name="pass" value={this.state.password} onChange={this.handlePassChanged}/>
            </label>
        </form>
      );
    }
  }
  
  export default LoginForm;
  