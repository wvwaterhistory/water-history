require("./css/basic.css");
require("./css/article.css");
require("./css/map.css");
import $ from 'jquery';
require("bootstrap-webpack");

var React = require('react');
var ReactDOM = require('react-dom');
import App from './Components/app.jsx';
// import Test from './Components/test.js';

ReactDOM.render(<App />, document.getElementById('myApp'));
// ReactDOM.render(<Test />, document.getElementById('testContent'));
