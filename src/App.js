import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import PageNotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <div id="wrapper">
      <Router>
          <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
