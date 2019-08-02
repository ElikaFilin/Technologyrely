let gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	bs = require('browser-sync').create();

gulp.task('html', function html() {
	return gulp.src('src/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('scss', function scss() {
	return gulp.src('src/*.scss')
		.pipe(sass({collapseWhitespace: true}))
		.pipe(cleanCSS({level: 2}))
		.pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function browserSync() {
	bs.init({
		server: {
			baseDir: './dist/'
		},
	});
	gulp.watch('./src/*.html');
	gulp.watch('./src/*.scss');
	gulp.watch("./src/*.html").on('change', bs.reload);
	gulp.watch("./src/*.scss").on('change', bs.reload);
});

gulp.task('default', gulp.parallel(html, scss));
gulp.task('watch', gulp.parallel('default', browserSync));
