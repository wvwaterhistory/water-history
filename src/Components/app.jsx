import React from 'react';
import Viewer from './viewer.jsx';
import Cover from './cover.jsx';
import ExpansionSection from './expansion.jsx';
import Footer from './footer.jsx';

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Viewer />
        <Cover />
        <ExpansionSection />
        <Footer />
      </div>
    );
  }
});

export default App;
