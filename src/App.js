import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './theme/theme.js';

import Home from './views/Home';
import Resume from './views/Resume';
import Subscription from './views/Subscription';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Box bg="#FAFAFA">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" exact component={Resume} />
            <Route
              path="/subscription-Management"
              exact
              component={Subscription}
            />
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
