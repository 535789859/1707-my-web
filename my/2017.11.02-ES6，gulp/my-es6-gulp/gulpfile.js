/**
 * Created by DELL- on 2017/11/2.
 */
var gulp=require("gulp");
var babel=require("gulp-babel");
var uglify = require('gulp-uglify');

gulp.task("es6",function () {
    gulp.src("js/*.js")
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("default",["es6"],function () {
    console.log("ok");
});