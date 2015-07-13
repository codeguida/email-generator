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
  gulp.src('app/styles/scss/main.scss')
    .pipe(sass({
      sourcemap: false,
      style: 'expanded',
      lineNumbers: true
    }))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./app/styles'))
    .pipe(reload({stream: true}));
});


gulp.task('inline', ['styles', 'jade'], function() {
  return gulp.src('app/index.html')
    .pipe(inlineSource({
      rootpath: 'app'
    }))
    .pipe(inlineCss({
      preserveMediaQueries: true
    }))
    .pipe(gulp.dest('dist/'));
});


gulp.task('jade', function() {
  return gulp.src('app/template/*.jade')
    .pipe(jade({
      pretty: true,
      compileDebug: true
    }))
    .pipe(gulp.dest('app/'));
});


gulp.task('clean', require('del').bind(null, 'dist'));

gulp.task('build', ['clean','inline']);

gulp.task('serve', ['styles', 'jade'], function() {
  browserSync({
    server: './app',
    notify: false,
    debugInfo: false,
    host: 'localhost'
  });

  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/*.html').on('change', reload);
  gulp.watch('app/template/**/*.jade', ['jade']);
});

gulp.task('serve:dist', ['inline'], function() {
  browserSync({
    server: './dist',
    notify: false,
    debugInfo: false,
    host: 'localhost'
  });
});
