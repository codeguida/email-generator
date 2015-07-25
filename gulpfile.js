'use strict';

var gulp         = require('gulp'),
    jade         = require('gulp-jade'),
    sass         = require('gulp-sass'),
    rename       = require('gulp-rename'),
    sourcemaps   = require('gulp-sourcemaps'),
    inlineCss    = require('gulp-inline-css'),
    inlineSource = require('gulp-inline-source'),

    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;


gulp.task('styles', function() {
  gulp.src('template/scss/main.scss')
    .pipe(sass({
      sourcemap: false,
      style: 'expanded',
      lineNumbers: true
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./tmp'))
    .pipe(reload({stream: true}));
});


gulp.task('inline', ['styles', 'jade'], function() {
  return gulp.src('tmp/index.html')
    .pipe(inlineSource({
      rootpath: 'tmp'
    }))
    .pipe(inlineCss({
      preserveMediaQueries: true
    }))
    .pipe(gulp.dest('dist/'));
});


gulp.task('jade', function() {
  return gulp.src('template/*.jade')
    .pipe(jade({
      locals: require('./data'),
      pretty: true,
      compileDebug: true
    }))
    .pipe(gulp.dest('tmp/'));
});


gulp.task('clean', require('del').bind(null, 'dist'));


gulp.task('build', ['clean','inline']);


gulp.task('serve', ['styles', 'jade'], function() {
  browserSync({
    server: './tmp',
    notify: false,
    debugInfo: false,
    host: 'localhost'
  });

  gulp.watch('template/scss/**/*.scss', ['styles'] ).on('change', function (event) {
    console.log('File '+event.path+' was '+event.type+'...');
  });
  gulp.watch('template/**/*.jade', ['jade']).on('change', function (event) {
    console.log('File '+event.path+' was '+event.type+'...');
  });
  gulp.watch('tmp/*.html').on('change', reload);
});


gulp.task('serve:dist', ['inline'], function() {
  browserSync({
    server: './dist',
    notify: false,
    debugInfo: false,
    host: 'localhost'
  });
});
