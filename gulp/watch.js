let gulp = require('gulp'),
	browserSync = require('./browserSync'),
	runSequence = require('run-sequence');


gulp.task('watch', function() {
	runSequence('html', 'styles','browserSync', 
	 function(){
	 	
 		 gulp.watch("Devel/app/**/*.html", ["html"]);

 		 gulp.watch("styles/**/*.css", ["styles"]);
	});
});
