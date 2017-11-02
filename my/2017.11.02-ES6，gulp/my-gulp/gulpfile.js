/**
 * Created by DELL- on 2017/11/2.
 */
var gulp=require("gulp");
var uglify=require("gulp-uglify");
var minifyCss=require("gulp-minify-css");
var babel=require("gulp-babel");//把ES6转换ES5
var img=require("gulp-imagemin");

gulp.task("script",function () {
    gulp.src("js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});
gulp.task("ES6",function () {
    gulp.src("es6-js/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist/es6-js"));
});
gulp.task("css",function () {
    gulp.src("css/*.css")
        .pipe(minifyCss())
        .pipe(gulp.dest("dist/css"));
});
gulp.task("image",function () {
    gulp.src("images/**/*.jpg")
        .pipe(img({
            progressive: true
        }))
        .pipe(gulp.dest("dist/image"));
});
gulp.task("auto",function () {
    //实时监听
    gulp.watch("js/*.js",["script"]);
    gulp.watch("css/*.css",["css"]);
});
gulp.task("default",["script","image","ES6","css","auto"],function () {
    console.log("ok");
});
