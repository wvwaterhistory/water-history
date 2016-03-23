// insert mediaLink (from m):
// <MediaLink showMedia={ ~ reference the app's showMedia handler which sets current mediaID
// value in the state. this value is passed down as a property to the MediaViewer component.
// Same goes for mediaVisible boolean value.} mediaId={hardcoded} mediaTitle={hardcoded?}/>

import React from 'react';

var MediaLink = React.createClass({
  render: function() {
    var divStyle = {
      backgroundImage: 'url(./src/img/' + this.props.icon + '_circle.png)'
    };
    return (
    <div className="center">
      <div className="media-link" style={divStyle}>
        <a onClick={this.props.onClick.bind(null, this.props.mediaId)}><img src="./src/img/plus-sign.png"/></a>
      </div>
      <h4 className="map-title">{this.props.mediaTitle}</h4>
    </div>
    )
  }
});

export default MediaLink;
