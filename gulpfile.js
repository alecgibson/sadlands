var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('clean', function() {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('nunjucks', ['clean'], function() {
    return gulp.src('src/pages/**/*.+(html|nunjucks)')
        .pipe(nunjucksRender({
            path: ['src/templates'] // String or Array
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', ['clean'], function() {
    return gulp.src('src/assets/style/application.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/style'))
});

gulp.task('copy', ['clean'], function() {
    return gulp.src(['src/assets/**/*', '!src/assets/**/*.scss'])
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['clean', 'nunjucks', 'copy', 'sass']);
