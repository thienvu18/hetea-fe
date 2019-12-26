import React from "react";
import Sidebar from "../components/Sidebar";
import { Route } from "react-router-dom";
import Message from "./Message";
import AccountSettings from "./AccountTutor";

export default class TutorHome extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content-container" data-simplebar="">
          <div className="dashboard-content-inner">
            {/*<!-- Dashboard Headline -->*/}
            <Route path="/tutor/message" component={Message}/>
            <Route path="/tutor/account" component={AccountSettings}/>

            {/*<!-- Footer -->*/}
            <div class="dashboard-footer-spacer" />
            {/*<!-- Footer / End -->*/}
          </div>
        </div>
      </div>
    );
  }
}
