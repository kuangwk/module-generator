module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    clean: ['doc'],
    jsdoc : {
      doc: {
        src : ['src/*.js', 'README.md'],
        options : {
          destination : 'doc/',
            template : "node_modules/ink-docstrap/template",
            configure : "node_modules/ink-docstrap/template/jsdoc.conf.json"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsdoc-update');

  // Default task.
  grunt.registerTask('default', []);

  // Doc task
  grunt.registerTask('doc', ['clean', 'jsdoc:doc']);
  grunt.registerTask('clear', ['clean']);

  
};
