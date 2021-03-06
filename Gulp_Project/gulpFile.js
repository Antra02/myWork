const gulp = require('gulp');
const imageMin = require('gulp-imagemin');

/*
TOP LEVEL FUNCTIONS
gulp.task - define tasks
gulp.src - points to files to use
gulp.dest - points to folder to output
gulp.watch - watch files
*/

//logs message

gulp.task('message', function(){
	return console.log('Gulp is running...');
});

gulp.task('default', function(){
	return console.log('Gulp is running...by default');
});

//copy all HTML files
gulp.task('copyHTML', function() {
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

//optimize images
gulp.task('imageMin', () => 
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dest/images'))
	);

