import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getAllContractsRequest,
  UpdateContractRequest
} from "../actions/UserActions";
import Avatar from "@material-ui/core/Avatar";
import data from "../data";

class ManageTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccepted: false
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("user");
    this.props.fetchContracts(token);
  }

  render() {
    console.log("this.props.listContracts", this.props.listContracts.all());
    const token = localStorage.getItem("user");

    return (
      <div>
        {/*// <!-- Dashboard Headline -->*/}
        <div class="dashboard-headline">
          <h3>Manage Tasks</h3>

          {/*// <!-- Breadcrumbs -->*/}
          <nav id="breadcrumbs" class="dark">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#">Tutor</a>
              </li>
              <li>Manage Tasks</li>
            </ul>
          </nav>
        </div>

        {/*// <!-- Row -->*/}
        <div class="row">
          {/*// <!-- Dashboard Box -->*/}
          <div class="col-xl-12">
            <div class="dashboard-box margin-top-0">
              {/*// <!-- Headline -->*/}
              <div class="headline">
                <h3>
                  <i class="icon-material-outline-supervisor-account" /> 3
                  Bidders
                </h3>
                <div class="sort-by">
                  <select class="selectpicker hide-tick">
                    <option>Highest First</option>
                    <option>Lowest First</option>
                    <option>Fastest First</option>
                  </select>
                </div>
              </div>

              <div class="content">
                <ul class="dashboard-box-list">
                  <li>
                    {/*// <!-- Overview -->*/}
                    {this.props.listContracts.all().map(({ ...p }) => {
                      const tmp = JSON.stringify(this.props.listContracts);
                      console.log("bbbbbb", tmp);
                      return (
                        <div className="freelancer-overview manage-candidates">
                          <div className="freelancer-overview-inner">
                            {/*// <!-- Avatar -->*/}
                            <div className="freelancer-avatar">
                              <div className="verified-badge" />
                              <img src={p.tuteeAvatar} alt="" />
                            </div>

                            {/*// <!-- Name -->*/}
                            <div className="freelancer-name">
                              <h4>{p.tuteeName}</h4>

                              {/*// <!-- Bid Details -->*/}
                              <ul className="dashboard-task-info bid-info">
                                <li>
                                  <strong>{`$${p.price}`}</strong>
                                  <span>Price</span>
                                </li>
                                <li>
                                  <strong>{`${p.hours} hr`}</strong>
                                  <span>Delivery Time</span>
                                </li>
                              </ul>

                              {/*// <!-- Buttons -->*/}

                              <div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                                {this.state.isAccepted ? null : (
                                  <button
                                    className="popup-with-zoom-anim button ripple-effect"
                                    onClick={() => {
                                      this.props.updateStatus(
                                        { id: p.id, status: "confirmed" },
                                        token
                                      );
                                      this.setState({ isAccepted: true });
                                    }}
                                  >
                                    <i className="icon-material-outline-check" />{" "}
                                    Accept Offer
                                  </button>
                                )}
                                <button className="popup-with-zoom-anim button dark ripple-effect">
                                  <i className="icon-feather-mail" /> Send
                                  Message
                                </button>
                                <button
                                  href="#"
                                  className="button gray ripple-effect ico"
                                  title="Remove Bid"
                                  data-tippy-placement="top"
                                >
                                  <i className="icon-feather-trash-2" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listContracts: state.UserReducer.listContracts,
    isLogin: state.AuthenticationReducer.isLogin,
    id: state.UserReducer.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContracts: token => {
      dispatch(getAllContractsRequest(token));
    },
    updateStatus: (data, token) => {
      dispatch(UpdateContractRequest(data, token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageTask);
