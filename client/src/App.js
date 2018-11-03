import React, { Component } from 'react';
import AppNavBar from './components/AppNavbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

library.add(faCoffee);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppNavBar />
        </header>
      </div>
    );
  }
}

export default App;
