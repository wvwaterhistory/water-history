import React from 'react';
import MediaLink from './mediaLink.jsx';

var FutureSection = React.createClass({
  render: function () {
    return (
      <div className="container-fluid" id="future">
        <div className="row paper-bg center">
          <img src="./src/maps/hazards_map.png"/>
        </div>
        <div className="row transition-image future-bg center">
            <h1>Future</h1>
        </div>
        <div className="row article paper-bg">
          <div className="col-sm-10 col-sm-offset-1 top-space">
            <h4>The future of a water system in the West Virginia American Water service area is uncertain. In places like West Virginia, change comes hard. Change comes slow. However, committed activists are working to create a safer water system at the Advocates for a Safe Water System, while a host of public policy groups in West Virginia champions water safety.</h4>
            <p className="top-space">One direction groups, led by groups like Advocates for a Safe Water System and WV Rivers Coalition, are taking to create change is to pressure the Public Service Commission to regulate the water company more effectively. The Commission has the authority (State Code Ch. 24, 2-7) to correct the practices of a utility that it finds to be inadequate or insufficient. However, the Public Service Commission has yet taken any actions since the January 9th 2014 spill, while continuously delaying their formal investigation of the event. However, with industry-regulator connections so strong and amicable, it seems unlikely that real action will come from regulation of the existing utility company. <span className="white">Perhaps it is time for a public water system in southern West Virginia.</span></p>
            <p>Public funds already provide very substantial support to West Virginia American Water. A public water system would have public safety and service as its first goal, not a profit margin. The system would be more transparent to the public, facilitate easier implementation of monitoring standards, and keep ratepayers’ investments here in West Virginia.</p>
            <p>That’s not to say that public ownership itself is the solution. We have seen so many small, underfunded and unsustainable water systems service terrible water to West Virginians for years, ultimately selling out to WVAW. However, large public water systems are sustainable, across the country and here in West Virginia. The Putnam PSD and the Morgantown Utility Board are both good examples. They have responded drastically to the chemical spill on the Elk River, learning from the crisis and exceeding the requirements of SB 373 (the Above Ground Chemical Storage Tank legislation), while WVAW has consistently maintained they did nothing wrong.</p>
            <p>But to get a public water system in Charleston, WV, we’ll have to fight for it.</p>
            <div className="row center">
              <MediaLink mediaId="10" mediaTitle="When Will You Feel Safe Again?" icon="rain" onClick={this.props.showMedia} />
            </div>
            <h4 className="center">Visions for Change</h4>
            <blockquote className="bq1">
              <p>“I don’t think anything has changed in this community…. People have a voice. And that is the franchised vote. But this community has not really had that type of epiphany yet. So not a lot of change. We’re hopeful that things can change, and we know they can. But there is still organizing and education that needs to happen to really engage people over a sustained period of time, to get the change that his community needs.”</p>
              <footer>Reverend Watts, Grace Bible Church, West Charleston, WV</footer>
            </blockquote>
            <blockquote className="bq1">
              <p>“In this moment we really have an opportunity to create, to break free from dependency. We are a welfare state, and we can break free from that. But not without industry. And I don’t see an aggressive dialogue about what our next industry will be</p>
              <p>…All [we’re] talking about is coal. Can’t we do anything else? It’s sad. I think it will be more of a creative revolution that will put West Virginia, as part of a new Appalachia, back on the map. But I don’t see things significantly changing until the coal conversation can’t happen anymore.</p>
              <p>Coal distracts people – it’s such an emotionally charged thing.</p>
              <p>You don’t always get your ticket to the ball when you’re part of this anti-coal rhetoric. But I don’t see myself anymore as anti-coal as I see myself as black or white. I mean, my racial make-up is that my mom is white and my dad is black. So, I claim an identity in both. I claim an identity as an African American because that’s the box I’m forced in from others. And I feel the same way in this coal dialog. It’s not an either or.</p>
              <p>What are the solutions – we’re not going to get anywhere with these segregated solutions: Democrats vs Republican… they’re all the same.”</p>
              <footer>Crystal Good, Poet, Charleston, WV</footer>
            </blockquote>
            <div className="spacer"></div>
            <h4 className="center">We’ll need something else.</h4>
          </div>
        </div>
      </div>
    )
  }
});

export default FutureSection;
