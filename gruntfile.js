module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    clean: {
      dev: ['dist'],
      doc: ['doc']
    },
    uglify: {
      build: {
        files: {
          // output file
          'dist/main.js': ['src/*.js']
        }
      }
    },
    jsdoc: {
      doc: {
        src : ['src/*.js', 'README.md'],
        options : {
          destination : 'doc/',
            template : "node_modules/docstrap-doggy/template",
            configure : "node_modules/docstrap-doggy/template/jsdoc.conf.json"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jsdoc-update');

  // Default task.
  grunt.registerTask('default', []);

  // Doc task
  grunt.registerTask('doc', ['clean:doc', 'jsdoc:doc']);
  grunt.registerTask('dev', ['clean:dev', 'uglify']);
  grunt.registerTask('build', ['clean', 'doc','uglify']);
  grunt.registerTask('clear', ['clean']);

  
};
