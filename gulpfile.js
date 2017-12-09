var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src("less/style.less")
        .pipe(less())
        .pipe(gulp.dest("./css/"))
});

/*making sure that css file see less file */
gulp.task('default', ['less'], function() {
    gulp.watch("less/style.less", ["less"]);
})