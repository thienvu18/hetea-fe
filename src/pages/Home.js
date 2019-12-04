import React from 'react';
import { connect } from "react-redux";
import StudentHome from "./StudentHome";
import TutorHome from "./TutorHome";
import {Link} from "react-router-dom";
import logo from "../images/company-logo-01.png";
import logo2 from "../images/featured-city-01.jpg";
import banner from "../images/home-background.jpg";
import avatar from "../images/user-avatar-big-01.jpg";
import country from "../images/flags/gb.svg";

class Home extends React.Component {
    render() {
        const state=this.props;
        if(state.isLogin){
            if(state.accountType==='tutor')
                return <TutorHome/>;
            else if(state.accountType==='student')
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
                                        <strong>Hire experts or be hired for any job, any time.</strong>
                                        <br/>
                                            <span>Thousands of small businesses use <strong class="color">Hireo</strong> to turn their ideas into reality.</span>
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
                                        <label form="autocomplete-input" class="field-title ripple-effect">Where?</label>
                                        <div class="input-with-icon">
                                            <input id="autocomplete-input" type="text" placeholder="Online Job"/>
                                        </div>
                                    </div>

                                    {/*// <!-- Search Field -->*/}
                                    <div class="intro-search-field">
                                        <label form="intro-keywords" class="field-title ripple-effect">What job you want?</label>
                                        <input id="intro-keywords" type="text" placeholder="Job Title or Keywords"/>
                                    </div>

                                    {/*// <!-- Button -->*/}
                                    <div class="intro-search-button">
                                        <button class="button ripple-effect" onClick="window.location.href='jobs-list-layout-full-page-map.html'">Search</button>
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
                                    <Link to="/jobs-list-layout-full-page-map" class="category-box">
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
                                    <Link to="/jobs-list-layout-full-page-map" class="category-box">
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
                                    <Link to="/jobs-list-layout-full-page-map" class="category-box">
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
                                    <Link to="/jobs-list-layout-full-page-map" class="category-box">
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
                                    <Link to="/jobs-list-layout-full-page-map" class="category-box">
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
                                    <Link to="/jobs-list-layout-full-page-map" class="category-box">
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
                                    <Link to="/jobs-list-layout-full-page-map" class="category-box">
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


                {/*// <!-- Features Jobs -->*/}
                <div class="section gray margin-top-45 padding-top-65 padding-bottom-75">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">

                                {/*// <!-- Section Headline -->*/}
                                <div class="section-headline margin-top-0 margin-bottom-35">
                                    <h3>Featured Jobs</h3>
                                    <Link to="/jobs-list-layout-full-page-map" class="headline-link">Browse All Jobs</Link>
                                </div>

                                {/*// <!-- Jobs Container -->*/}
                                <div class="listings-container compact-list-layout margin-top-35">

                                    {/*// <!-- Job Listing -->*/}
                                    <Link to="/single-job-page" class="job-listing with-apply-button">

                                        {/*// <!-- Job Listing Details -->*/}
                                        <div class="job-listing-details">

                                            {/*// <!-- Logo -->*/}
                                            <div class="job-listing-company-logo">
                                                <img src={logo} alt="logo"/>
                                            </div>

                                            {/*// <!-- Details -->*/}
                                            <div class="job-listing-description">
                                                <h3 class="job-listing-title">Bilingual Event Support Specialist</h3>

                                                {/*// <!-- Job Listing Footer -->*/}
                                                <div class="job-listing-footer">
                                                    <ul>
                                                        <li><i class="icon-material-outline-business"/> Hexagon <div class="verified-badge" title="Verified Employer" data-tippy-placement="top"/></li>
                                                        <li><i class="icon-material-outline-location-on"/> San Francissco</li>
                                                        <li><i class="icon-material-outline-business-center"/> Full Time</li>
                                                        <li><i class="icon-material-outline-access-time"/> 2 days ago</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*// <!-- Apply Button -->*/}
                                            <span class="list-apply-button ripple-effect">Apply Now</span>
                                        </div>
                                    </Link>

                                    {/*// <!-- Job Listing -->*/}
                                    <Link to="/single-job-page" class="job-listing with-apply-button">

                                        {/*// <!-- Job Listing Details -->*/}
                                        <div class="job-listing-details">

                                            {/*// <!-- Logo -->*/}
                                            <div class="job-listing-company-logo">
                                                <img src={logo} alt="logo"/>
                                            </div>

                                            {/*// <!-- Details -->*/}
                                            <div class="job-listing-description">
                                                <h3 class="job-listing-title">Bilingual Event Support Specialist</h3>

                                                {/*// <!-- Job Listing Footer -->*/}
                                                <div class="job-listing-footer">
                                                    <ul>
                                                        <li><i class="icon-material-outline-business"/> Hexagon <div class="verified-badge" title="Verified Employer" data-tippy-placement="top"/></li>
                                                        <li><i class="icon-material-outline-location-on"/> San Francissco</li>
                                                        <li><i class="icon-material-outline-business-center"/> Full Time</li>
                                                        <li><i class="icon-material-outline-access-time"/> 2 days ago</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*// <!-- Apply Button -->*/}
                                            <span class="list-apply-button ripple-effect">Apply Now</span>
                                        </div>
                                    </Link>

                                    {/*// <!-- Job Listing -->*/}
                                    <Link to="/single-job-page" class="job-listing with-apply-button">

                                        {/*// <!-- Job Listing Details -->*/}
                                        <div class="job-listing-details">

                                            {/*// <!-- Logo -->*/}
                                            <div class="job-listing-company-logo">
                                                <img src={logo} alt="logo"/>
                                            </div>

                                            {/*// <!-- Details -->*/}
                                            <div class="job-listing-description">
                                                <h3 class="job-listing-title">Bilingual Event Support Specialist</h3>

                                                {/*// <!-- Job Listing Footer -->*/}
                                                <div class="job-listing-footer">
                                                    <ul>
                                                        <li><i class="icon-material-outline-business"/> Hexagon <div class="verified-badge" title="Verified Employer" data-tippy-placement="top"/></li>
                                                        <li><i class="icon-material-outline-location-on"/> San Francissco</li>
                                                        <li><i class="icon-material-outline-business-center"/> Full Time</li>
                                                        <li><i class="icon-material-outline-access-time"/> 2 days ago</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*// <!-- Apply Button -->*/}
                                            <span class="list-apply-button ripple-effect">Apply Now</span>
                                        </div>
                                    </Link>

                                    {/*// <!-- Job Listing -->*/}
                                    <Link to="/single-job-page" class="job-listing with-apply-button">

                                        {/*// <!-- Job Listing Details -->*/}
                                        <div class="job-listing-details">

                                            {/*// <!-- Logo -->*/}
                                            <div class="job-listing-company-logo">
                                                <img src={logo} alt="logo"/>
                                            </div>

                                            {/*// <!-- Details -->*/}
                                            <div class="job-listing-description">
                                                <h3 class="job-listing-title">Bilingual Event Support Specialist</h3>

                                                {/*// <!-- Job Listing Footer -->*/}
                                                <div class="job-listing-footer">
                                                    <ul>
                                                        <li><i class="icon-material-outline-business"/> Hexagon <div class="verified-badge" title="Verified Employer" data-tippy-placement="top"/></li>
                                                        <li><i class="icon-material-outline-location-on"/> San Francissco</li>
                                                        <li><i class="icon-material-outline-business-center"/> Full Time</li>
                                                        <li><i class="icon-material-outline-access-time"/> 2 days ago</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*// <!-- Apply Button -->*/}
                                            <span class="list-apply-button ripple-effect">Apply Now</span>
                                        </div>
                                    </Link>

                                    {/*// <!-- Job Listing -->*/}
                                    <Link to="/single-job-page" class="job-listing with-apply-button">

                                        {/*// <!-- Job Listing Details -->*/}
                                        <div class="job-listing-details">

                                            {/*// <!-- Logo -->*/}
                                            <div class="job-listing-company-logo">
                                                <img src={logo} alt="logo"/>
                                            </div>

                                            {/*// <!-- Details -->*/}
                                            <div class="job-listing-description">
                                                <h3 class="job-listing-title">Bilingual Event Support Specialist</h3>

                                                {/*// <!-- Job Listing Footer -->*/}
                                                <div class="job-listing-footer">
                                                    <ul>
                                                        <li><i class="icon-material-outline-business"/> Hexagon <div class="verified-badge" title="Verified Employer" data-tippy-placement="top"/></li>
                                                        <li><i class="icon-material-outline-location-on"/> San Francissco</li>
                                                        <li><i class="icon-material-outline-business-center"/> Full Time</li>
                                                        <li><i class="icon-material-outline-access-time"/> 2 days ago</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*// <!-- Apply Button -->*/}
                                            <span class="list-apply-button ripple-effect">Apply Now</span>
                                        </div>
                                    </Link>

                                </div>
                                {/*// <!-- Jobs Container / End -->*/}

                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- Featured Jobs / End -->*/}


                {/*// <!-- Features Cities -->*/}
                <div class="section margin-top-65 margin-bottom-65">
                    <div class="container">
                        <div class="row">

                            {/*// <!-- Section Headline -->*/}
                            <div class="col-xl-12">
                                <div class="section-headline centered margin-top-0 margin-bottom-45">
                                    <h3>Featured Cities</h3>
                                </div>
                            </div>

                            <div class="col-xl-3 col-md-6">
                                {/*// <!-- Photo Box -->*/}
                                <Link to="/jobs-list-layout-1" class="photo-box" data-background-image={logo2}>
                                    <div class="photo-box-content">
                                        <h3>San Francisco</h3>
                                        <span>376 Jobs</span>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                {/*// <!-- Photo Box -->*/}
                                <Link to="/jobs-list-layout-1" class="photo-box" data-background-image={logo2}>
                                    <div className="photo-box-content">
                                        <h3>San Francisco</h3>
                                        <span>376 Jobs</span>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                {/*// <!-- Photo Box -->*/}
                                <Link to="/jobs-list-layout-1" class="photo-box" data-background-image={logo2}>
                                    <div className="photo-box-content">
                                        <h3>San Francisco</h3>
                                        <span>376 Jobs</span>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                {/*// <!-- Photo Box -->*/}
                                <Link to="/jobs-list-layout-1" class="photo-box" data-background-image={logo2}>
                                    <div className="photo-box-content">
                                        <h3>San Francisco</h3>
                                        <span>376 Jobs</span>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                {/*// <!-- Features Cities / End -->*/}


                {/*// <!-- Highest Rated Freelancers -->*/}
                <div class="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
                    <div class="container">
                        <div class="row">

                            <div class="col-xl-12">
                                {/*// <!-- Section Headline -->*/}
                                <div class="section-headline margin-top-0 margin-bottom-25">
                                    <h3>Highest Rated Freelancers</h3>
                                    <Link to="/freelancers-grid-layout" class="headline-link">Browse All Freelancers</Link>
                                </div>
                            </div>

                            <div class="col-xl-12">
                                <div class="default-slick-carousel freelancers-container freelancers-grid-layout">

                                    {/*// <!--Freelancer -->*/}
                                    <div class="freelancer">

                                        {/*// <!-- Overview -->*/}
                                        <div class="freelancer-overview">
                                            <div class="freelancer-overview-inner">

                                                {/*// <!-- Bookmark Icon -->*/}
                                                <span class="bookmark-icon"/>

                                                {/*// <!-- Avatar -->*/}
                                                <div class="freelancer-avatar">
                                                    <div class="verified-badge"/>
                                                    <Link to="/single-freelancer-profile"><img src={avatar} alt="avatar"/></Link>
                                                </div>

                                                {/*// <!-- Name -->*/}
                                                <div class="freelancer-name">
                                                    <h4><Link to="/single-freelancer-profile">Tom Smith <img class="flag" src={country} alt="" title="United Kingdom" data-tippy-placement="top"/></Link></h4>
                                                    <span>UI/UX Designer</span>
                                                </div>

                                                {/*// <!-- Rating -->*/}
                                                <div class="freelancer-rating">
                                                    <div class="star-rating" data-rating="5.0"/>
                                                </div>
                                            </div>
                                        </div>

                                        {/*// <!-- Details -->*/}
                                        <div class="freelancer-details">
                                            <div class="freelancer-details-list">
                                                <ul>
                                                    <li>Location <strong><i class="icon-material-outline-location-on"/> London</strong></li>
                                                    <li>Rate <strong>$60 / hr</strong></li>
                                                    <li>Job Success <strong>95%</strong></li>
                                                </ul>
                                            </div>
                                            <Link to="/single-freelancer-profile" class="button button-sliding-icon ripple-effect">View Profile <i class="icon-material-outline-arrow-right-alt"/></Link>
                                        </div>
                                    </div>
                                    {/*// <!-- Freelancer / End -->*/}

                                    {/*// <!--Freelancer -->*/}
                                    <div class="freelancer">

                                        {/*// <!-- Overview -->*/}
                                        <div class="freelancer-overview">
                                            <div class="freelancer-overview-inner">

                                                {/*// <!-- Bookmark Icon -->*/}
                                                <span class="bookmark-icon"/>

                                                {/*// <!-- Avatar -->*/}
                                                <div class="freelancer-avatar">
                                                    <div class="verified-badge"/>
                                                    <Link to="/single-freelancer-profile"><img src={avatar} alt="avatar"/></Link>
                                                </div>

                                                {/*// <!-- Name -->*/}
                                                <div class="freelancer-name">
                                                    <h4><Link to="/single-freelancer-profile">Tom Smith <img class="flag" src={country} alt="" title="United Kingdom" data-tippy-placement="top"/></Link></h4>
                                                    <span>UI/UX Designer</span>
                                                </div>

                                                {/*// <!-- Rating -->*/}
                                                <div class="freelancer-rating">
                                                    <div class="star-rating" data-rating="5.0"/>
                                                </div>
                                            </div>
                                        </div>

                                        {/*// <!-- Details -->*/}
                                        <div class="freelancer-details">
                                            <div class="freelancer-details-list">
                                                <ul>
                                                    <li>Location <strong><i class="icon-material-outline-location-on"/> London</strong></li>
                                                    <li>Rate <strong>$60 / hr</strong></li>
                                                    <li>Job Success <strong>95%</strong></li>
                                                </ul>
                                            </div>
                                            <Link to="/single-freelancer-profile" class="button button-sliding-icon ripple-effect">View Profile <i class="icon-material-outline-arrow-right-alt"/></Link>
                                        </div>
                                    </div>
                                    {/*// <!-- Freelancer / End -->*/}

                                    {/*// <!--Freelancer -->*/}
                                    <div class="freelancer">

                                        {/*// <!-- Overview -->*/}
                                        <div class="freelancer-overview">
                                            <div class="freelancer-overview-inner">

                                                {/*// <!-- Bookmark Icon -->*/}
                                                <span class="bookmark-icon"/>

                                                {/*// <!-- Avatar -->*/}
                                                <div class="freelancer-avatar">
                                                    <div class="verified-badge"/>
                                                    <Link to="/single-freelancer-profile"><img src={avatar} alt="avatar"/></Link>
                                                </div>

                                                {/*// <!-- Name -->*/}
                                                <div class="freelancer-name">
                                                    <h4><Link to="/single-freelancer-profile">Tom Smith <img class="flag" src={country} alt="" title="United Kingdom" data-tippy-placement="top"/></Link></h4>
                                                    <span>UI/UX Designer</span>
                                                </div>

                                                {/*// <!-- Rating -->*/}
                                                <div class="freelancer-rating">
                                                    <div class="star-rating" data-rating="5.0"/>
                                                </div>
                                            </div>
                                        </div>

                                        {/*// <!-- Details -->*/}
                                        <div class="freelancer-details">
                                            <div class="freelancer-details-list">
                                                <ul>
                                                    <li>Location <strong><i class="icon-material-outline-location-on"/> London</strong></li>
                                                    <li>Rate <strong>$60 / hr</strong></li>
                                                    <li>Job Success <strong>95%</strong></li>
                                                </ul>
                                            </div>
                                            <Link to="/single-freelancer-profile" class="button button-sliding-icon ripple-effect">View Profile <i class="icon-material-outline-arrow-right-alt"/></Link>
                                        </div>
                                    </div>
                                    {/*// <!-- Freelancer / End -->*/}

                                    {/*// <!--Freelancer -->*/}
                                    <div class="freelancer">

                                        {/*// <!-- Overview -->*/}
                                        <div class="freelancer-overview">
                                            <div class="freelancer-overview-inner">

                                                {/*// <!-- Bookmark Icon -->*/}
                                                <span class="bookmark-icon"/>

                                                {/*// <!-- Avatar -->*/}
                                                <div class="freelancer-avatar">
                                                    <div class="verified-badge"/>
                                                    <Link to="/single-freelancer-profile"><img src={avatar} alt="avatar"/></Link>
                                                </div>

                                                {/*// <!-- Name -->*/}
                                                <div class="freelancer-name">
                                                    <h4><Link to="/single-freelancer-profile">Tom Smith <img class="flag" src={country} alt="" title="United Kingdom" data-tippy-placement="top"/></Link></h4>
                                                    <span>UI/UX Designer</span>
                                                </div>

                                                {/*// <!-- Rating -->*/}
                                                <div class="freelancer-rating">
                                                    <div class="star-rating" data-rating="5.0"/>
                                                </div>
                                            </div>
                                        </div>

                                        {/*// <!-- Details -->*/}
                                        <div class="freelancer-details">
                                            <div class="freelancer-details-list">
                                                <ul>
                                                    <li>Location <strong><i class="icon-material-outline-location-on"/> London</strong></li>
                                                    <li>Rate <strong>$60 / hr</strong></li>
                                                    <li>Job Success <strong>95%</strong></li>
                                                </ul>
                                            </div>
                                            <Link to="/single-freelancer-profile" class="button button-sliding-icon ripple-effect">View Profile <i class="icon-material-outline-arrow-right-alt"/></Link>
                                        </div>
                                    </div>
                                    {/*// <!-- Freelancer / End -->*/}

                                    {/*// <!--Freelancer -->*/}
                                    <div class="freelancer">

                                        {/*// <!-- Overview -->*/}
                                        <div class="freelancer-overview">
                                            <div class="freelancer-overview-inner">

                                                {/*// <!-- Bookmark Icon -->*/}
                                                <span class="bookmark-icon"/>

                                                {/*// <!-- Avatar -->*/}
                                                <div class="freelancer-avatar">
                                                    <div class="verified-badge"/>
                                                    <Link to="/single-freelancer-profile"><img src={avatar} alt="avatar"/></Link>
                                                </div>

                                                {/*// <!-- Name -->*/}
                                                <div class="freelancer-name">
                                                    <h4><Link to="/single-freelancer-profile">Tom Smith <img class="flag" src={country} alt="" title="United Kingdom" data-tippy-placement="top"/></Link></h4>
                                                    <span>UI/UX Designer</span>
                                                </div>

                                                {/*// <!-- Rating -->*/}
                                                <div class="freelancer-rating">
                                                    <div class="star-rating" data-rating="5.0"/>
                                                </div>
                                            </div>
                                        </div>

                                        {/*// <!-- Details -->*/}
                                        <div class="freelancer-details">
                                            <div class="freelancer-details-list">
                                                <ul>
                                                    <li>Location <strong><i class="icon-material-outline-location-on"/> London</strong></li>
                                                    <li>Rate <strong>$60 / hr</strong></li>
                                                    <li>Job Success <strong>95%</strong></li>
                                                </ul>
                                            </div>
                                            <Link to="/single-freelancer-profile" class="button button-sliding-icon ripple-effect">View Profile <i class="icon-material-outline-arrow-right-alt"/></Link>
                                        </div>
                                    </div>
                                    {/*// <!-- Freelancer / End -->*/}

                                    {/*// <!--Freelancer -->*/}
                                    <div class="freelancer">

                                        {/*// <!-- Overview -->*/}
                                        <div class="freelancer-overview">
                                            <div class="freelancer-overview-inner">

                                                {/*// <!-- Bookmark Icon -->*/}
                                                <span class="bookmark-icon"/>

                                                {/*// <!-- Avatar -->*/}
                                                <div class="freelancer-avatar">
                                                    <div class="verified-badge"/>
                                                    <Link to="/single-freelancer-profile"><img src={avatar} alt="avatar"/></Link>
                                                </div>

                                                {/*// <!-- Name -->*/}
                                                <div class="freelancer-name">
                                                    <h4><Link to="/single-freelancer-profile">Tom Smith <img class="flag" src={country} alt="" title="United Kingdom" data-tippy-placement="top"/></Link></h4>
                                                    <span>UI/UX Designer</span>
                                                </div>

                                                {/*// <!-- Rating -->*/}
                                                <div class="freelancer-rating">
                                                    <div class="star-rating" data-rating="5.0"/>
                                                </div>
                                            </div>
                                        </div>

                                        {/*// <!-- Details -->*/}
                                        <div class="freelancer-details">
                                            <div class="freelancer-details-list">
                                                <ul>
                                                    <li>Location <strong><i class="icon-material-outline-location-on"/> London</strong></li>
                                                    <li>Rate <strong>$60 / hr</strong></li>
                                                    <li>Job Success <strong>95%</strong></li>
                                                </ul>
                                            </div>
                                            <Link to="/single-freelancer-profile" class="button button-sliding-icon ripple-effect">View Profile <i class="icon-material-outline-arrow-right-alt"/></Link>
                                        </div>
                                    </div>
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
        accountType:state.AuthenticationReducer.accountType,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);