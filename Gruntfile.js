"use strict"

module.exports = function( grunt ) {

  grunt.initConfig({

    copy: {
      src: {
        files: [
          { expand: true, cwd: "src/less", src: [ "*.css" ], dest: "tmp/css" },
          { expand: true, cwd: "src/images", src: [ "**" ], dest: "tmp/images" },
          { expand: true, cwd: "src", src: [ "*.html" ], dest: "tmp" }
        ]
      },
      tmp: {
        files: [
          { expand: true, cwd: "tmp", src: [ "*.html" ], dest: "dist" }
        ]
      }
    },

    connect: {
      options: {
        port: "8080",
        useAvailablePort: true,
        livereload: true,
        open: true
      },
      dev: {
        options: {
          base: "tmp/"
        }
      }
    },

    watch: {
      src: {
        files: [ "src/less/**/*.{css,less}", "src/images/**/*.{gif,png,jpg,jpeg}", "src/**/*.html" ],
        tasks: [ "dev:build" ],
        options: {
          livereload: true
        }
      }
    },

    less: {
      compile: {
        files: {
          "tmp/css/main.css": "src/less/main.less"
        }
      }
    },

    imagemin: {
      dist: {
        files: [
          { expand: true, cwd: "tmp/images", src: [ "**/*.{png,jpg,jpeg}" ], dest: "dist/images" }
        ]
      }
    },

    uncss: {
      dist: {
        files: {
          "tmp/css/core.css": [ "tmp/index.html" ]
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true
        },
        files: {
          "tmp/index.html": "tmp/index.html"
        }
      }
    },

    premailer: {
      options: {
        removeClasses: true
      },
      dist: {
        files: {
          "tmp/index.html": "tmp/index.html"
        }
      }
    }
  });

  grunt.registerTask( "default", "Compiles the distribution build", [
    "copy:src",
    "less:compile",
    "uncss:dist",
    "htmlmin:dist",
    "premailer:dist",
    "imagemin:dist",
    "copy:tmp"
  ]);

  grunt.registerTask( "dev:build", "Compiles the development build", [
    "copy:src",
    "less:compile",
    "copy:tmp"
  ]);

  grunt.registerTask( "dev", "Compiles the development environment", [
    "dev:build",
    "connect:dev",
    "watch:src"
  ]);

  grunt.loadNpmTasks( "grunt-contrib-copy" );
  grunt.loadNpmTasks( "grunt-contrib-connect" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.loadNpmTasks( "grunt-contrib-imagemin" );
  grunt.loadNpmTasks( "grunt-uncss" );
  grunt.loadNpmTasks( "grunt-contrib-htmlmin" );
  grunt.loadNpmTasks( "grunt-premailer" );
  grunt.loadNpmTasks( "grunt-contrib-less" );

};
