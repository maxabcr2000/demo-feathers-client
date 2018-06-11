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

    handleSignIn = () => {
      const {feathersAPI} = this.props;

      feathersAPI.client.authenticate({
        strategy: 'local',
        username: this.state.username,
        password: this.state.password
      }).then(response => {
        console.log('Authenticated!', response);
        return feathersAPI.client.passport.verifyJWT(response.accessToken);
      }).then(payload => {
        console.log('JWT Payload', payload);
      }).catch((err) => {
        // show login page
        console.log('err:', err);
      });
    }

    handleSignUp = () => {
      const {feathersAPI} = this.props;

      feathersAPI.client.service('users').create({
        username: this.state.username,
        password: this.state.password,
        authlevel: 1,
      }).then((response)=>{
        console.log('Create new user:', response);
        this.handleSignIn();
      });
    }
  
    render() {
      console.log("this.state:", this.state);
      return (
        <form onSubmit={(e)=>{
          e.preventDefault();
        }}>
            <label>
                Username:
                <input type="text" name="name" value={this.state.username} onChange={this.handleNameChanged}/>
            </label>
            <br/>
            <label>
                Password:
                <input type="password" name="pass" value={this.state.password} onChange={this.handlePassChanged}/>
            </label>
            <br/>
            <button onClick={this.handleSignIn}>Sign in</button>
            <br/>
            <button onClick={this.handleSignUp}>Sign up</button>
        </form>
      );
    }
  }
  
  export default LoginForm;
  