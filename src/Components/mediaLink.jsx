import React from 'react';

const MediaLink = ({ icon, mediaId, mediaTitle, onClick }) => {
  var divStyle = {
    backgroundImage: 'url(./src/img/' + icon + '_circle.png)'
  };
  return (
    <div className="center">
      <div className="media-link" style={divStyle}>
        <a onClick={onClick.bind(null, mediaId)}><img src="./src/img/plus-sign.png"/></a>
      </div>
      <h4 className="map-title">{mediaTitle}</h4>
    </div>
  );
}

export default MediaLink;
