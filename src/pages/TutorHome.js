import React from "react";
import Sidebar from "../components/Sidebar";
import { Route,Redirect } from "react-router-dom";
import Message from "./Message";
import AccountSettings from "./AccountTutor";
import ManageTask from "./ManageTask";

export default class TutorHome extends React.Component {
  render() {
      const token=localStorage.getItem("user");
      if(!token)
      {
          return <Redirect to="/"/>
      }
    return (
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content-container" data-simplebar="">
          <div className="dashboard-content-inner">
            {/*<!-- Dashboard Headline -->*/}
            <Route path="/tutor/message" component={Message}/>
            <Route path="/tutor/account" component={AccountSettings}/>
              <Route path="/tutor/tasks" component={ManageTask}/>

            {/*<!-- Footer -->*/}
            <div class="dashboard-footer-spacer" />
            {/*<!-- Footer / End -->*/}
          </div>
        </div>
      </div>
    );
  }
}
