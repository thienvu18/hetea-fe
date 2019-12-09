import React from "react";
import banner from '../images/single-freelancer.jpg'
import data from "../data";

const TutorDetail=(props)=> {
    const tutor = data.get(
        parseInt(props.match.params.number, 10)
    );
    if (!tutor) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
            {/*Title*/}
            <div className="single-page-header freelancer-header"
                 data-background-image={banner}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="single-page-header-inner">
                                <div className="left-side">
                                    <div className="header-image freelancer-avatar"><img
                                        src={tutor.avatar} alt=""/></div>
                                    <div className="header-details">
                                        <h3>{tutor.name} <span>iOS Expert + Node Dev</span></h3>
                                        <ul>
                                            <li>
                                                <div className="star-rating" data-rating="5.0"/>
                                            </li>
                                            <li>
                                                <div className="verified-badge-with-title">Verified</div>
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
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.
                                Iterative approaches to corporate strategy foster collaborative thinking to further
                                the overall value proposition. Organically grow the holistic world view of
                                disruptive innovation via workplace diversity and empowerment.</p>

                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta
                                test. Override the digital divide with additional clickthroughs from DevOps.
                                Nanotechnology immersion along the information highway will close the loop on
                                focusing solely on the bottom line.</p>
                        </div>

                        {/*// <!-- Boxed List -->*/}
                        <div className="boxed-list margin-bottom-60">
                            <div className="boxed-list-headline">
                                <h3><i className="icon-material-outline-thumb-up"/> Work History and Feedback
                                </h3>
                            </div>
                            <ul className="boxed-list-ul">
                                <li>
                                    <div className="boxed-list-item">
                                        {/*// <!-- Content -->*/}
                                        <div className="item-content">
                                            <h4>Web, Database and API Developer <span>Rated as Freelancer</span>
                                            </h4>
                                            <div className="item-details margin-top-10">
                                                <div className="star-rating" data-rating="5.0"/>
                                                <div className="detail-item"><i
                                                    className="icon-material-outline-date-range"/> August 2019
                                                </div>
                                            </div>
                                            <div className="item-description">
                                                <p>Excellent programmer - fully carried out my project in a very
                                                    professional manner. </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="boxed-list-item">
                                        {/*// <!-- Content -->*/}
                                        <div className="item-content">
                                            <h4>WordPress Theme Installation <span>Rated as Freelancer</span></h4>
                                            <div className="item-details margin-top-10">
                                                <div className="star-rating" data-rating="5.0"/>
                                                <div className="detail-item"><i
                                                    className="icon-material-outline-date-range"/> June 2019
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="boxed-list-item">
                                        {/*// <!-- Content -->*/}
                                        <div className="item-content">
                                            <h4>Fix Python Selenium Code <span>Rated as Employer</span></h4>
                                            <div className="item-details margin-top-10">
                                                <div className="star-rating" data-rating="5.0"/>
                                                <div className="detail-item"><i
                                                    className="icon-material-outline-date-range"/> May 2019
                                                </div>
                                            </div>
                                            <div className="item-description">
                                                <p>I was extremely impressed with the quality of work AND how
                                                    quickly he got it done. He then offered to help with another
                                                    side part of the project that we didn't even think about
                                                    originally.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="boxed-list-item">
                                        {/*// <!-- Content -->*/}
                                        <div className="item-content">
                                            <h4>PHP Core Website Fixes <span>Rated as Freelancer</span></h4>
                                            <div className="item-details margin-top-10">
                                                <div className="star-rating" data-rating="5.0"/>
                                                <div className="detail-item"><i
                                                    className="icon-material-outline-date-range"/> May 2019
                                                </div>
                                            </div>
                                            <div className="item-description">
                                                <p>Awesome work, definitely will rehire. Poject was completed not
                                                    only with the requirements, but on time, within our small
                                                    budget.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            {/*// <!-- Pagination -->*/}
                            <div className="clearfix"/>
                            <div className="pagination-container margin-top-40 margin-bottom-10">
                                <nav className="pagination">
                                    <ul>
                                        <li><a href="#" className="ripple-effect current-page">1</a></li>
                                        <li><a href="#" className="ripple-effect">2</a></li>
                                        <li className="pagination-arrow"><a href="#" className="ripple-effect"><i
                                            className="icon-material-outline-keyboard-arrow-right"/></a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="clearfix"/>
                            {/*// <!-- Pagination / End -->*/}

                        </div>
                        {/*// <!-- Boxed List / End -->*/}

                    </div>


                    {/*// <!-- Sidebar -->*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="sidebar-container">

                            {/*// <!-- Profile Overview -->*/}
                            <div className="profile-overview">
                                <div className="overview-item"><strong>$35</strong><span>Hourly Rate</span></div>
                                <div className="overview-item"><strong>53</strong><span>Jobs Done</span></div>
                                <div className="overview-item"><strong>22</strong><span>Rehired</span></div>
                            </div>

                            {/*// <!-- Button -->*/}
                            <a href="#small-dialog"
                               className="apply-now-button popup-with-zoom-anim margin-bottom-50 ">Contact <i
                                className="icon-material-outline-arrow-right-alt"/></a>

                            {/*// <!-- Freelancer Indicators -->*/}
                            <div className="sidebar-widget">
                                <div className="freelancer-indicators">

                                    {/*// <!-- Indicator -->*/}
                                    <div className="indicator">
                                        <strong>88%</strong>
                                        <div className="indicator-bar" data-indicator-percentage="88"><span/>
                                        </div>
                                        <span>Job Success</span>
                                    </div>

                                    {/*// <!-- Indicator -->*/}
                                    <div className="indicator">
                                        <strong>100%</strong>
                                        <div className="indicator-bar" data-indicator-percentage="100"><span/>
                                        </div>
                                        <span>Recommendation</span>
                                    </div>

                                    {/*// <!-- Indicator -->*/}
                                    <div className="indicator">
                                        <strong>90%</strong>
                                        <div className="indicator-bar" data-indicator-percentage="90"><span/>
                                        </div>
                                        <span>On Time</span>
                                    </div>

                                    {/*// <!-- Indicator -->*/}
                                    <div className="indicator">
                                        <strong>80%</strong>
                                        <div className="indicator-bar" data-indicator-percentage="80"><span/>
                                        </div>
                                        <span>On Budget</span>
                                    </div>
                                </div>
                            </div>

                            {/*// <!-- Widget -->*/}
                            <div className="sidebar-widget">
                                <h3>Skills</h3>
                                <div className="task-tags">
                                    <span>iOS</span>
                                    <span>Android</span>
                                    <span>mobile apps</span>
                                    <span>design</span>
                                    <span>Python</span>
                                    <span>Flask</span>
                                    <span>PHP</span>
                                    <span>WordPress</span>
                                </div>
                            </div>

                            {/*// <!-- Sidebar Widget -->*/}
                            <div className="sidebar-widget">
                                <h3>Bookmark or Share</h3>

                                {/*// <!-- Bookmark Button -->*/}
                                <button className="bookmark-button margin-bottom-25">
                                    <span className="bookmark-icon"/>
                                    <span className="bookmark-text">Bookmark</span>
                                    <span className="bookmarked-text">Bookmarked</span>
                                </button>

                                {/*// <!-- Copy URL -->*/}
                                <div className="copy-url">
                                    <input id="copy-url" type="text" value="" className="with-border"/>
                                    <button className="copy-url-button ripple-effect"
                                            data-clipboard-target="#copy-url" title="Copy to Clipboard"
                                            data-tippy-placement="top"><i
                                        className="icon-material-outline-file-copy"/></button>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/*// <!-- Make an Offer Popup-->*/}
            <div id="small-dialog" class="zoom-anim-dialog mfp-hide dialog-with-tabs">

                {/*// <!--Tabs -->*/}
                <div class="sign-in-form">

                    <ul class="popup-tabs-nav">
                        <li><a href="#tab">Contact</a></li>
                    </ul>

                    <div class="popup-tabs-container">

                        {/*// <!-- Tab -->*/}
                        <div class="popup-tab-content" id="tab">

                            {/*// <!-- Welcome Text -->*/}
                            <div class="welcome-text">
                                <h3>Discuss your project with {tutor.name}</h3>
                            </div>

                            {/*// <!-- Form -->*/}
                            <form method="post">

                                <div class="input-with-icon-left">
                                    <i class="icon-material-outline-account-circle"/>
                                    <input type="text" class="input-text with-border" name="name" id="name"
                                           placeholder="First and Last Name"/>
                                </div>

                                <div class="input-with-icon-left">
                                    <i class="icon-material-baseline-mail-outline"/>
                                    <input type="text" class="input-text with-border" name="emailaddress"
                                           id="emailaddress" placeholder="Email Address"/>
                                </div>

                                <textarea name="textarea" cols="10" placeholder="Message" class="with-border"/>

                                <div class="uploadButton margin-top-25">
                                    <input class="uploadButton-input" type="file" accept="image/*, application/pdf"
                                           id="upload" multiple/>
                                    <label class="uploadButton-button ripple-effect" form="upload">Add
                                        Attachments</label>
                                    <span
                                        class="uploadButton-file-name">Allowed file types: zip, pdf, png, jpg <br/> Max. files size: 50 MB.</span>
                                </div>

                            </form>

                            {/*// <!-- Button -->*/}
                            <button class="button margin-top-35 full-width button-sliding-icon ripple-effect"
                                    type="submit">Contact <i class="icon-material-outline-arrow-right-alt"/>
                            </button>

                        </div>
                        {/*// <!-- Login -->*/}
                        <div class="popup-tab-content" id="loginn">

                            {/*// <!-- Welcome Text -->*/}
                            <div class="welcome-text">
                                <h3>Discuss Your Project With Tom</h3>
                            </div>

                            {/*// <!-- Form -->*/}
                            <form method="post" id="make-an-offer-form">

                                <div class="input-with-icon-left">
                                    <i class="icon-material-outline-account-circle"/>
                                    <input type="text" class="input-text with-border" name="name2" id="name2"
                                           placeholder="First and Last Name" required/>
                                </div>

                                <div class="input-with-icon-left">
                                    <i class="icon-material-baseline-mail-outline"/>
                                    <input type="text" class="input-text with-border" name="emailaddress2"
                                           id="emailaddress2" placeholder="Email Address" required/>
                                </div>

                                <textarea name="textarea" cols="10" placeholder="Message" class="with-border"/>

                                <div class="uploadButton margin-top-25">
                                    <input class="uploadButton-input" type="file" accept="image/*, application/pdf"
                                           id="upload-cv" multiple/>
                                    <label class="uploadButton-button" form="upload-cv">Add Attachments</label>
                                    <span
                                        class="uploadButton-file-name">Allowed file types: zip, pdf, png, jpg <br/> Max. files size: 50 MB.</span>
                                </div>

                            </form>

                            {/*// <!-- Button -->*/}
                            <button class="button full-width button-sliding-icon ripple-effect" type="submit"
                                    form="make-an-offer-form">Make an Offer <i
                                class="icon-material-outline-arrow-right-alt"/></button>

                        </div>

                    </div>
                </div>
            </div>
            {/*// <!-- Make an Offer Popup / End -->*/}
            {/*// <!-- Spacer -->*/}
            <div className="margin-top-15"/>
            {/*// <!-- Spacer / End-->*/}
        </div>
    );
}

export default TutorDetail;