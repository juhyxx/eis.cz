// See http://brunch.io for documentation.

var fs = require('fs');
var path = require('path');

var dir = __dirname + '/app/assets/svg/'

exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {
    joinTo: 'app.css'
	},
}

exports.plugins = {
  sass: {
    allowCache: false
  }
}