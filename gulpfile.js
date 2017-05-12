var gulp = require('gulp');
var pump = require('pump');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('clean', function(callback) {
    pump([
            gulp.src('dist', {read: false}),
            clean()
        ],
        callback
    );
});

gulp.task('nunjucks', ['clean'], function(callback) {
    pump([
            gulp.src('src/pages/**/*.+(html|nunjucks)'),
            nunjucksRender({
                path: ['src/templates'] // String or Array
            }),
            gulp.dest('dist')
        ],
        callback
    );
});

gulp.task('sass', ['clean'], function(callback) {
    pump([
            gulp.src('src/assets/style/application.scss'),
            sass({outputStyle: 'compressed'}).on('error', sass.logError),
            gulp.dest('dist/assets/style')
        ],
        callback
    );
});

gulp.task('copy', ['clean'], function(callback) {
    pump([
            gulp.src([
                'src/assets/**/*',
                '!src/assets/**/*.scss',
                '!src/assets/**/*.js'
            ]),
            gulp.dest('dist/assets')
        ],
        callback
    );
});

gulp.task('javascript', ['clean'], function(callback) {
    pump([
            gulp.src([
                'src/assets/javascript/jquery.min.js',
                'src/assets/javascript/jquery.scrollme.js',
                'src/assets/javascript/mobile-menu.js',
                'src/assets/javascript/smooth-scroll.js'
            ]),
            concat('application.min.js'),
            uglify(),
            gulp.dest('dist/assets/javascript')
        ],
        callback
    );
});

gulp.task('default', ['clean', 'nunjucks', 'copy', 'sass', 'javascript']);
