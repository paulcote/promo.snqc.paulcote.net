var gulp = require('gulp');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var symlink = require('gulp-symlink');

var config = require('../config.js');

gulp.task('symlink', function() {
    return gulp.src(config.src)
        .pipe(gulpif(config.sourcemaps && !argv.prod, symlink(config.build + 'src')));
});
