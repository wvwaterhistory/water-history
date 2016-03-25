import React from 'react';

var ViewMaster = React.createClass({
  render: function (){
   return (
     <section className="view-master" className={this.props.visible ? "" : "hide"}>
       <div id="blanket"></div>
       <div className="popup paper-bg">
         <div className="popup-header">
           <h3 className="map-title center">{this.props.title}
             <a onClick={this.props.closeMedia}><img src="./src/bg/x.svg"/></a>
           </h3>

         </div>
         {this.props.content}
       </div>
     </section>
   );
  }
});

export default ViewMaster;
