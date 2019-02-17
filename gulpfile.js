'use strict'
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sassLint = require('gulp-sass-lint');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
  gulp.src(['./_src/sass/**/*.scss', './_src/sass/**/*.sass'])
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sassLint({
      configFile: '.scss-lint.yml'
    }))
    .pipe(sass({outputStyle: 'expanded'}))
    .on('error', notify.onError(function(err) {
      return err.message;
    }))
    .pipe(postcss([autoprefixer({browsers: ['> 2%']})]))
    .pipe(postcss([mqpacker()]))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(){
  watch(['./_src/sass/**/*.scss', './_src/sass/**/*.sass'], function() {
    return gulp.start(['sass']);
  });
})


gulp.task('sass-release', function() {
  gulp.src(['./_src/sass/**/*.scss', './_src/sass/**/*.sass'])
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([autoprefixer({browsers: ['> 2%']})]))
    .pipe(postcss([cssdeclsort({order: 'smacss'})]))
    .pipe(postcss([mqpacker()]))
    .pipe(gulp.dest('./css'))
})


gulp.task('default',['watch']);
gulp.task('release',['sass-release']);
