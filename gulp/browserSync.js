let gulp = require('gulp'),
	browserSync = require('browser-sync').create();


gulp.task('browserSync', function() {
	browserSync.init({
		notify: false,
		server: "./app"
	})
})

module.exports = browserSync;