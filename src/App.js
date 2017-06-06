import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Layout from './Layout';
import { Swamp, Merch, Music, About, Contact } from './Scenes';


class App extends Component {
  render() {
    return (
        <Router>
          <Layout>
              <Route exact path="/" render={Swamp} />
              <Route exact path="/about" render={About} />
              <Route exact path="/contact" render={Contact} />
              <Route exact path="/merch" render={Merch} />
              <Route exact path="/music" render={Music} />
          </Layout>
        </Router>
    );
  }
}

export default App;
