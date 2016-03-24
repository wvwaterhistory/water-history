require("./css/basic.css");
require("./css/article.css");
require("./css/map.css");
require("./css/viewmaster.css");
import $ from 'jquery';
require("bootstrap-webpack");

var React = require('react');
var ReactDOM = require('react-dom');
import App from './Components/app.jsx';

ReactDOM.render(<App />, document.getElementById('myApp'));

$('.circle').on('click', function(){
  $(this).siblings().removeClass('filled');
  $(this).addClass('filled');
});
