import React from "react";
import Avatar from "@material-ui/core/Avatar";
import MessageComponent from "../components/Message";

const Message = () => {
  return (
    <div>
      <div className="dashboard-headline">
        <h3>Messages</h3>

        {/*// <!-- Breadcrumbs -->*/}
        <nav id="breadcrumbs" className="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>Messages</li>
          </ul>
        </nav>
      </div>

      <div className="messages-container margin-top-0">
        <div className="messages-container-inner">
          {/*// <!-- Messages -->*/}
          <div className="messages-inbox">
            <div className="messages-headline">
              <div className="input-with-icon">
                <input
                  id="autocomplete-input"
                  type="text"
                  placeholder="Search"
                />
                <i className="icon-material-outline-search" />
              </div>
            </div>

            <ul>
              <li>
                <a href="#">
                  <div className="message-avatar">
                    <Avatar src="../images/user-avatar-small-02.jpg" alt="David Peterson" />
                      <i className="status-icon status-online" />
                  </div>

                  <div className="message-by">
                    <div className="message-by-headline">
                      <h5>David Peterson</h5>
                      <span>4 hours ago</span>
                    </div>
                    <p>
                      Thanks for reaching out. I'm quite busy right now on many
                    </p>
                  </div>
                </a>
              </li>

              <li className="active-message">
                <a href="#">
                  <div className="message-avatar">
                    <i className="status-icon status-offline" />
                    <Avatar src="../images/user-avatar-small-02.jpg" alt="" />
                  </div>

                  <div className="message-by">
                    <div className="message-by-headline">
                      <h5>Sindy Forest</h5>
                      <span>Yesterday</span>
                    </div>
                    <p>
                      Hi Tom! Hate to break it to you but I'm actually on
                      vacation
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div className="message-avatar">
                    <i className="status-icon status-offline" />
                    <Avatar src="../images/user-avatar-placeholder.png" alt="" />
                  </div>

                  <div className="message-by">
                    <div className="message-by-headline">
                      <h5>Sebastiano Piccio</h5>
                      <span>2 days ago</span>
                    </div>
                    <p>
                      Hello, I want to talk about my project if you don't mind!
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div className="message-avatar">
                    <i className="status-icon status-online" />
                    <Avatar src="../images/user-avatar-placeholder.png" alt="" />
                  </div>

                  <div className="message-by">
                    <div className="message-by-headline">
                      <h5>Marcin Kowalski</h5>
                      <span>2 days ago</span>
                    </div>
                    <p>Yes, I received payment. Thanks for cooperation!</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {/*// <!-- Messages / End -->*/}

          {/*// <!-- Message Content -->*/}
          <div className="message-content">
            <div className="messages-headline">
              <h4>Sindy Forest</h4>
              <a href="#" className="message-action">
                <i className="icon-feather-trash-2" /> Delete Conversation
              </a>
            </div>

            {/*// <!-- Message Content Inner -->*/}
            <div className="message-content-inner">
              {/*// <!-- Time Sign -->*/}
              <div className="message-time-sign">
                <span>28 June, 2019</span>
              </div>

                <MessageComponent avatar="../images/user-avatar-small-01.jpg" message="Thanks for choosing my offer. I will start working on your
                      project tomorrow." me={true}/>
                <MessageComponent avatar="../images/user-avatar-small-02.jpg" message=" Great. If you need any further clarification let me know.
                      👍"/>


            {/*// <!-- Message Content Inner / End -->*/}

            {/*// <!-- Reply Area -->*/}
            <div className="message-reply">
              <textarea
                cols="1"
                rows="1"
                placeholder="Your Message"
                data-autoresize
              />
              <button className="button ripple-effect">Send</button>
            </div>
          </div>
          {/*// <!-- Message Content -->*/}
        </div>
      </div>
      </div>
    </div>
  );
};
export default Message;
