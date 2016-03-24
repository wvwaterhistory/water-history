import React from 'react';
import MediaLink from './mediaLink.jsx';

var SpillsSection = React.createClass({
  render: function () {
    return (
      <div className="container-fluid" id="spills">
        <section id="spillsMap" className="paper-bg"></section>
        <div className="row transition-image spills-bg center">
            <h1>Spills</h1>
        </div>
        <div className="row article">
          <div className="col-sm-10 col-sm-offset-1">
            <blockquote className="bq-header">
              <h4>“The past century plus of West Virginia history has been filled with people coming to the state legislature with jars of black water, saying: ‘<em>This is coming out of my tap.</em>’ ”</h4>
              <footer>Anonymous</footer>
            </blockquote>
            <h4>On January 9th, 2014, chemical storage tanks leaked toxic chemicals, including MCHM, into the Elk River. WV American Water was aware of the spill but mistakenly believed that their treatment plant would be able to handle the unknown concentration of this chemical.</h4>
            <h4>In a state marked by chemical spills, industry disasters, and environmental pollution, drinking water contamination is nothing new.</h4>
            <div className="row top-space">
              <div className="col-sm-4">
                <h5 className="subheading">Water Service in the Coalfields</h5>
                <p>Rural, coal producing areas such as Boone County, WV, have lived with coal-waste-contaminated well water and small public water systems that sometimes were not much better. West Virginia American Water seemed like a god-send for places like Prenter, WV. Some feel less sure these days.</p>
                <MediaLink onClick={this.props.showMedia.bind(null, "audio", 3)} mediaTitle="A Life of Poisoned Water" icon="DJ" />
                <MediaLink onClick={this.props.showMedia.bind(null, "audio", 4)} mediaTitle="Fighting for Clean Water in Prenter, WV" icon="lambert" />
              </div>
              <div className="col-sm-4">
                <h5 className="subheading">Charleston, WV: Chemical Valley</h5>
                <p>With such a history of chemical spills in the Charleston area, West Virginia American Water has always known about the risks to their drinking water source. In the 1970s they closed their intakes on the Kanawha River after investigations of serious water quality contamination. At their Elk River facility, they formerly had upstream contaminant monitoring equipment. The German water conglomerate (RWE) owned American Water for a short period in the 2000s. They appear to have removed their gas chromatographs - technology that would have detected the January 9th, 2014 chemical spill.</p>
                <MediaLink onClick={this.props.showMedia.bind(null, "video", 0)} mediaTitle="Chemical Valley Girl" icon="good" />
              </div>
              <div className="col-sm-4">
                <h5 className="subheading">The Report</h5>
                <p>A report identified 27 potentially significant contaminant sources just upstream of the intake. By the time of the 2014 spill, WV American Water had investigated only three of these sources.</p>
                <MediaLink onClick={this.props.showMedia.bind(null, "audio", 2)} mediaTitle="An Expected Spill" icon="stottlemyer" />
              </div>
            </div>
            <div className="row">
              <blockquote className="bq-header">
                <h4>“I did attend a seminar he spoke at …early in the 1980s…. He explained how in the state of West Virginia, through the public private partnership program he started, the state of was plowing major funding into the resources of the private company. That alerted me early that he had an agenda that was clearly to gain the support of public officials to advocate for the demise of the public water system in favor of the private water company.”</h4>
                <footer>Fred Stottlemyer, former director of Putnam PSD</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default SpillsSection;
