import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import store from './Redux/store';
import Layout from './Layout';
import { Helmet } from "react-helmet";
import { Swamp, Music, About, Contact } from './Scenes';
import swampImg from './Assets/Images/swamp.png'

const metaDescription = `
  Butch Dawnson aka SWAMP BOY.
`;

const App = () => 
        <Provider store={store}>
          <Router>
            <Layout>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>SWAMP BOY</title>

                  <meta property="og:title" content="SWAMP BOY"/>
                  <meta property="og:image" content={swampImg} />
                  <meta property="og:site_name" content="SWAMP BOY MUSIC PAGE"/>
                  <meta property="og:description" content={metaDescription} />
                </Helmet>
                <Route exact path="/" component={Swamp} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/music" component={Music} />
            </Layout>
          </Router>
        </Provider>;

export default App;
