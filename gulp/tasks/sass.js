var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var cleanCSS = require('gulp-clean-css');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;

gulp.task('sass', ['images'], function () {
  return gulp.src(config.src)
    .pipe(sass({
      compass: true,
      // bundleExec: true,
      // sourcemap: true,
      sourcemapPath: '../sass'
    }))
    // .on('error', handleErrors)
    // .pipe(cleanCSS())
    .pipe(gulp.dest(config.dest));
});
