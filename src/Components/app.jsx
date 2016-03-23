import React from 'react';
import Viewer from './viewer.jsx';
import Cover from './cover.jsx';
import EarlyYearsSection from './earlyyears.jsx';
import ExpansionSection from './expansion.jsx';
import SpillsSection from './spills.jsx';
import EqualitySection from './equality.jsx';
import FutureSection from './future.jsx';
import Footer from './footer.jsx';

var App = React.createClass({
  getInitialState: function () {
    return {
      mediaViewer: false,
      currentMedia: 1
    };
  },
  showMedia: function (mediaId) {
    console.log(mediaId);
  },
  render: function () {
    return (
      <div>
        <Viewer />
        <Cover />
        <EarlyYearsSection showMedia={this.showMedia}/>
        <ExpansionSection showMedia={this.showMedia}/>
        <SpillsSection showMedia={this.showMedia}/>
        <EqualitySection showMedia={this.showMedia}/>
        <FutureSection showMedia={this.showMedia}/>
        <Footer />
      </div>
    );
  }
});

export default App;
