// Include gulp
const gulp = require('gulp');

// Include Our Plugins
const jshint = require('gulp-jshint');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Lint Task
gulp.task('lint', () => {
  gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Our Sass
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

// Concatenate & Minify JS
gulp.task('scripts', () => {
  gulp.src('src/js/*.js')
    // .pipe(concat('all.js'))
    // .pipe(gulp.dest('dist/js'))
    // .pipe(rename('all.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', () => {
  // gulp.watch('src/js/*.js', ['lint', 'scripts']);
  gulp.watch('src/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
