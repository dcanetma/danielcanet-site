// Maamund Hexo theme 
module.exports = function(grunt){
  grunt.initConfig({
    copy: {
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist/',
        src: ['**'],
        dest: 'source/assets/vendor/'
      }
    },
    _clean: {
      tmp: ['tmp'],
      jquery: ['source/assets/vendor'],
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.renameTask('clean', '_clean');

  grunt.registerTask('default', ['copy', '_clean:tmp']);
  grunt.registerTask('clean', ['_clean']);
};