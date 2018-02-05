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
		replacement: {
			replacements: [
				{
				files: [/\.html$/],
				match: {find: '{{TERAPEUT}}', replace: fs.readFileSync(path.join(dir, 'terapeut.svg'))},
				},
				{
					files: [/\.html$/],
					match: { find: '{{KONTAKT}}', replace: fs.readFileSync(path.join(dir, 'kontakt.svg')) }
				},
				{
					files: [/\.html$/],
					match: { find: '{{PRAVIDLA}}', replace: fs.readFileSync(path.join(dir, 'pravidla.svg')) }
				},
				{
					files: [/\.html$/],
					match: { find: '{{LADILNA}}', replace: fs.readFileSync(path.join(dir, 'ladilna.svg')) }
				}
		]}
	}
