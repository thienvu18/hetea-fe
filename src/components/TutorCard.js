import React from "react";
import { Link } from "react-router-dom";
import user_avatar from '../images/user-avatar-big-01.jpg'
import user_country from '../images/flags/gb.svg'

const TutorCard = () => {
  return (
    <div className="freelancer">
      {/*// <!-- Overview -->*/}
      <div className="freelancer-overview">
        <div className="freelancer-overview-inner">
          {/*// <!-- Bookmark Icon -->*/}
          <span className="bookmark-icon" />

          {/*// <!-- Avatar -->*/}
          <div className="freelancer-avatar">
            <div className="verified-badge" />
            <Link to="/single-freelancer-profile">
              <img src={user_avatar} alt="avatar" />
            </Link>
          </div>

          {/*// <!-- Name -->*/}
          <div className="freelancer-name">
            <h4>
              <a href="/">
                Tom Smith
                <img
                  className="flag"
                  src={user_country}
                  alt=""
                  title="United Kingdom"
                  data-tippy-placement="top"
                />
              </a>
            </h4>
            <span>UI/UX Designer</span>
            {/*// <!-- Rating -->*/}
            <div className="freelancer-rating">
              <div className="star-rating" data-rating="4.9" />
            </div>
          </div>
        </div>
      </div>

      {/*// <!-- Details -->*/}
      <div className="freelancer-details">
        <div className="freelancer-details-list">
          <ul>
            <li>
              Location{" "}
              <strong>
                <i className="icon-material-outline-location-on" /> London
              </strong>
            </li>
            <li>
              Rate <strong>$60 / hr</strong>
            </li>
            <li>
              Job Success <strong>95%</strong>
            </li>
          </ul>
        </div>
        <Link
          to="/single-freelancer-profile"
          className="button button-sliding-icon ripple-effect"
        >
          View Profile <i className="icon-material-outline-arrow-right-alt" />
        </Link>
      </div>
    </div>
  );
};
export default TutorCard;
