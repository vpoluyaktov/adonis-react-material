import React from 'react';
import '../index.css';
import Client from '../api/Client'

class AdonisHello extends React.Component {
  
  state = {
    greetingMessage: ""
  };
  
  componentDidMount() {
    Client.getHello(greetingMessage => {
      this.setState({
        greetingMessage: greetingMessage
      })
    })
  }
  
  render() {
    return (
      <div className="AdonisSection">
        <img src="pyramid.png" class="Centered" alt="logo" />
        <div class="Centered"> 
          <p class="title">Hello from AdonisJS</p>
          <p class="subtitle">API responce {this.state.greetingMessage}</p>
        </div>
      </div>
    );
  }
}
  
export default AdonisHello;