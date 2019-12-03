import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/Footer';

import Dashboard from './pages/Dashboard';
import Error from './pages/Error';

function App() {
  return (
    <div id="wrapper">
      <Header ></Header>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
