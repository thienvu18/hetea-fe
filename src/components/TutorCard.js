import React from "react";
import { Link } from "react-router-dom";
import user_country from '../images/flags/gb.svg'

const TutorCard = (props) => {
  const {avatar, name,job,location,rate,jobSuccess,linkProfile}=props;
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
              <img src={avatar} alt="avatar" />
            </Link>
          </div>

          {/*// <!-- Name -->*/}
          <div className="freelancer-name">
            <h4>
              <a href="/">
                {name}
                <img
                  className="flag"
                  src={user_country}
                  alt=""
                  title="United Kingdom"
                  data-tippy-placement="top"
                />
              </a>
            </h4>
            <span>{job}</span>
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
                <i className="icon-material-outline-location-on" /> {location}
              </strong>
            </li>
            <li>
              Rate <strong>{rate}</strong>
            </li>
            <li>
              Job Success <strong>{jobSuccess}</strong>
            </li>
          </ul>
        </div>
        <Link
          to={linkProfile}
          className="button button-sliding-icon ripple-effect"
        >
          View Profile <i className="icon-material-outline-arrow-right-alt" />
        </Link>
      </div>
    </div>
  );
};
export default TutorCard;
