import React, { Component } from 'react';

import MaterialAppBar from './components/MaterialAppBar';
import ReactHello from './components/ReactHello';
import AdonisHello from './components/AdonisHello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MaterialAppBar />
        <ReactHello />
        <AdonisHello />
      </div>
    );
  }
}

export default App;
