let gulp = require('gulp'),
	browserSync = require('browser-sync').create();


gulp.task('browserSync', function() {
	browserSync.init({
		notify: false,
		server: "./test/app"
	})
})

module.exports = browserSync;