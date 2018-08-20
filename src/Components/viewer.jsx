import React from 'react';

const ViewMaster = ({ caption, closeMedia, content, title, visible }) => (
  <section className="view-master" className={visible ? "" : "hide"}>
    <div id="blanket"></div>
    <div className="popup paper-bg">
      <div className="popup-header">
        <h3 className="map-title center">{title}
          <a onClick={closeMedia}><img src="./src/bg/x.svg"/></a>
        </h3>
        <p><em>{caption}</em></p>
      </div>
      {content}
    </div>
  </section>
);

export default ViewMaster;
