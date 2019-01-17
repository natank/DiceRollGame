let gulp = require('gulp'),
	browserSync = require('./browserSync'),
	runSequence = require('run-sequence');


gulp.task('watch', function() {
	runSequence('styles','browserSync', 
	 function(){
	 	
 		 gulp.watch("app/**/*.html", function() {
 		 	browserSync.reload();
 		 } );

 		 gulp.watch("styles/**/*.css", ["styles"]);
	});
});
