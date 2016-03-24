module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			target: {
			  	files: [{
			    	expand: true,
			    	cwd: 'src/css',
			    	src: ['*.css', '!*.min.css'],
			    	dest: 'dist/css',
			    	ext: '.css'
			  	}]
			}
		},

		copy: {
			main: {
			    files: [
			      {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/'},
			    ],
			},
		},

		htmlmin: {
		    dist: {                                      // Target
		      options: {                                 // Target options
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                   // Dictionary of files
		        'dist/index.html': 'dist/index.html',     // 'destination': 'source'
		        'dist/project-2048.html': 'src/project-2048.html',
		        'dist/project-mobile.html': 'src/project-mobile.html',
		        'dist/project-webperf.html': 'src/project-webperf.html',
		        'dist/views/pizza.html': 'src/views/pizza.html'
		      }
		    },
		},

		jshint: {
	    	files: ['Gruntfile.js', 'src/**/*.js'],
	    		options: {
	        		globals: {
	          		jQuery: true
	        	}
	      	}
	    },

	    watch: {
	      files: ['<%= jshint.files %>'],
	      tasks: ['jshint']
	    },

	    uglify: {
		    my_target: {
		      files: {
		        'dist/js/perfmatters.js': ['src/js/perfmatters.js', 'src/views/js/main.js'],
		        'dist/views/js/main.js': ['src//views/js/main.js']
		      }
		    }
		}

	});


	// Register all minify and tasks
  	grunt.loadNpmTasks('grunt-contrib-htmlmin');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['copy', 'cssmin', 'uglify', 'htmlmin']);
	grunt.registerTask('jshint', ['jshint']);
};