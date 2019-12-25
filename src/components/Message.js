import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/user-avatar-small-03.jpg";
import Avatar from "@material-ui/core/Avatar";

const MessageComponent = props => {
  const { avatar, message, me } = props;
  return (
    <div>
      <div className={me ? "message-bubble me" : "message-bubble"}>
        <div className="message-bubble-inner">
          <div className="message-avatar">
            <Avatar src={avatar} alt="Avatar" />
          </div>
          <div className="message-text">
            <p>{message}</p>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};
export default MessageComponent;
