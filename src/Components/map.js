var React = require('react');
var ReactDOM = require('react-dom');
import $ from 'jquery';
require("bootstrap-webpack");
require("./map.css");

var InteractiveMap = React.createClass({
  getInitialState: function () {
    var map = this.maps[this.props.map_id];
    return {
      position: 0,
      map: map
    }
  },
  changePosition: function (i) {
    this.setState({
      position: i
    });
  },
  render: function () {
    var captionOptions = [],
        captions = this.state.map.captions,
        _that = this;
    for (var i = 0; i < captions.length; i++){
      // if i = position add "disabled" / "selected" class
      captionOptions.push(
        <a className="circle" key={i} onClick={this.changePosition.bind(null, i)}></a>
      );
    }
    return (
      <div className="row">
        <div className="col-md-4 center">
          <h4>{this.state.map.title}</h4>
          {captionOptions} <br />
          <MapCaptions position={this.state.position} captions={this.state.map.captions} newPosition={this.changePosition} />
        </div>
        <div className="col-md-8">
          <MapBody bg={this.state.map.bg} overlay={this.state.map.overlays[this.state.position]} position={this.state.position} />
        </div>
      </div>
    );
  },
  img_root: "/img/",
  maps: {
    spills: {
      title: "Incidents of Contamination",
      bg: "./assets/maps/spills_map.png",
      captions: [
        [
          'Charleston Plant, 1964.',
          'Investigation of complaints of bad smells & dirty water. Found to be "safe", but in 1970 they start building a new plant on the Elk River.',
        ],
        [
          "Hamlin Plant, 1967",
          "A complaint lead to invetigation, finding bad smells in water. deamed safe, but just smelly..."
        ],
        [
          "Putnam PSD, 1970",
          "A diesel spill forces the water company to invest in early monitoring, and a safer backup water supply."
        ],
        [
          "Prenter, 1990 - 2009",
          "Massey Energy's coal slurry injection wells leaked into the local rural communities well water. After massive health impacts, people won a lawsuit and were provided WVAW water."
        ],
        [
          "Elk River, 2014",
          "Before the January 9th, 2014 spill from Freedom Industries, the former owner, Penzoil, also had a spill. The Freedom Industries spill poisoned the water in 9 counties, near 100,000 people.."
        ]
      ],
      overlays: [
        ["./assets/maps/pointer.png","379px","107px"],
        ["./assets/maps/pointer.png","114px","49px"],
        ["./assets/maps/pointer.png","177px","8px"],
        ["./assets/maps/pointer.png","399px","333px"],
        ["./assets/maps/pointer.png","377px","82px"]
      ]
    }
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
      <div className="map-captions">
        <h5>{this.props.captions[this.props.position][0]}</h5>
        <p>{this.props.captions[this.props.position][1]}</p>
      </div>
    );
  }
});
var MapBody = React.createClass({
  render: function () {
    var mapStyle = {
      width: '735px',
      height: '500px',
      background: 'url(' + this.props.bg + ')'
    };
    var overlayStyle = {
      position: 'relative',
      left: this.props.overlay[1],
      top: this.props.overlay[2]
    }
    return (
      <div className="map-body" style={mapStyle}>
        <img src={this.props.overlay[0]} style={overlayStyle} />
      </div>
    );
  }
});
ReactDOM.render(
  <InteractiveMap map_id='spills'/>,
  document.getElementById('map1')
);
