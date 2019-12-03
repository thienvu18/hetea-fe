import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/Footer";

import TutorHome from "./pages/TutorHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/NotFound";
import StudentHome from "./pages/StudentHome";

function App() {
  return (
    <div id="wrapper">
      <Header />
      <Router>
        <Switch>
            <Route exact path="/student-home" component={StudentHome} />
            <Route exact path="/tutor-home" component={TutorHome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
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
