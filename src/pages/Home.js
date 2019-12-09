import React from 'react';
import {connect} from "react-redux";
import StudentHome from "./StudentHome";
import TutorHome from "./TutorHome";
import {Link} from "react-router-dom";
import banner from "../images/home-background.jpg";
import TutorCard from "../components/TutorCard";

class Home extends React.Component {
    render() {
        const state = this.props;
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
                <div class="intro-banner" data-background-image={banner}>
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

                        {/*// <!-- Search Bar -->*/}
                        <div class="row">
                            <div class="col-md-12">
                                <div class="intro-banner-search-form margin-top-95">
                                    {/*// <!-- Search Field -->*/}
                                    <div class="intro-search-field with-autocomplete">
                                        <label
                                            form="autocomplete-input"
                                            class="field-title ripple-effect"
                                        >
                                            Where?
                                        </label>
                                        <div class="input-with-icon">
                                            <input
                                                id="autocomplete-input"
                                                type="text"
                                                placeholder="Online Job"
                                            />
                                        </div>
                                    </div>

                                    {/*// <!-- Search Field -->*/}
                                    <div class="intro-search-field">
                                        <label
                                            form="intro-keywords"
                                            class="field-title ripple-effect"
                                        >
                                            What job you want?
                                        </label>
                                        <input
                                            id="intro-keywords"
                                            type="text"
                                            placeholder="Job Title or Keywords"
                                        />
                                    </div>

                                    {/*// <!-- Button -->*/}
                                    <div class="intro-search-button">
                                        <button
                                            class="button ripple-effect"
                                            onClick="window.location.href='jobs-list-layout-full-page-map.html'"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*// <!-- Stats -->*/}
                        <div class="row">
                            <div class="col-md-12">
                                <ul class="intro-stats margin-top-45 hide-under-992px">
                                    <li>
                                        <strong class="counter">1,586</strong>
                                        <span>Jobs Posted</span>
                                    </li>
                                    <li>
                                        <strong class="counter">3,543</strong>
                                        <span>Tasks Posted</span>
                                    </li>
                                    <li>
                                        <strong class="counter">1,232</strong>
                                        <span>Freelancers</span>
                                    </li>
                                </ul>
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
                                                    multiple
                                                    data-selected-text-format="count"
                                                    data-size="7"
                                                >
                                                    <option selected>Any place</option>
                                                    <option>District 1</option>
                                                    <option>District 2</option>
                                                    <option>District 3</option>
                                                    <option>District 4</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-3">
                                                <select
                                                    className="selectpicker default"
                                                    multiple
                                                    data-selected-text-format="count"
                                                    data-size="7"
                                                >
                                                    <option selected>Any Hourly Rate</option>
                                                    <option>$10/hr and below</option>
                                                    <option>$10/hr - $30/hr</option>
                                                    <option>$30/hr - $60/hr</option>
                                                    <option>$60/hr and above</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-3">
                                                <select
                                                    className="selectpicker default"
                                                    multiple
                                                    data-selected-text-format="count"
                                                    data-size="7"
                                                >
                                                    <option selected>Any Categories</option>
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
                                        </div>
                                    </div>
                                </div>
                                {/*// <!-- Filters / End -->*/}

                                <div class="freelancers-container freelancers-grid-layout">
                                    {/*// <!--Freelancer -->*/}
                                    <TutorCard
                                        avatar={"https://www.w3schools.com/howto/img_avatar.png"}
                                        name={"Tom"}
                                        job={"UX/UI Design"}
                                        location={"London"}
                                        rate={"60hr / h"}
                                        jobSuccess={"95%"}
                                    />
                                    {/*// <!-- Freelancer / End -->*/}

                                    {/*// <!--Freelancer -->*/}
                                    <TutorCard
                                        avatar={"https://www.w3schools.com/howto/img_avatar.png"}
                                        name={"Tom"}
                                        job={"UX/UI Design"}
                                        location={"London"}
                                        rate={"60hr / h"}
                                        jobSuccess={"95%"}
                                    />
                                    {/*// <!-- Freelancer / End -->*/}

                                    {/*// <!--Freelancer -->*/}
                                    <TutorCard
                                        avatar={"https://www.w3schools.com/howto/img_avatar.png"}
                                        name={"Tom"}
                                        job={"UX/UI Design"}
                                        location={"London"}
                                        rate={"60hr / h"}
                                        jobSuccess={"95%"}
                                    />
                                    {/*// <!-- Freelancer / End -->*/}

                                    {/*// <!--Freelancer -->*/}
                                    <TutorCard
                                        avatar={"https://www.w3schools.com/howto/img_avatar.png"}
                                        name={"Tom"}
                                        job={"UX/UI Design"}
                                        location={"London"}
                                        rate={"60hr / h"}
                                        jobSuccess={"95%"}
                                    />
                                    {/*// <!-- Freelancer / End -->*/}

                                    {/*// <!--Freelancer -->*/}
                                    <TutorCard
                                        avatar={"https://www.w3schools.com/howto/img_avatar.png"}
                                        name={"Tom"}
                                        job={"UX/UI Design"}
                                        location={"London"}
                                        rate={"60hr / h"}
                                        jobSuccess={"95%"}
                                    />
                                    {/*// <!-- Freelancer / End -->*/}

                                    {/*// <!--Freelancer -->*/}
                                    <TutorCard
                                        avatar={"https://www.w3schools.com/howto/img_avatar.png"}
                                        name={"Tom"}
                                        job={"UX/UI Design"}
                                        location={"London"}
                                        rate={"60hr / h"}
                                        jobSuccess={"95%"}
                                    />
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