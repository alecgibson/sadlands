var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var clean = require('gulp-clean');

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

gulp.task('copy', ['clean'], function() {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['clean', 'nunjucks', 'copy']);
