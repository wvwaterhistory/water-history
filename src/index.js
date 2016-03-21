var React = require('react');
var ReactDOM = require('react-dom');
import $ from 'jquery';
require("bootstrap-webpack");
require("./css/basic.css");
require("./css/article.css");
require("./css/map.css");
var mapData = require("./json/map_data.json");

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
      <div className="row paper-bg">
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
  maps: {
    spills: {
      title: "Incidents of Contamination",
      bg: "./src/maps/spills_map.png",
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
        ["./src/maps/pointer.png","379px","107px"],
        ["./src/maps/pointer.png","114px","49px"],
        ["./src/maps/pointer.png","177px","8px"],
        ["./src/maps/pointer.png","399px","333px"],
        ["./src/maps/pointer.png","377px","82px"]
      ]
    },
    exposure: {
      title: "Accounts of Unequal Exposure during the Jan. 9th, 2014 MCMH Spill",
      bg: "./src/maps/exposure_map.png",
      captions: [
        [
          'Looking closer at the impact area',
          'Some populations in the impact area were affected more severely than others. Click through to learn more.',
        ],
        [
          'The Elderly',
          'It took a full day before the news of the spill was put out through all the new systems. Elderly people unable to pick up lots of water potentially lacked consistent access to clean water, particulalry in rural areas.'
        ],
        [
          'West Charleston',
          '"You just see how income impacts emergency response... people who couldn’t drive to pick up water from the distribution at the fire stations couldn’t get water. they probably went on using contaminated water. Folks on the West Side walk. And not walking like those folks in Kanawha City do for excercise." - Reverend Watts'
        ],
        [
          'Coalfields Communities',
          'As a rural, coalfield county with a lower income than the other areas impacted, people not only had to travel farther to get water, there were fewerer private water distribution site, even supermarkets are scarce in parts of this county.'
        ],
        [
          'Prisoners',
          '"They forced us to use the water, only gave us 8 ounces of clean water to drink at first. I’m stilll stick." - A Prisoner, South Central Regional Jail'
        ]
      ],
      overlays: [
        ["./src/maps/exposure_hi-impact.png","0","0"],
        ["./src/maps/exposure_elderly.png","0","0"],
        ["./src/maps/exposure_w_charleston.png","0","0"],
        ["./src/maps/exposure_coalfields.png","0","0"],
        ["./src/maps/exposure_jail.png","0","0"]
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
  document.getElementById('spillsMap')
);
ReactDOM.render(
  <InteractiveMap map_id='exposure'/>,
  document.getElementById('exposureMap')
);

// jquery
$('.circle').on('click', function(){
  $('.circle').removeClass('filled');
  $(this).addClass('filled');
});
