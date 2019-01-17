let gulp = require('gulp'),
		cssimport = require("postcss-import"),
		cssurl = require("postcss-url"),
		cssnext = require("postcss-cssnext"),
		postcss = require("gulp-postcss"),
		browserSync = require("./browserSync");
	
gulp.task("styles", function() {
	return gulp.src('./styles/styles.css')
		.pipe(postcss([
			cssimport,
			cssurl,
			cssnext
			]))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));		
})