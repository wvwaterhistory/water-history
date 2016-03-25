import React from 'react';
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
      mediaCaption: media.caption,
      mediaContent: content,
      mediaViewer: true

    });
  },
  closeMedia: function () {
    this.setState({
      mediaTitle: "",
      mediaCaption: "",
      mediaContent: [],
      mediaViewer: false
    });
  },
  render: function () {
    return (
      <div>
        <ViewMaster title={this.state.mediaTitle} caption= {this.state.mediaCaption} content={this.state.mediaContent} visible={this.state.mediaViewer} closeMedia={this.closeMedia} />
        <Cover />
        <EarlyYearsSection showMedia={this.showMedia}/>
        <InteractiveMap map_id="expansion"/>
        <ExpansionSection showMedia={this.showMedia}/>
        <InteractiveMap map_id="spills"/>
        <SpillsSection showMedia={this.showMedia}/>
        <InteractiveMap map_id="exposure"/>
        <EqualitySection showMedia={this.showMedia}/>
        <FutureSection showMedia={this.showMedia}/>
        <Footer />
      </div>
    );
  },
  media: {
    "audio": [
      { title: "Fred Stottlemyer's Story",
        tracks: ["184577240", "184579463" ],
        caption: "Fred Stottlemyer served as the director of the Putnam County Public Service District for over 25 years. He knew West Virginia Water well..."
      },
      { title: "Fred Stottlemyer's Story",
        tracks: ["184579790", "184578996", "184579235" ],
        caption: '"West Virginia American Water tried very aggressively to take my water district over. I’m taking about hostile take overs that did not benefit the public. Why? For their bottomline…. They outbid us, they lied to the public, and would promise things in less money than they knew it would cost. It was strictly for a corporate strategy."'
      },
      { title: "An Expected Spill",
        tracks: ["184577501"],
        caption: "Fred Stottlemyer served as the director of the Putnam County Public Service District for over 25 years. He knew West Virginia Water well..."
      },
      { title: "A Life of Poisoned Water",
        tracks: ["184575928"],
        caption: "DJ was raised in Prenter, WV. The son of a coal miner, he too mined coal after college. During that time he found out he had a terminal disease likely associated with the contaminated water he and his family had been drinking since before he was even born. Often sick underground, the company laid him off. During this last spill he was a part of water relief efforts in his community."
      },
      { title: "Fighting for Clean Water in Prenter, WV",
        tracks: ["184578066"],
        caption: "Maria lives in Prenter, WV, where Massey Energy (now Alpha Natural Resources) coal company poisoned their wells with toxic coal waste several decades ago. After drinking the water for years, the community won a class action lawsuit, while they convinced the state to help extend West Virginia American Water’s line to their community. A year later, the January 9th chemical spill again put them in crisis."
      },
      { title: "Race and Class Matter",
        tracks: ["184577890"],
        caption: "Crystal Good is a poet from Charleston, WV, raised in a family of chemical workers."
      },
      { title: "Being Poor During A Crisis",
        tracks: ["184579892"],
        caption: "Reverend Watts is a part of Grace Bible Church in Charleston, WV"
      },
      { title: "Bad Well Water, Bad City Water",
        tracks: ["184576595"],
        caption: "DJ was raised in Prenter, WV. The son of a coal miner, he too mined coal after college. During that time he found out he had a terminal disease likely associated with the contaminated water he and his family had been drinking since before he was even born. Often sick underground, the company laid him off. During this last spill he was a part of water relief efforts in his community."
      },
      { title: "When Will You Feel Safe Again?",
        tracks: ["184578790"],
        caption: "Scott built a rainwater collection system for his Charleston home in the wake of the chemical spill. Most water systems in Kentucky have actually been public for a long time. However the 'Take Back the Tap' project has many examples of municipalities that have regained control of privatized water systems."
      }
    ],
    "video": [
      { title: "'Valley Girl'",
        youtube_id: "lARD0ZthXt0",
        caption: "Crystal Good is a American writer poet, mother of three sons living in the heart of Appalachia in Charleston, WV.  She is part of the Affrilachian Poets collective." },
    ],
    "document": [
      { title: "The Water Crisis in the Jail", url:"google.com" }
    ]
  }
});

export default App;
