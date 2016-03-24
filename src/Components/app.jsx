import React from 'react';
import ViewMaster from './viewer.jsx';
import Cover from './cover.jsx';
import EarlyYearsSection from './earlyyears.jsx';
import ExpansionSection from './expansion.jsx';
import SpillsSection from './spills.jsx';
import EqualitySection from './equality.jsx';
import FutureSection from './future.jsx';
import Footer from './footer.jsx';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function () {
    return {
      currentMedia: 1,
      mediaViewer: false
    };
  },
  showMedia: function (type, id) {
    var media = this.media[type][id];
    var content = [];
    if (type === "audio") {
      for (var i=0; i < media.tracks.length; i++) {
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
      mediaContent: content,
      mediaViewer: true

    });
  },
  closeMedia: function () {
    this.setState({
      mediaTitle: "",
      mediaContent: [],
      mediaViewer: false
    });
  },
  render: function () {
    return (
      <div>
        <ViewMaster title={this.state.mediaTitle} content={this.state.mediaContent} visible={this.state.mediaViewer} closeMedia={this.closeMedia} />
        <Cover />
        <EarlyYearsSection showMedia={this.showMedia}/>
        <ExpansionSection showMedia={this.showMedia}/>
        <SpillsSection showMedia={this.showMedia}/>
        <EqualitySection showMedia={this.showMedia}/>
        <FutureSection showMedia={this.showMedia}/>
        <Footer />
      </div>
    );
  },
  media: {
    "audio": [
      { title: "Fred Stottlemyer's Story", tracks: ["184577240", "184579463" ] },
      { title: "Fred Stottlemyer's Story", tracks: ["184579790", "184578996", "184579235" ] },
      { title: "An Expected Spill", tracks: ["184577501"] },
      { title: "A Life of Poisoned Water", tracks: ["184575928"] },
      { title: "Fighting for Clean Water in Prenter, WV", tracks: ["184578066"] },
      { title: "Race and Class Matter", tracks: ["184577890"] },
      { title: "Being Poor During A Crisis", tracks: ["184579892"] },
      { title: "Bad Well Water, Bad City Water", tracks: ["184576595"] },
      { title: "When Will You Feel Safe Again?", tracks: ["184578790"] }
    ],
    "video": [
      { title: "'Valley Girl'", youtube_id: "lARD0ZthXt0", caption: "Crystal Good is a American writer poet, mother of three sons living in the heart of Appalachia in Charleston, WV.  She is part of the Affrilachian Poets collective." },
    ],
    "document": [
      { title: "The Water Crisis in the Jail", url:"google.com" }
    ]
  }
});

export default App;
