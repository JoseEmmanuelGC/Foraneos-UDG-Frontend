const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const cssMin = require('gulp-css');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

gulp.task('images', () => gulp.src('app/img/**/*.+(png|jpg|jpeg|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images')));

gulp.task('css', () => {
  gulp.src('./app/css/*.css')
    .pipe(concat('app.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', () => {
  gulp.src('./app/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
  });
});

gulp.task('default', ['css', 'scripts', 'images']);
