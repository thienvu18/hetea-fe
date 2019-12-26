import React from "react";
import TutorCard from "../components/TutorCard";
import { filterAction, getAllTutorsRequest } from "../actions/UserActions";
import { connect } from "react-redux";
import RangeSlider from "../components/Slider";

class FullListTutors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      currentPage: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.filters = {
      Location: "",
      HourRate: "",
      Skills: []
    };
  }

  componentDidMount() {
    this.props.fetchTutors();
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  filter = () => {
    console.log(this.filters);
    return this.props.filters(this.filters);
  };

  paginate = (array, page_size, page_number) => {
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  };

  render() {
    const state = this.props;
    console.log(state.listTutors);

    const { currentPage } = this.state;
    const currentTodos = this.paginate(state.listTutors.all(), 2, currentPage);

    console.log("currentTodos", currentTodos);

    const renderTodos = currentTodos.map(p => {
      return (
        <TutorCard
          key={p.number}
          avatar={p.picture}
          name={p.name}
          job={p.tagline}
          location={p.address}
          rate={`$${p.pricePerHour} / hr`}
          jobSuccess={"95%"}
          linkProfile={`/tutors/${p.number}`}
        />
      );
    });
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(state.listTutors.all().length / 2); i++) {
      pageNumbers.push(i);
    }

    console.log("pageNumbers", pageNumbers);
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="ripple-effect"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });
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
                {renderTodos}

                {/*// <!--Tutor / End-->*/}
              </div>
              {/*// <!-- Tasks Container / End -->*/}

              <div className="clearfix" />
              <div className="row">
                <div className="col-md-12">
                  {/*// <!-- Pagination -->*/}
                  <div className="pagination-container margin-top-40 margin-bottom-60">
                    <nav className="pagination">
                      <ul>{renderPageNumbers}</ul>
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
    fetchTutors: () => {
      dispatch(getAllTutorsRequest());
    },
    filters: filter => {
      dispatch(filterAction(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullListTutors);
