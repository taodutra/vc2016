/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp  = require('gulp');
var config = require('../config');
var lr = require('tiny-lr');
var livereload = require('gulp-livereload');

gulp.task('watch', ['setWatch', 'build'], function() {

  gulp.watch(config.sass.src,   ['sass']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.listenables, livereload.changed);

  livereload.listen();

});
