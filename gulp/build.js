let gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('build', function() {
	runSequence('clean', 'browserSync', 'styles', 'watch', function() {
		console.log('building...')
	})
})

