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
		src: [
		    'js/tpl.js',
		    'js/app.js'
		],
		dest: 'app.js'
	    }
	},
	uglify: {
	    vendor: {
		src: 'vendor.js',
		dest: 'vendor.min.js'
	    },
	    app: {
		src: 'app.js',
		dest: 'app.min.js'
	    }
	},
	jst: {
	    options: {
		namespace: 'TPL'
	    },
	    compile: {
		files: {
		    "js/tpl.js": ["tpl/*html"]
		}
	    }
	}
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jst');

    grunt.registerTask('default', ['concat:vendor', 'concat:app', 'uglify']);
    grunt.registerTask('t', ['jst:compile']);

};

