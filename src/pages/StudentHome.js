import React from "react";
import TutorCard from "../components/TutorCard";

export default class StudentHome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="margin-top-90" />
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
                    />
                  </div>
                  <i className="icon-material-outline-location-on" />
                </div>
              </div>

              {/*// <!-- Category -->*/}
              <div className="sidebar-widget">
                <h3>Category</h3>
                <select
                  className="selectpicker default"
                  multiple
                  data-selected-text-format="count"
                  data-size="7"
                  title="All Categories"
                >
                  <option>Admin Support</option>
                  <option>Customer Service</option>
                  <option>Data Analytics</option>
                  <option>Design & Creative</option>
                  <option>Legal</option>
                  <option>Software Developing</option>
                  <option>IT & Networking</option>
                  <option>Writing</option>
                  <option>Translation</option>
                  <option>Sales & Marketing</option>
                </select>
              </div>

              {/*// <!-- Keywords -->*/}
              <div className="sidebar-widget">
                <h3>Keywords</h3>
                <div className="keywords-container">
                  <div className="keyword-input-container">
                    <input
                      type="text"
                      className="keyword-input"
                      placeholder="e.g. task title"
                    />
                    <button className="keyword-input-button ripple-effect">
                      <i className="icon-material-outline-add" />
                    </button>
                  </div>
                  <div className="keywords-list" />
                  <div className="clearfix" />
                </div>
              </div>

              {/*// <!-- Hourly Rate -->*/}
              <div className="sidebar-widget">
                <h3>Hourly Rate</h3>
                <div className="margin-top-55" />

                {/*// <!-- Range Slider -->*/}
                <input
                  className="range-slider"
                  type="text"
                  value=""
                  data-slider-currency="$"
                  data-slider-min="10"
                  data-slider-max="250"
                  data-slider-step="5"
                  data-slider-value="[10,250]"
                />
              </div>

              {/*// <!-- Tags -->*/}
              <div className="sidebar-widget">
                <h3>Skills</h3>

                <div className="tags-container">
                  <div className="tag">
                    <input type="checkbox" id="tag1" />
                    <label htmlFor="tag1">front-end dev</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag2" />
                    <label htmlFor="tag2">angular</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag3" />
                    <label htmlFor="tag3">react</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag4" />
                    <label htmlFor="tag4">vue js</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag5" />
                    <label htmlFor="tag5">web apps</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag6" />
                    <label htmlFor="tag6">design</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag7" />
                    <label htmlFor="tag7">wordpress</label>
                  </div>
                </div>
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
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 content-left-offset">
            <h3 className="page-title">Search Results</h3>

            <div className="notify-box margin-top-15">
              <div className="switch-container">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="switch-button" />
                  <span className="switch-text">
                    Turn on email alerts for this search
                  </span>
                </label>
              </div>

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

            {/*// <!-- Tutors List Container -->*/}
            <div className="freelancers-container freelancers-list-layout margin-top-35">
              <TutorCard />

              <TutorCard />

              <TutorCard />

              <TutorCard />
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
                        <a href="/" className="ripple-effect">
                          <i className="icon-material-outline-keyboard-arrow-left" />
                        </a>
                      </li>
                      <li>
                        <a href="/" className="ripple-effect">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="/" className="current-page ripple-effect">
                          2
                        </a>
                      </li>
                      <li>
                        <a href="/" className="ripple-effect">
                          3
                        </a>
                      </li>
                      <li>
                        <a href="/" className="ripple-effect">
                          4
                        </a>
                      </li>
                      <li className="pagination-arrow">
                        <a href="/" className="ripple-effect">
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
    );
  }
}
