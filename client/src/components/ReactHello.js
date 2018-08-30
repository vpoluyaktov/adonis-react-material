import React from 'react';
import logo from '../logo.svg';
import '../index.css';

function ReactHello() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Hello from React</h1>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.        
      </p>
    </header>
  );
}
  
export default ReactHello;