import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import PageNotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TutorDetail from "./pages/TutorDetail";
import FullListTutors from "./pages/FullListTutor";
import TutorHome from "./pages/TutorHome";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <div id="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tutors" component={FullListTutors} />
          <Route exact path="/dashboard" component={AccountSettings} />
          <Route path="/tutors/:number" component={TutorDetail} />
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
