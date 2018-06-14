import React, { Component } from 'react';

class MessagePanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            target: "",
        };
    };


    onMessageChange = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    onTargetChange = (event) => {
        this.setState({
            target: event.target.value
        });
    }

    handleSendMessage = () => {
        const {feathersAPI} = this.props;

        const data = {
            text: this.state.input,
            receiver: this.state.target,
        };

        feathersAPI.client.service('messages').create(data);
    }

    render() {
        const {messages, username} = this.props;

        const messageList = messages.map((m, index) => {
            return <h3 key={index}>{m.text + "\n"}</h3>;
        });

        return (
            <div className='content'>
                <h1>Login as {username}</h1>
                <br/>
                <input
                    className="input"
                    autoFocus
                    type="text"
                    name="target"
                    value={this.state.target}
                    onChange={this.onTargetChange}
                    placeholder='Type-in your receiver'
                />
                <br/>
                <input
                    className="input"
                    autoFocus
                    type="text"
                    name="message"
                    value={this.state.input}
                    onChange={this.onMessageChange}
                    placeholder='Type-in your message'
                />
                <br/>
                <button onClick={this.handleSendMessage}>submit</button>
                <br/>

                <div>
                    {messageList}
                </div>
            </div>
        );
    };
} 

export default MessagePanel;