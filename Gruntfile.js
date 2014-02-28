'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
	concat: {
	    vendor: {
		src: [
		    'js/jquery-1.10.2.min.js',
		    'js/lodash.min.js',
		    'js/backbone.js',
		    'js/backbone.marionette.min.js',
		    'js/bootstrap.min.js'
		],
		dest: 'vendor.js'
	    },
	    app: {
		src: ['js/app.js'],
		dest: 'app.js'
	    }
	}
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat:vendor', 'concat:app']);

};

