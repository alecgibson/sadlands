var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('default', function () {
    return gulp.src('src/pages/**/*.html')
        .pipe(nunjucksRender({
            path: ['src/templates'] // String or Array
        }))
        .pipe(gulp.dest('dist'));
});
