module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    '6to5': {
        dist: {
            files: {
                'build/Core.js': 'src/Core.js',
                'build/Module.js': 'src/Module.js',
                'build/EventTypes.js': 'src/EventTypes.js',
                'build/Kronicle.js': 'src/Kronicle.js'
            }
        },
        test: {            
            files:{
            'tests/tests.js': 'tests/src/tests.js'
            }            
        }
    },
    mochaTest:{
        src: ['tests/tests.js']
    }
  });

  grunt.loadNpmTasks('grunt-6to5');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['6to5:dist', '6to5:test', 'mochaTest']);

  grunt.registerTask('default', ['6to5:diest']);

};