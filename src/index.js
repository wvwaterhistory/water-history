require("./css/basic.css");
require("./css/article.css");
require("./css/map.css");
require("./css/viewmaster.css");
import $ from 'jquery';
require("bootstrap-webpack");

var React = require('react');
var ReactDOM = require('react-dom');
import App from './Components/app.jsx';
var media = require("./json/media.json");
var maps = require("./json/maps.json");


ReactDOM.render(<App media={JSON.parse(media)} maps={JSON.parse(maps)}/>, document.getElementById('myApp'));

$('.circle').on('click', function(){
  $(this).siblings().removeClass('filled');
  $(this).addClass('filled');
});
