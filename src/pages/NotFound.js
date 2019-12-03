import React from "react";

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        {/*<!-- Title -->*/}
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>404 Not Found</h2>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- Container -->*/}
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <section
                id="not-found"
                class="center margin-top-50 margin-bottom-25"
              >
                <h2>
                  404 <i class="icon-line-awesome-question-circle" />
                </h2>
                <p>
                  We're sorry, but the page you were looking for doesn't exist
                </p>
              </section>

              <div class="row">
                <div class="col-xl-8 offset-xl-2">
                  <div class="intro-banner-search-form not-found-search margin-bottom-50">
                    {/*<!-- Search Field -->*/}
                    <div class="intro-search-field ">
                      <input
                        id="intro-keywords"
                        type="text"
                        placeholder="What Are You Looking For?"
                      />
                    </div>

                    {/*<!-- Button -->*/}
                    <div class="intro-search-button">
                      <button class="button ripple-effect">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Container / End -->*/}

        {/*<!-- Spacer -->*/}
        <div class="margin-top-70" />
        {/*<!-- Spacer / End-->*/}
      </div>
    );
  }
}
