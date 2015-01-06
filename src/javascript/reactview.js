var React = require('react');

var view = require('../jsx/view.jsx'); // need to specify the jsx extension
React.renderComponent(view(), document.getElementById('reactcontent'));