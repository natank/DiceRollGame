let gulp = require('gulp'),
	browserSync = require('./browserSync');

gulp.task('html', function() {
	gulp.src('Devel/app/*.html')
		.pipe(gulp.dest('Test/app'))
		.on('finish', function() {
			browserSync.reload();
		})
})