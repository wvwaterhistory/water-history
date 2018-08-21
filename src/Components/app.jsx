import React from 'react';
import styled from 'styled-components';

import ViewMaster from './viewer.jsx';
import InteractiveMap from './map.jsx';
import Cover from './cover.jsx';
import EarlyYearsSection from './earlyyears.jsx';
import ExpansionSection from './expansion.jsx';
import SpillsSection from './spills.jsx';
import EqualitySection from './equality.jsx';
import FutureSection from './future.jsx';
import Footer from './footer.jsx';
import $ from 'jquery';


const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMedia: 1,
      mediaViewer: false
    };
    this.showMedia = this.showMedia.bind(this);
    this.closeMedia = this.closeMedia.bind(this);
  }
  showMedia(type, id) {
    var media = this.props.media[type][id];
    var content = [];
    if (type === "audio") {
      for (var i = 0; i < media.tracks.length; i++) {
        content.push(
          <iframe width="100%" height="126" scrolling="no" frameBorder="no" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + media.tracks[i] + "&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"} ></iframe>
        )
      }
    } else if (type === "video") {
      content.push(
        <iframe width="560" height="315" src={ "https://www.youtube.com/embed/" + media.youtube_id } frameborder="0" allowfullscreen></iframe>
      );
    } else if (type === "documents") {

    }
    this.setState({
      mediaTitle: media.title,
      mediaCaption: media.caption,
      mediaContent: content,
      mediaViewer: true
    });
  }
  closeMedia() {
    this.setState({
      mediaTitle: '',
      mediaCaption: '',
      mediaContent: [],
      mediaViewer: false
    });
  }
  render() {
    return (
      <Wrapper>
        <ViewMaster
            title={this.state.mediaTitle}
            caption= {this.state.mediaCaption}
            content={this.state.mediaContent}
            visible={this.state.mediaViewer}
            closeMedia={this.closeMedia}
        />
        <Cover
          title="West Virginia's Water Crisis"
          subtitle="The Story of WV American Water"
        />
        <EarlyYearsSection showMedia={this.showMedia} />
        <InteractiveMap map_id="expansion" map={this.props.maps["expansion"]} />
        <ExpansionSection showMedia={this.showMedia}/>
        <InteractiveMap map_id="spills" map={this.props.maps["spills"]} />
        <SpillsSection showMedia={this.showMedia}/>
        <InteractiveMap map_id="exposure" map={this.props.maps["exposure"]} />
        <EqualitySection showMedia={this.showMedia}/>
        <FutureSection showMedia={this.showMedia}/>
        <Footer />
      </Wrapper>
    );
  }
}
export default App;
