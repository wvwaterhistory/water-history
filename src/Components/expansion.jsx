import React from 'react';
import MediaLink from './mediaLink.jsx';

var ExpansionSection = React.createClass({
  render: function () {
    return (
      <div className="container-fluid" id="expansion">
        <section id="expansionMap" className="paper-bg"></section>
        <div className="row transition-image expansion-bg center">
            <h1>Expansion</h1>
        </div>
        <div className="row article">
          <div className="col-sm-10 col-sm-offset-1 top-space">
            <h4>Needing to make their new investment pay, then known as West Virginia Water Company (WVWC) started on an aggressive strategy to expand their service area. A new regulatory and funding climate allowed West Virginia American to embark on a very successful and ultimately dangerous expansion strategy.</h4>
            <div className="row top-space">
              <div className="col-sm-4">
                <h5 className="subheading">Expansion along the Elk River</h5>
                <p>In 1976 WVWC finished an expensive and large water treatment plant on the Elk River, replacing the three plants they had servicing the Charleston area from the Kanawha River. Hoping in part to serve industrial customers, rates were too high to attract large-scale private buyers. That meant they needed more retail residential customers.</p>
                <MediaLink mediaId="2" mediaTitle="Fred Stottlemyer's Story" icon="stottlemyer" onClick={this.props.showMedia} />
              </div>
              <div className="col-sm-4">
                <h5 className="subheading">The New WV American Water</h5>
                <p>In the 1980s, the company changed its name to WV American Water Company. Then President Chris Jarrett launched an aggressive expansion strategy, pushing to take over small municipal systems and public rural systems. Some of these take overs were amicable, but they also could turn quite hostile when the municipality was not willing. At the time, WV American Water owned treatment plants all over the state  .  They were expanding from three facilities in Fayette County and Summers County, but the biggest push was the expansion from the Elk River plant, in Charleston: that meant enveloping the entire Charleston area, as well as south, into Boone County, and west into Putnam County.</p>
              </div>
              <div className="col-sm-4">
                <blockquote className="bq0">
                  <p>“...it is simply more efficient and more economical, the more customers you can serve, from one large production facility.”</p>
                  <footer>Chris Jarrett, President of WV American Water Company</footer>
                </blockquote>
                <div className="row center top-space">
                  <img src="img/WVAW-logo.png" width="60px"/>
                </div>
              </div>
            </div>
            <blockquote className="bq-header">
              <h4>“We knew their Elk River vulnerability, we knew they did not have a standby supply, and we knew they would not be a reliable supplier.” </h4>
              <footer>Fred Stottlemyer, former director of Putnam PSD</footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
});

export default ExpansionSection;
