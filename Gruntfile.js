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
		    'js/app.js',
		    'js/config.js',
		    'js/*.module.js'
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
		namespace: 'TPL',
		processName: function(filename) {
		    filename = filename.split('.')[0]; // everything before the first period
		    filename = filename.split('/'); // now an array broken on slashes
		    return filename[ filename.length -1 ]; // take the last element
		}
	    },
	    compile: {
		files: {
		    "js/tpl.js": ["tpl/*html"]
		}
	    }
	},
	watch: {
	    tpl: {
		files: [
		    'js/*.js',
		    'tpl/*.html'
		],
		tasks: "default"
	    }
	}
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['jst', 'concat']);
    grunt.registerTask('t', ['jst:compile']);
    
};
