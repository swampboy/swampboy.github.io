import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import store from './Redux/store';
import Layout from './Layout';
import { Swamp, Merch, Music, About, Contact } from './Scenes';
const merchLocation = 'http://basementrap.bigcartel.com';

class App extends PureComponent {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <Layout>
                <Route exact path="/" render={Swamp} />
                <Route exact path="/about" render={About} />
                <Route exact path="/contact" render={Contact} />
                <Route exact path="/merch" render={() => <Merch merchLocation={merchLocation} />} />
                <Route exact path="/music" render={Music} />
            </Layout>
          </Router>
        </Provider>
    );
  }
}

export default App;
