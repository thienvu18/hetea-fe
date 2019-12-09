import React from 'react';
import {connect} from "react-redux";
import StudentHome from "./StudentHome";
import TutorHome from "./TutorHome";
import {Link} from "react-router-dom";
import banner from "../images/home-background.jpg";
import TutorCard from "../components/TutorCard";
import data from "../data";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.filters={
            Location: 'Any place',
            HourRate: 'Any Hourly Rate',
            Category: 'Any Categories',
        }
    }
    render() {
        const state = this.props;
        console.log(state);
        if (state.isLogin) {
            if (state.accountType === 'tutor')
                return <TutorHome/>;
            else if (state.accountType === 'student')
                return <StudentHome/>;
        }
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
                                        <br/>
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
                {/*// <!-- Category Boxes -->*/}
                <div class="section margin-top-65">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="section-headline centered margin-bottom-15">
                                    <h3>Popular Job Categories</h3>
                                </div>

                                {/*// <!-- Category Boxes Container -->*/}
                                <div class="categories-container">
                                    {/*// <!-- Category Box -->*/}
                                    <Link to="/jobs-grid-layout-full-page" class="category-box">
                                        <div class="category-box-icon">
                                            <i class="icon-line-awesome-file-code-o"/>
                                        </div>
                                        <div class="category-box-counter">612</div>
                                        <div class="category-box-content">
                                            <h3>Web & Software Dev</h3>
                                            <p>Software Engineer, Web / Mobile Developer & More</p>
                                        </div>
                                    </Link>

                                    {/*// <!-- Category Box -->*/}
                                    <Link
                                        to="/jobs-list-layout-full-page-map"
                                        class="category-box"
                                    >
                                        <div class="category-box-icon">
                                            <i class="icon-line-awesome-cloud-upload"/>
                                        </div>
                                        <div class="category-box-counter">113</div>
                                        <div class="category-box-content">
                                            <h3>Data Science & Analitycs</h3>
                                            <p>Data Specialist / Scientist, Data Analyst & More</p>
                                        </div>
                                    </Link>

                                    {/*// <!-- Category Box -->*/}
                                    <Link
                                        to="/jobs-list-layout-full-page-map"
                                        class="category-box"
                                    >
                                        <div class="category-box-icon">
                                            <i class="icon-line-awesome-cloud-upload"/>
                                        </div>
                                        <div class="category-box-counter">113</div>
                                        <div class="category-box-content">
                                            <h3>Data Science & Analitycs</h3>
                                            <p>Data Specialist / Scientist, Data Analyst & More</p>
                                        </div>
                                    </Link>

                                    {/*// <!-- Category Box -->*/}
                                    <Link
                                        to="/jobs-list-layout-full-page-map"
                                        class="category-box"
                                    >
                                        <div class="category-box-icon">
                                            <i class="icon-line-awesome-cloud-upload"/>
                                        </div>
                                        <div class="category-box-counter">113</div>
                                        <div class="category-box-content">
                                            <h3>Data Science & Analitycs</h3>
                                            <p>Data Specialist / Scientist, Data Analyst & More</p>
                                        </div>
                                    </Link>

                                    {/*// <!-- Category Box -->*/}
                                    <Link
                                        to="/jobs-list-layout-full-page-map"
                                        class="category-box"
                                    >
                                        <div class="category-box-icon">
                                            <i class="icon-line-awesome-cloud-upload"/>
                                        </div>
                                        <div class="category-box-counter">113</div>
                                        <div class="category-box-content">
                                            <h3>Data Science & Analitycs</h3>
                                            <p>Data Specialist / Scientist, Data Analyst & More</p>
                                        </div>
                                    </Link>

                                    {/*// <!-- Category Box -->*/}
                                    <Link
                                        to="/jobs-list-layout-full-page-map"
                                        class="category-box"
                                    >
                                        <div class="category-box-icon">
                                            <i class="icon-line-awesome-cloud-upload"/>
                                        </div>
                                        <div class="category-box-counter">113</div>
                                        <div class="category-box-content">
                                            <h3>Data Science & Analitycs</h3>
                                            <p>Data Specialist / Scientist, Data Analyst & More</p>
                                        </div>
                                    </Link>

                                    {/*// <!-- Category Box -->*/}
                                    <Link
                                        to="/jobs-list-layout-full-page-map"
                                        class="category-box"
                                    >
                                        <div class="category-box-icon">
                                            <i class="icon-line-awesome-cloud-upload"/>
                                        </div>
                                        <div class="category-box-counter">113</div>
                                        <div class="category-box-content">
                                            <h3>Data Science & Analitycs</h3>
                                            <p>Data Specialist / Scientist, Data Analyst & More</p>
                                        </div>
                                    </Link>

                                    {/*// <!-- Category Box -->*/}
                                    <Link
                                        to="/jobs-list-layout-full-page-map"
                                        class="category-box"
                                    >
                                        <div class="category-box-icon">
                                            <i class="icon-line-awesome-cloud-upload"/>
                                        </div>
                                        <div class="category-box-counter">113</div>
                                        <div class="category-box-content">
                                            <h3>Data Science & Analitycs</h3>
                                            <p>Data Specialist / Scientist, Data Analyst & More</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- Category Boxes / End -->*/}

                {/*// <!-- Highest Rated Freelancers -->*/}
                <div class="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                {/*// <!-- Section Headline -->*/}
                                <div className="section-headline centered margin-bottom-30">
                                    <h3>Highest Rated Freelancers</h3>
                                </div>
                            </div>

                            <div class="col-xl-12">
                                {/*// <!--Filters -->*/}
                                <div className="col-lg-12">
                                    <div className="container margin-bottom-25">
                                        <div className="row">
                                            <span>Filters:</span>
                                            <div className="col-lg-3">
                                                <select
                                                    className="selectpicker default"
                                                    data-selected-text-format="count"
                                                    data-size="7"
                                                    onChange={e=>this.filters.Location=e.target.value}
                                                    value={this.filters.Location}
                                                >
                                                    <option value="Any Place">Any Place</option>
                                                    <option value="District 1">District 1</option>
                                                    <option value="District 2">District 2</option>
                                                    <option value="District 3">District 3</option>
                                                    <option value="District 4">District 4</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-3">
                                                <select
                                                    className="selectpicker default"
                                                    data-selected-text-format="count"
                                                    data-size="7"
                                                    onChange={e=>this.filters.HourRate=e.target.value}
                                                    value={this.filters.HourRate}

                                                >
                                                    <option value="Any Hourly Rate">Any Hourly Rate</option>
                                                    <option value="$10/hr and below">$10/hr and below</option>
                                                    <option value="$10/hr - $30/hr">$10/hr - $30/hr</option>
                                                    <option value="$30/hr - $60/hr">$30/hr - $60/hr</option>
                                                    <option value="$60/hr and above">$60/hr and above</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-3">
                                                <select
                                                    className="selectpicker default"
                                                    data-selected-text-format="count"
                                                    data-size="7"
                                                    onChange={e=>this.filters.Category=e.target.value}
                                                    value={this.filters.Category}

                                                >
                                                    <option value="Any Categories">Any Categories</option>
                                                    <option value="Software Developing">Software Developing</option>
                                                    <option value="IT & Networking">IT & Networking</option>
                                                    <option value="Writing">Writing</option>
                                                    <option value="Translations">Translation</option>
                                                    <option value="Sales & Marketing">Sales & Marketing</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*// <!-- Filters / End -->*/}

                                <div class="freelancers-container freelancers-grid-layout">
                                    {/*// <!--Tutor -->*/}
                                    {data.all().map(p => (
                                        <TutorCard key={p.number}
                                                   avatar={p.avatar}
                                                   name={p.name}
                                                   job={"UX/UI Design"}
                                                   location={"London"}
                                                   rate={"$60 / hr"}
                                                   jobSuccess={"95%"}
                                                   linkProfile={`/${p.number}`}
                                        />
                                    ))}
                                    {/*// <!-- Freelancer / End -->*/}
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
        msgErr: state.AuthenticationReducer.msgErr,
        accountType: state.AuthenticationReducer.accountType,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);