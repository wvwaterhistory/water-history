var React = require('react');
var ReactDOM = require('react-dom');
import $ from 'jquery';

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
      <div className="col-xs-12 col-sm-10 col-sm-offset-1">
        <h3 className="map-title">{this.props.captions[this.props.position][0]}</h3>
        {this.props.navigation}
        <p><em>{this.props.captions[this.props.position][1]}</em></p>
      </div>
    );
  }
});

var InteractiveMap = React.createClass({
  getInitialState: function () {
    var map = this.maps[this.props.map_id];
    return {
      position: 0,
      map: map,
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
      <div className="row paper-bg" id={this.props.map_id + "Map"}>
        <h2 className="map-title center">{this.state.map.title}</h2>
        <div className="col-md-4 center map-captions">
          <div className="spacer2 hidden-sm hidden-xs"></div>
          <hr className="hidden-xs hidden-sm col-md-12" />
            <MapCaptions position={this.state.position} captions={this.state.map.captions} navigation={this.state.navigation} newPosition={this.changePosition} />
          <hr className="hidden-xs hidden-sm col-md-12" />
        </div>
        <div className="col-md-8">
          <MapBody bg={this.state.map.bg} bgHeight={this.state.map.bgHeight} overlay={this.state.map.overlays[this.state.position]} position={this.state.position} />
        </div>
      </div>
    );
  },
  componentDidMount: function () {
    var navigation = [],
        captionsLength = this.state.map.captions.length;
    if(captionsLength > 1){
      navigation.push( <a onClick={this.incrementPosition.bind(null, this.props.map_id, -1)} key={captionsLength + 1}><img src="./src/bg/arrow_decr.svg"/></a> );
      for (var i = 0; i < captionsLength; i++){
        navigation.push(
          <a className={i === 0 ? "circle filled" : "circle"} key={i} onClick={this.changePosition.bind(null, i)}></a>
        );
      }
      navigation.push( <a onClick={this.incrementPosition.bind(null, this.props.map_id, 1)} key={captionsLength + 2}><img src="./src/bg/arrow_incr.svg"/></a> );
      this.setState({
        navigation: [<div className="map-nav">{navigation}</div>]
      });
    }
  },
  incrementPosition: function (map_id, n) {
    var newPosition = this.state.position + n,
        activeLink = newPosition + 2;
    if (n > 0 && newPosition < this.state.map.captions.length || n < 0 && newPosition >= 0) {
      $('#' + map_id + 'Map .map-nav a.circle:nth-child(' + activeLink +')').click();
      this.changePosition(newPosition);
    }
  },
  maps: {
    expansion: {
      title: 'A History of WV American Water',
      bg: './src/maps/expansion_base.png',
      bgHeight: 500,
      overlays: [
        ['./src/maps/expansion_69-78.png','0','0'],
        ['./src/maps/expansion_79-89.png','0','0'],
        ['./src/maps/expansion_90-99.png','0','0'],
        ['./src/maps/expansion_00-09.png','0','0'],
        ['./src/maps/expansion_2015.png','0','0'],
        ['./src/maps/expansion_holdouts.png','0','0']
      ],
      captions: [
        [ '1969 - 1978', '' ],
        [ '1979 - 1989', '' ],
        [ '1990 - 1999', '' ],
        [ '2000 - 2009', '' ],
        [ 'The Present', 'Approximate area served by WV American Water in 2015'],
        [ 'The Holdouts', 'Some districts have chosen to remain independent, despite economic pressures to join the larger WVAW congolmeration.']
      ]
    },
    spills: {
      title: 'Incidents of Contamination',
      bg: './src/maps/spills_map.png',
      bgHeight: 500,
      overlays: [
        ["./src/maps/pointer.png","379px","107px"],
        ["./src/maps/pointer.png","114px","49px"],
        ["./src/maps/pointer.png","177px","8px"],
        ["./src/maps/pointer.png","399px","333px"],
        ["./src/maps/pointer.png","377px","82px"]
      ],
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
      ]
    },
    exposure: {
      title: "Accounts of Unequal Exposure during the Jan. 9th, 2014 MCMH Spill",
      bg: "./src/maps/exposure_base.png",
      bgHeight: 450,
      overlays: [
        ["./src/maps/exposure_hi-impact.png","0","0"],
        ["./src/maps/exposure_elderly.png","0","0"],
        ["./src/maps/exposure_w_charleston.png","0","0"],
        ["./src/maps/exposure_coalfields.png","0","0"],
        ["./src/maps/exposure_jail.png","0","0"]
      ],
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
      ]
    }
  }
});

export default InteractiveMap;
