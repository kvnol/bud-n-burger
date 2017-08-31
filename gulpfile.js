const gulp = require('gulp');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');
const clean = require('gulp-clean-css');

const files = {
  'js': [ 
    './assets/js/_parts/*.js'
  ],
  'cssVendor': [
    './node_modules/normalize.css/normalize.css'
  ]
}

gulp.task('js', () => {
  gulp.src(files.js)
    .pipe('main.js')
    .pipe(ts())
    .pipe(gulp.dest('assets/js'))
});

gulp.task('css', () => {
  gulp.src(files.cssVendor)
    .pipe(concat('vendor.css'))
    .pipe(clean({
      compatibility: 'ie9'
    }))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('default', ['css']);
