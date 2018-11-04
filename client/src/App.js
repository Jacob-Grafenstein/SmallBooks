import React, { Component } from 'react';
import AppNavBar from './components/AppNavbar';
import ShortStoryList from './components/ShortStoryList';
import ShortStoryModal from './components/shortStoryModal';
import { Container } from 'reactstrap';

/* Import for our store and redux */
import { Provider } from 'react-redux';
import store from './store';

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
} from '@fortawesome/free-solid-svg-icons';



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
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <AppNavBar />
          </header>
          <Container>
            <ShortStoryModal />
            <ShortStoryList />
          </Container>
          
        </div>
      </Provider>
    );
  }
}

export default App;
