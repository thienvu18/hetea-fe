import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import banner from "../images/home-background.jpg";
import TutorCard from "../components/TutorCard";
import {
  getAllTutorsRequest,
  getCurrentUserRequest
} from "../actions/UserActions";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchTutors();
  }

  render() {
    const state = this.props;
    console.log(state);

    console.log("list home", state.listTutors);

    return (
      <div>
        {/*//                 <!-- Intro Banner*/}
        {/*// ================================================== -->*/}
        {/*//                 <!-- add class "disable-gradient" to enable consistent background overlay -->*/}
        <div class="intro-banner " data-background-image={banner}>
          <div class="container">
            {/*// <!-- Intro Headline -->*/}
            <div class="row">
              <div class="col-md-12">
                <div class="banner-headline">
                  <h3>
                    <strong>
                      Hire experts or be hired for any job, any time.
                    </strong>
                    <br />
                    <span>
                      Thousands of small businesses use{" "}
                      <strong class="color">Hetea</strong> to turn their ideas
                      into reality.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*// <!-- Content*/}
        {/*// ================================================== -->*/}

        {/*// <!-- Highest Rated Freelancers -->*/}
        <div class="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                {/*// <!-- Section Headline -->*/}
                <div class="section-headline margin-top-0 margin-bottom-25">
                  <h3>Highest Rated Freelancers</h3>
                  <Link to="/tutors" class="headline-link">
                    Browse All Freelancers
                  </Link>
                </div>
              </div>

              <div class="col-xl-12">
                <div class="default-slick-carousel freelancers-container freelancers-grid-layout">
                  {/*// <!--Tutor -->*/}
                  {state.listTutors.all().map(p => (
                    <TutorCard
                      key={p.number}
                      avatar={p.picture}
                      name={p.name}
                      job={p.tagline}
                      location={p.address}
                      rate={`$${p.pricePerHour}/ hr`}
                      jobSuccess={"95%"}
                      linkProfile={`/tutors/${p.number}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*// <!-- Highest Rated Freelancers / End-->*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.AuthenticationReducer.isLogin,
    listTutors: state.UserReducer.listTutors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTutors: () => {
      dispatch(getAllTutorsRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
