// Gulp Variables
var gulp = require('gulp');
	sass = require('gulp-sass');
 	livereload = require('gulp-livereload');
 	connect = require('gulp-connect');
 	jshint = require('gulp-jshint');
  rename = require('gulp-rename');
  minifyCss = require('gulp-minify-css');

// Server Task
// Simiulates a server environment within gulp. To access type localhost:1988 or whatever number you put in
function serve (done) {
    connect.server({
        root: '',
        port: 1914,
        livereload: true
    });
		done();
};

// Styles Task
// pipe streams files meaning that you can do "anything" to these files
// minifies css and sets destination to css/ folder
function styles (done) {
    gulp.src('sass/custom.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCss())
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload());
				done();
};

// HTML Task
// * represents anything with .html
// reloads html files
function html (done) {
    gulp.src('./*.html')
    .pipe(connect.reload());
		done();
};

// JS Lint Task for correcting and monitoring your custom.js
// any file with the js at the end, I will lint and reload on the browser
function lint (done) {
  gulp.src('js/*.js')
  .pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(connect.reload());
	done();
};

// Watches for any file changes
function watch (done) {
	gulp.watch('sass/**/*.scss', gulp.series(styles));
	gulp.watch('./*.html', gulp.series(html));
	gulp.watch('js/*.js', gulp.series(lint));
	done();
}

// Tasks that Gulp will run (tasks/functions above)
gulp.task('default', gulp.series(serve, watch, lint, html, styles));
