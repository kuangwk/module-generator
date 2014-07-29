module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    clean: ['doc'],
    jsdoc : {
      basic : {
        src : ['src/*.js', 'README.md'],
        options : {
          destination: 'doc/basic'
        }
      },
      docstrap : {
        src : ['src/*.js', 'README.md'],
        options : {
          destination : 'doc/docstrap',
            template : "node_modules/ink-docstrap/template",
            configure : "node_modules/ink-docstrap/template/jsdoc.conf.json"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsdoc-update');

  // Default task.
  grunt.registerTask('default', ['jsdoc:basic']);
  grunt.registerTask('docstrap', ['jsdoc:docstrap']);
  grunt.registerTask('clear', ['clean']);

  
};
