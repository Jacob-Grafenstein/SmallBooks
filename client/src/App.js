import React, { Component } from 'react';
import AppNavBar from './components/AppNavbar';
import ShortStoryList from './components/ShortStoryList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
)

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppNavBar />
          <ShortStoryList />
        </header>
      </div>
    );
  }
}

export default App;
