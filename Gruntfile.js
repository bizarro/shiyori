module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/css/shiyori.css': 'assets/css/shiyori.scss'
        }
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({
            browsers: ['last 40 versions']
          })
        ]
      },
      dist: {
        src: 'dist/css/shiyori.css',
        dest: 'dist/css/shiyori.css'
      }
    },
    uglify: {
      dist: {
        options: {
          mangle: false
        },
        files: {
          'dist/js/shiyori.js': [
            'assets/js/plugin/imagesloaded.js',
            'assets/js/plugin/infinitescroll.js',
            'assets/js/plugin/masonry.js',
            'assets/js/plugin/mobiledetect.js',
            'assets/js/padrao.js'
          ]
        }
      }
    }
  })

  grunt.registerTask('default', ['sass', 'postcss', 'uglify'])
}
