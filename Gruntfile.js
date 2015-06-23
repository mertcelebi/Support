module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      build: {
        cwd: 'source',
        src: [ '**', '!**/*.scss', '!**/*.jade' ],
        dest: 'build',
        expand: true
      },
    },
 
    clean: {
      build: {
        src: [ 'build' ]
      },
      stylesheets: {
        src: [ 'build/**/*.css', '!build/css/application.css' ]
      },
      html: {
        src: [
          'build/includes',
          'build/markdown'
        ]
      }
    },
 
    sass: {
      dist: {
        options: {
          style: 'expanded',
          loadPath: [
            "bower_components/bootstrap-sass/assets/stylesheets",
            "bower_components/bourbon/app/assets/stylesheets",
            "bower_components/font-awesome/scss"
          ]
        },
        files: {
          'build/css/application.css': 'source/css/application.css.scss'
        }
      }
    },
 
    jade: {
      compile: {
        options: {
          data: {}
        },
        files: [{
          expand: true,
          cwd: 'source',
          src: [ '**/*.jade' ],
          dest: 'build',
          ext: '.html'
        }]
      }
    },
 
    watch: {
      stylesheets: {
        files: 'source/**/*.scss',
        tasks: [ 'stylesheets' ]
      },
      scripts: {
        files: 'source/**/*.coffee',
        tasks: [ 'scripts' ]
      },
      jade: {
        files: [ 'source/**/*.jade', 'source/**/*.md' ],
        tasks: [ 'jade' ]
      },
      copy: {
        files: [ 'source/**', '!source/**/*.scss', '!source/**/*.coffee', '!source/**/*.jade' ],
        tasks: [ 'copy' ]
      }
    },
 
    connect: {
      server: {
        options: {
          port: 4000,
          base: 'build',
          hostname: '*'
        }
      }
    }
 
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask(
    'stylesheets', 
    'Compiles the stylesheets.', 
    [ 'sass', 'clean:stylesheets' ]
  );
 
  grunt.registerTask(
    'build', 
    'Compiles all of the assets and copies the files to the build directory.', 
    [ 'clean:build', 'copy', 'stylesheets', 'jade', 'clean:html' ]
  );
 
  grunt.registerTask(
    'default', 
    'Watches the project for changes, automatically builds them and runs a server.', 
    [ 'build', 'connect', 'watch' ]
  );
};
