import React from 'react';
import MediaLink from './mediaLink.jsx';

var EarlyYearsSection = React.createClass({
  render: function () {
    return (
      <div className="container-fluid" id="earlyyears">
        <div className="row paper-bg center">
          <h2 className="map-title">The Original Water Companies</h2>
          <img src="./src/maps/origins_map.png" />
        </div>
        <div className="row transition-image early-years-bg center">
            <h1>Early Years</h1>
        </div>
        <div className="row article">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="spacer"></div>
            <h4>West Virginia American Water is a water utility. In the Charleston, WV, area, it provides water to people in 9 counties, often using public funds to expand its system. During the water crisis, many were surprised to learn that there were 300,000 people on a single drinking water intake.  How did we get to this point in history?</h4>
            <div className="spacer"></div>
            <div className="row">
              <div className="col-sm-4">
                <h5 className="subheading">Coal Camps and Conglomeration</h5>
                <p>Historically, utility services were all very localized. In southern West Virginia, coal companies provided utilities such as electricity, but water was often a personal issue – that meant people used wells and streams. When telephone companies came, they set up telephone interchanges but they weren’t interconnected together. It was only through the 1930s, 40s, &amp; 50s that there was a movement towards consolidation in utilities.</p>
                <p>A larger electric company, for example, would gobble up localized services, shut down the old local generators, and connect them with transmission lines to larger more central power plants, usually on large rivers because of access to coal by barge.</p>
                <MediaLink onClick={this.props.showMedia.bind(null, "audio", 0)} icon="stottlemyer" mediaTitle="Fred Stottlemyer's Story"/>
              </div>
              <div className="col-sm-4">
                <h5 className="subheading">FDR and a Mandate for Universal Coverage</h5>
                <p>Federal policy in the 1930s, The New Deal, had brought electric and telephone coverage to rural areas. The Rural Electrification Service had the first mandated goal of universal electric utility service. By the end of the 1960s and 70s, the US had achieved universal service with electricity and telephone. Regulated utility companies could use their margin of profit in urban areas to expand to uneconomically viable rural areas. Remote areas used cooperatives, a legacy of the New Deal.</p>
                <p>Water remained a local service, typically provided by a local municipality. There was little interest in providing water to people outside municipal boundaries (because laying pipe is expensive.) The electorate that elected the board of directors of public water utilities would complain if they had to charge more because of covering uneconomic areas. At the time there were only a small amount of private water systems in West Virginia – West Virginia Water Service Company (which became West Virginia Water Company in the 1960s and West Virginia American Water when bought in the 1980s), for example, Beckley Water, etc.</p>
              </div>
              <div className="col-sm-4">
                <h5 className="subheading">Federal Legislation</h5>
                <p>In the 1960s congress enacted legislation and funding mechanisms to establish rural water districts – Public Service Districts. More grants and loans for water and sewer came with the Clean Water Act in 1970. West Virginia passed statutes for counties to create Public Service Districts (PSDs) to serve areas outside of municipal boundaries. Many of these initial districts were too small to function and larger PSDs subsumed them in the 70s. They used federal funding systems, because there was no indigenous economic system to pay for upfront capital cost for providing water to remote places like Boone County, in the heart of the southern WV coalfields. For the next 30 years there was substantial funding for water and sewage systems.</p>
                <p>Those grants and loans are gone, for the most part. Municipalities are under their own pressures to upgrade water treatment and distribution systems to new EPA standards, and to replace aging infrastructure, which is why they have turned towards the private sector, toward West Virginia American Water.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default EarlyYearsSection;
