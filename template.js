/*
 * grunt-init-usat-interactive
 * https://github.com/usatoday
 *
 * Copyright (c) 2014 USA TODAY
 * 
 */

'use strict';

// Basic template description.
exports.description = 'Create a new USAT interactive';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_ and _bower install_. After that, you may execute project tasks with _grunt_. ' +
  'For more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

//get current date;

var date = new Date();
var month = date.getMonth() + 1;

if (month < 10) { 
  month = "0" + month;
}

var year = date.getYear() + 1900;

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'node'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
  ], function(err, props) {
    props.keywords = [];
    props.year = year;
    props.month = month;
    props.devDependencies = {
      "grunt": "^0.4.5",
      "grunt-autoprefixer": "^0.7.3",
      "grunt-browser-sync": "^1.5.3",
      "grunt-contrib-clean": "^0.6.0",
      "grunt-contrib-copy": "^0.6.0",
      "grunt-contrib-jshint": "^0.10.0",
      "grunt-contrib-jst": "^0.6.0",
      "grunt-contrib-requirejs": "^0.4.4",
      "grunt-contrib-sass": "^0.7.3",
      "grunt-contrib-uglify": "^0.4.0",
      "grunt-contrib-watch": "~0.5.3",
      "grunt-ftp": "^1.0.1",
      "osenv": "^0.1.0",
      "time-grunt": "^0.3.2"
    };
    props.scripts = {
    "postinstall": "bower cache clean && bower install"
    };


    // Files to copy (and process).
    var files = init.filesToCopy(props);
    
    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
