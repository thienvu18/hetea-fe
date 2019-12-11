import React from "react";
import TutorCard from "../components/TutorCard";
import {filterAction, getAllTutorsRequest} from "../actions/UserActions";
import { connect } from "react-redux";
import RangeSlider from "../components/Slider";

class FullListTutors extends React.Component {
  constructor(props) {
    super(props);
    this.filters = {
      Location: "",
      HourRate: "",
      Skills: []
    };
  }

  filter = () => {
    console.log(this.filters);
    return this.props.filters(this.filters);
  };

  render() {
    const state = this.props;
    console.log(state.listTutors);
    const token = localStorage.getItem("user");
    state.fetchTutors(token);
    console.log(state.listTutors);
    return (
      <div>
        {/*// <!-- Spacer -->*/}
        <div class="margin-top-90" />
        {/*// <!-- Spacer / End-->*/}
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="sidebar-container">
                {/*// <!-- Location -->*/}
                <div className="sidebar-widget">
                  <h3>Location</h3>
                  <div className="input-with-icon">
                    <div id="autocomplete-container">
                      <input
                        id="autocomplete-input"
                        type="text"
                        placeholder="Location"
                        onChange={event => {
                          this.filters.Location = event.target.value;
                        }}
                      />
                    </div>
                    <i className="icon-material-outline-location-on" />
                  </div>
                </div>

                {/*// <!-- Hourly Rate -->*/}
                <div className="sidebar-widget">
                  <h3>Hourly Rate</h3>
                  <div className="margin-top-55" />

                  {/*// <!-- Range Slider -->*/}
                  <RangeSlider
                    value={[10, 50]}
                    handleChange={newValue => {
                      this.filters.HourRate = newValue;
                    }}
                  />
                </div>

                {/*// <!-- Tags -->*/}
                <div className="sidebar-widget">
                  <h3>Skills</h3>

                  {/*<div className="tags-container">*/}
                  {/*  <div className="tag">*/}
                  {/*    <input type="checkbox" id="tag1" />*/}
                  {/*    <label htmlFor="tag1">front-end dev</label>*/}
                  {/*  </div>*/}
                  {/*  <div className="tag">*/}
                  {/*    <input type="checkbox" id="tag2" />*/}
                  {/*    <label htmlFor="tag2">angular</label>*/}
                  {/*  </div>*/}
                  {/*  <div className="tag">*/}
                  {/*    <input type="checkbox" id="tag3" />*/}
                  {/*    <label htmlFor="tag3">react</label>*/}
                  {/*  </div>*/}
                  {/*  <div className="tag">*/}
                  {/*    <input type="checkbox" id="tag4" />*/}
                  {/*    <label htmlFor="tag4">vue js</label>*/}
                  {/*  </div>*/}
                  {/*  <div className="tag">*/}
                  {/*    <input type="checkbox" id="tag5" />*/}
                  {/*    <label htmlFor="tag5">web apps</label>*/}
                  {/*  </div>*/}
                  {/*  <div className="tag">*/}
                  {/*    <input type="checkbox" id="tag6" />*/}
                  {/*    <label htmlFor="tag6">design</label>*/}
                  {/*  </div>*/}
                  {/*  <div className="tag">*/}
                  {/*    <input type="checkbox" id="tag7" />*/}
                  {/*    <label htmlFor="tag7">wordpress</label>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  <div className="clearfix" />

                  {/*// <!-- More Skills -->*/}
                  <div className="keywords-container margin-top-20">
                    <div className="keyword-input-container">
                      <input
                        type="text"
                        className="keyword-input"
                        placeholder="add more skills"
                      />
                      <button className="keyword-input-button ripple-effect">
                        <i className="icon-material-outline-add" />
                      </button>
                    </div>
                    <div className="keywords-list" />
                    <div className="clearfix" />
                  </div>
                  {/*// <!-- Search Button -->*/}
                  <div class="sidebar-search-button-container">
                    <button
                      class="button ripple-effect"
                      onClick={() => this.filter()}
                    >
                      Search
                    </button>
                  </div>
                  {/*// <!-- Search Button / End-->*/}
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 content-left-offset">
              <h3 className="page-title">Search Results</h3>

              <div className="notify-box margin-top-15">
                <div className="sort-by">
                  <span>Sort by:</span>
                  <select className="selectpicker hide-tick">
                    <option>Relevance</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Random</option>
                  </select>
                </div>
              </div>

              {/*// <!-- Freelancers List Container -->*/}
              <div className="freelancers-container freelancers-list-layout margin-top-35">
                {/*// <!--Tutor -->*/}
                {state.listTutors.all().map(p => (
                  <TutorCard
                    key={p.number}
                    avatar={p.avatar}
                    name={p.name}
                    job={"UX/UI Design"}
                    location={"London"}
                    rate={"$60 / hr"}
                    jobSuccess={"95%"}
                    linkProfile={`/tutors/${p.number}`}
                  />
                ))}
                {/*// <!--Tutor / End-->*/}
              </div>
              {/*// <!-- Tasks Container / End -->*/}

              {/*// <!-- Pagination -->*/}
              <div className="clearfix" />
              <div className="row">
                <div className="col-md-12">
                  {/*// <!-- Pagination -->*/}
                  <div className="pagination-container margin-top-40 margin-bottom-60">
                    <nav className="pagination">
                      <ul>
                        <li className="pagination-arrow">
                          <a href="#" className="ripple-effect">
                            <i className="icon-material-outline-keyboard-arrow-left" />
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="ripple-effect">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="current-page ripple-effect">
                            2
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="ripple-effect">
                            3
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="ripple-effect">
                            4
                          </a>
                        </li>
                        <li className="pagination-arrow">
                          <a href="#" className="ripple-effect">
                            <i className="icon-material-outline-keyboard-arrow-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/*// <!-- Pagination / End -->*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listTutors: state.UserReducer.listTutors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTutors: token => {
      dispatch(getAllTutorsRequest(token));
    },
      filters: (filter)=>{
        dispatch(filterAction(filter));
      }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullListTutors);
