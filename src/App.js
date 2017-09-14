import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import store from './Redux/store';
import Layout from './Layout';
import { Swamp, Music, About, Contact } from './Scenes';

const App = () => 
        <Provider store={store}>
          <Router>
            <Layout>
                <Route exact path="/" component={Swamp} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/music" component={Music} />
            </Layout>
          </Router>
        </Provider>;

export default App;
