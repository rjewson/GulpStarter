var _          = require('underscore');
var Backbone   = require('backbone');
Backbone.$     = require('jquery');
var plugin     = require('plugin');

module.exports = Backbone.View.extend({

  template: require('./template'),

  initialize: function() {
    underscoreTest = _.last([0,1,2, 'hi mom!']);
    this.render();
    debugger;
  },

  render: function() {
    this.$el.html("hi");
  }
});
