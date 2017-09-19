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
                  <!-- Global Site Tag (gtag.js) - Google Analytics -->
                  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-72114421-2"></script>
                  <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)};
                    gtag('js', new Date());
                  
                    gtag('config', 'UA-72114421-2');
                  </script>
                  <script>
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                  
                    ga('create', 'UA-72114421-2', 'auto');
                    ga('send', 'pageview');
                  </script>
                </Helmet>
                <Route exact path="/" component={Swamp} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/music" component={Music} />
            </Layout>
          </Router>
        </Provider>;

export default App;
