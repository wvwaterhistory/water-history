var React = require('react');
var ReactDOM = require('react-dom');
import $ from 'jquery';

var InteractiveMap = React.createClass({
  getInitialState: function () {
    return {
      position: 0,
      navigation: []
    }
  },
  changePosition: function (i) {
    this.setState({
      position: i
    });
  },
  render: function () {
    return (
      <div className="container-fluid paper-bg" id={this.props.map_id + "Map"}>
        <div className="col-xs-12 center">
          <h2 className="map-title">{this.props.map.title}</h2>
          <img src={"./src/maps/" + this.props.map_id + ".gif"} width="90%" className="visible-xs" />
        </div>
        <div className="col-md-4 center map-captions hidden-xs">
          <div className="spacer2 hidden-sm"></div>
          <hr className="hidden-sm col-md-12" />
            <MapCaptions position={this.state.position} captions={this.props.map.captions} navigation={this.state.navigation} newPosition={this.changePosition} />
          <hr className="hidden-xs hidden-sm col-md-12" />
        </div>
        <div className="col-md-8 hidden-xs map-body">
          <MapBody bg={this.props.map.bg} bgHeight={this.props.map.bgHeight} overlay={this.props.map.overlays[this.state.position]} position={this.state.position} />
        </div>
      </div>
    );
  },
  componentDidMount: function () {
    var navigation = [],
        captionsLength = this.props.map.captions.length;
    if(captionsLength > 1){
      navigation.push( <a onClick={this.incrementPosition.bind(null, this.props.map_id, -1)} key={captionsLength + 1}><img src="./src/bg/arrow_decr.svg"/></a> );
      for (var i = 0; i < captionsLength; i++){
        navigation.push(
          <a className={i === 0 ? "circle filled" : "circle"} key={i} onClick={this.changePosition.bind(null, i)}></a>
        );
      }
      navigation.push( <a onClick={this.incrementPosition.bind(null, this.props.map_id, 1)} key={captionsLength + 2}><img src="./src/bg/arrow_incr.svg"/></a> );
      this.setState({
        navigation: [<div className="map-nav" key={this.props.map_id + "nav"}>{navigation}</div>]
      });
    }
  },
  incrementPosition: function (map_id, n) {
    var newPosition = this.state.position + n,
        activeLink = newPosition + 2;
    if (n > 0 && newPosition < this.props.map.captions.length || n < 0 && newPosition >= 0) {
      $('#' + map_id + 'Map .map-nav a.circle:nth-child(' + activeLink +')').click();
      this.changePosition(newPosition);
    }
  }
});
var MapBody = React.createClass({
  render: function () {
    var mapStyle = {
      width: '735px',
      height: this.props.bgHeight + 'px',
      background: 'url(' + this.props.bg + ') no-repeat'
    };
    var overlayStyle = {
      position: 'relative',
      left: this.props.overlay[1],
      top: this.props.overlay[2]
    }
    return (
      <div style={mapStyle} className="map-body">
        <img src={this.props.overlay[0]} style={overlayStyle} />
      </div>
    );
  }
});

var MapCaptions = React.createClass({
  getInitialState: function () {
    return {
      newPosition: ''
    }
  },
  render: function () {
    return (
      <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-11 col-md-offset-1">
        <h3 className="map-title">{this.props.captions[this.props.position][0]}</h3>
        {this.props.navigation}
        <p><em>{this.props.captions[this.props.position][1]}</em></p>
      </div>
    );
  }
});

export default InteractiveMap;
