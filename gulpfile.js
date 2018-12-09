// Include gulp
const gulp = require('gulp');

// Include Plugins
const sass = require('gulp-sass');
const concat = require('gulp-concat');


// Compile Sass
gulp.task('sass', () => {
  gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/css'));
});

// Compile Sass in Sandbox
gulp.task('sass_sandbox', () => {
  gulp.src('sandbox/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('sandbox/'));
});


gulp.task('scripts', () => {
  gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', () => {
  gulp.watch('src/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['watch']);
