import React from 'react';

var ViewMaster = React.createClass({
  render: function (){
   return (
     <section className="view-master" className={this.props.visible ? "" : "hide"}>
       <div id="blanket"></div>
       <div className="popup paper-bg">
         <h3 className="map-title center">{this.props.title}</h3>
         {this.props.content}

         <a onClick={this.props.closeMedia}>close</a>
       </div>
     </section>
   );
  }
});

export default ViewMaster;
