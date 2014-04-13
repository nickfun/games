'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
	/**
	   Concat the files
	*/
	concat: {
	    vendor: {
		src: [
		    'js/vendor/jquery-1.10.2.min.js',
		    'js/vendor/lodash.min.js',
		    'js/vendor/backbone.js',
		    'js/vendor/backbone.marionette.min.js',
                    'js/vendor/backbone.siphon.js',
		    'js/vendor/bootstrap.min.js',
		    'js/vendor/moment.min.js'
		],
		dest: 'out/vendor.js'
	    },
	    app: {
		src: [
		    'out/tpl.js',
		    'js/app.js',
		    'js/config.js',
		    'js/*.module.js'
		],
		dest: 'out/app.js'
	    },
	    final: {
		src: [
		    'out/vendor.js',
		    'out/tpl.js',
		    'out/app.js'
		],
		dest: 'out/spa.js'
	    }
	},
	/**
	   Minify the files
	*/
	uglify: {
	    vendor: {
		src: 'out/vendor.js',
		dest: 'out/vendor.min.js'
	    },
	    app: {
		src: 'out/app.js',
		dest: 'out/app.min.js'
	    },
	    spa: {
		src: 'out/spa.js',
		dest: 'out/spa.min.js'
	    }
	},
	/**
	   Compile Templates
	*/
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
		    "out/tpl.js": ["tpl/*html"]
		}
	    }
	},
	/**
	   WATCHER
	*/
	watch: {
	    app: {
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
    grunt.registerTask('full', ['jst','concat','uglify']);
    grunt.registerTask('t', ['jst:compile']);
    
};
