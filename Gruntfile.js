module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'babel': {
        dist: {
            files: {
                'build/Core.js': 'src/Core.js',
                'build/Module.js': 'src/Module.js',
                'build/EventTypes.js': 'src/EventTypes.js',
                'build/Kronicle.js': 'src/Kronicle.js',
                'build/lib/DataSource.js': 'src/lib/DataSource.js',
                'build/lib/DataSources.js': 'src/lib/DataSources.js',
                'build/lib/DataSourcesEvents.js': 'src/lib/DataSourcesEvents.js',
                'build/lib/ArrayDataSource.js': 'src/lib/ArrayDataSource.js',
                'build/lib/View.js': 'src/lib/View.js',
                'build/lib/Controller.js': 'src/lib/Controller.js',
                'build/lib/Component.js': 'src/lib/Component.js'
            }
        },
        test: {            
            files:{
                'tests/tests.js': 'tests/src/tests.js',
                'tests/datasource.tests.js': 'tests/src/datasource.tests.js',
                'tests/view.tests.js': 'tests/src/view.tests.js',
                'tests/controller.tests.js': 'tests/src/controller.tests.js',
                'tests/component.tests.js': 'tests/src/component.tests.js'
            }            
        }
    },
    mochacli: {
        options: {
            harmony: true
        },
        all: ['tests/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  //grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-mocha-cli');

  grunt.registerTask('test', ['babel:dist', 'babel:test', 'mochacli']);

  grunt.registerTask('default', ['babel:dist']);

};