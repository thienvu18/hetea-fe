import React from "react";
import banner from "../images/single-freelancer.jpg";
import { connect } from "react-redux";
import ContractForm from "../components/ContractForm";
import LinearProgress from "@material-ui/core/LinearProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Redirect } from "react-router-dom";
import { createContractRequest } from "../actions/UserActions";

const BorderLinearProgress = withStyles({
  root: {
    backgroundColor: "#e0e0e0"
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#F45B69"
  }
})(LinearProgress);

class TutorDetail extends React.Component {
  constructor(props) {
    super(props);
    this.hourInDay = 4;
    this.days = 7;
  }

  doCreateContract = (token, tutor, tutee, price) => {
    console.log("create contract");
    console.log(token, tutor, tutee, price);

    var today = new Date();
    var startDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    var theDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    var endDate = new Date(theDate);
    endDate.setDate(endDate.getDate() + this.days);

    this.props.createContract(
      token,
      tutor,
      tutee,
      this.hourInDay,
      price,
      startDate,
      endDate
    );
    return alert("Create contract successful");
  };

  render() {
    const state = this.props;
    const tutor = state.listTutors.get(this.props.match.params.number);
    const token = localStorage.getItem("user");
    if (!tutor) {
      return <div>Sorry, but the player was not found</div>;
    }
    return (
      <div>
        {/*Title*/}
        <div
          className="single-page-header freelancer-header"
          data-background-image={banner}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="single-page-header-inner">
                  <div className="left-side">
                    <div className="header-image freelancer-avatar">
                      <img src={tutor.picture} alt="Avatar" />
                    </div>
                    <div className="header-details">
                      <h3>
                        {tutor.name} <span>{tutor.tagline}</span>
                      </h3>
                      <ul>
                        <li>
                          <div className="star-rating" data-rating="5.0" />
                          <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                          >
                            <Rating name="read-only" value={5.0} readOnly />
                          </Box>
                        </li>
                        <li>
                          <div className="verified-badge-with-title">
                            Verified
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/*// <!-- Content -->*/}
            <div className="col-xl-8 col-lg-8 content-right-offset">
              {/*// <!-- Page Content -->*/}
              <div className="single-page-section">
                <h3 className="margin-bottom-25">About Me</h3>
                <p>{tutor.bio}</p>
              </div>

              {/*// <!-- Boxed List -->*/}
              <div className="boxed-list margin-bottom-60">
                <div className="boxed-list-headline">
                  <h3>
                    <i className="icon-material-outline-thumb-up" /> Work
                    History and Feedback
                  </h3>
                </div>
                <ul className="boxed-list-ul">
                  <li>
                    <div className="boxed-list-item">
                      {/*// <!-- Content -->*/}
                      <div className="item-content">
                        <h4>
                          Web, Database and API Developer{" "}
                          <span>Rated as Freelancer</span>
                        </h4>
                        <div className="item-details margin-top-10">
                          <div className="star-rating" data-rating="5.0" />
                          <div className="detail-item">
                            <i className="icon-material-outline-date-range" />{" "}
                            August 2019
                          </div>
                        </div>
                        <div className="item-description">
                          <p>
                            Excellent programmer - fully carried out my project
                            in a very professional manner.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="boxed-list-item">
                      {/*// <!-- Content -->*/}
                      <div className="item-content">
                        <h4>
                          WordPress Theme Installation{" "}
                          <span>Rated as Freelancer</span>
                        </h4>
                        <div className="item-details margin-top-10">
                          <div className="star-rating" data-rating="5.0" />
                          <div className="detail-item">
                            <i className="icon-material-outline-date-range" />{" "}
                            June 2019
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="boxed-list-item">
                      {/*// <!-- Content -->*/}
                      <div className="item-content">
                        <h4>
                          Fix Python Selenium Code{" "}
                          <span>Rated as Employer</span>
                        </h4>
                        <div className="item-details margin-top-10">
                          <div className="star-rating" data-rating="5.0" />
                          <div className="detail-item">
                            <i className="icon-material-outline-date-range" />{" "}
                            May 2019
                          </div>
                        </div>
                        <div className="item-description">
                          <p>
                            I was extremely impressed with the quality of work
                            AND how quickly he got it done. He then offered to
                            help with another side part of the project that we
                            didn't even think about originally.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="boxed-list-item">
                      {/*// <!-- Content -->*/}
                      <div className="item-content">
                        <h4>
                          PHP Core Website Fixes{" "}
                          <span>Rated as Freelancer</span>
                        </h4>
                        <div className="item-details margin-top-10">
                          <div className="star-rating" data-rating="5.0" />
                          <div className="detail-item">
                            <i className="icon-material-outline-date-range" />{" "}
                            May 2019
                          </div>
                        </div>
                        <div className="item-description">
                          <p>
                            Awesome work, definitely will rehire. Poject was
                            completed not only with the requirements, but on
                            time, within our small budget.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/*// <!-- Boxed List / End -->*/}
            </div>

            {/*// <!-- Sidebar -->*/}
            <div className="col-xl-4 col-lg-4">
              <div className="sidebar-container">
                {/*// <!-- Profile Overview -->*/}
                <div className="profile-overview">
                  <div className="overview-item">
                    <strong>{`$${tutor.pricePerHour}`}</strong>
                    <span>Hourly Rate</span>
                  </div>
                  <div className="overview-item">
                    <strong>53</strong>
                    <span>Jobs Done</span>
                  </div>
                  <div className="overview-item">
                    <strong>22</strong>
                    <span>Rehired</span>
                  </div>
                </div>

                <ContractForm
                  name={tutor.name}
                  hourInDay={newValue => {
                    this.hourInDay = newValue;
                  }}
                  days={newValue => {
                    this.days = newValue;
                  }}
                  makeOffer={() =>
                    this.doCreateContract(
                      token,
                      tutor.number,
                      state.id,
                      tutor.pricePerHour
                    )
                  }
                />

                {/*// <!-- Freelancer Indicators -->*/}
                <div className="sidebar-widget">
                  <div className="freelancer-indicators">
                    {/*// <!-- Indicator -->*/}
                    <div className="indicator">
                      <strong>88%</strong>
                      <BorderLinearProgress
                        variant="determinate"
                        // color="secondary"
                        value={88}
                      />
                      <span>Job Success</span>
                    </div>

                    {/*// <!-- Indicator -->*/}
                    <div className="indicator">
                      <strong>100%</strong>
                      <BorderLinearProgress
                        variant="determinate"
                        // color="secondary"
                        value={100}
                      />
                      <span>Recommendation</span>
                    </div>

                    {/*// <!-- Indicator -->*/}
                    <div className="indicator">
                      <strong>90%</strong>
                      <BorderLinearProgress
                        variant="determinate"
                        // color="secondary"
                        value={90}
                      />
                      <span>On Time</span>
                    </div>

                    {/*// <!-- Indicator -->*/}
                    <div className="indicator">
                      <strong>80%</strong>
                      <BorderLinearProgress
                        variant="determinate"
                        // color="secondary"
                        value={80}
                      />
                      <span>On Budget</span>
                    </div>
                  </div>
                </div>

                {/*// <!-- Widget -->*/}
                <div className="sidebar-widget">
                  <h3>Skills</h3>
                  <div className="task-tags">
                    {tutor.skills.map((skill, index) => {
                      return <span key={index}>{skill}</span>;
                    })}
                  </div>
                </div>

                {/*// <!-- Sidebar Widget -->*/}
                <div className="sidebar-widget">
                  <h3>Bookmark or Share</h3>

                  {/*// <!-- Bookmark Button -->*/}
                  <button className="bookmark-button margin-bottom-25">
                    <span className="bookmark-icon" />
                    <span className="bookmark-text">Bookmark</span>
                    <span className="bookmarked-text">Bookmarked</span>
                  </button>

                  {/*// <!-- Copy URL -->*/}
                  <div className="copy-url">
                    <input
                      id="copy-url"
                      type="text"
                      value=""
                      className="with-border"
                    />
                    <button
                      className="copy-url-button ripple-effect"
                      data-clipboard-target="#copy-url"
                      title="Copy to Clipboard"
                      data-tippy-placement="top"
                    >
                      <i className="icon-material-outline-file-copy" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*// <!-- Spacer -->*/}
        <div className="margin-top-15" />
        {/*// <!-- Spacer / End-->*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listTutors: state.UserReducer.listTutors,
    isLogin: state.AuthenticationReducer.isLogin,
    id: state.UserReducer.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createContract: (token, tutor, tutee, hours, price, startDate, endDate) => {
      dispatch(
        createContractRequest(
          token,
          tutor,
          tutee,
          hours,
          price,
          startDate,
          endDate
        )
      );
    }
    // fetchTutors: token => {
    //     dispatch(getAllTutorsRequest(token));
    // },
    // filters: (filter)=>{
    //     dispatch(filterAction(filter));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorDetail);
