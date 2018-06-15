import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props){
      super(props);

      this.state={
        accessToken: "",
      };
    }
  
    handleTokenChanged = (e) => {
      this.setState({
        accessToken: e.target.value
      });
    }
  

    handleSignIn = () => {
      const {feathersAPI, handleUserName} = this.props;

      feathersAPI.client.authenticate({
        strategy: 'custom',
        accessToken: this.state.accessToken,
      }).then(response => {
        console.log('Authenticated!', response);
        return feathersAPI.client.passport.verifyJWT(response.accessToken);
      }).then(payload => {
         console.log('JWT Payload', payload);
         handleUserName(payload.rle);
      }).catch((err) => {
        // show login page
        console.log('err:', err);
      });

    }

    // handleSignUp = () => {
    //   const {feathersAPI} = this.props;

    //   feathersAPI.client.service('users').create({
    //     username: this.state.username,
    //     password: this.state.password,
    //     authlevel: 1,
    //   }).then((response)=>{
    //     console.log('Create new user:', response);
    //     this.handleSignIn();
    //   });
    // }
  
    render() {
      console.log("this.state:", this.state);
      return (
        <form onSubmit={(e)=>{
          e.preventDefault();
        }}>
            <label>
                Access Token:
                <input type="text" name="token" value={this.state.accessToken} onChange={this.handleTokenChanged}/>
            </label>
            <br/>
            <button onClick={this.handleSignIn}>Sign in</button>
        </form>
      );
    }
  }
  
  export default LoginForm;
  