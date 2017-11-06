/**
 * Created by DELL- on 2017/11/2.
 */
var gulp=require("gulp");
var uglify=require("gulp-uglify");
var minifyCss=require("gulp-minify-css");
var babel=require("gulp-babel");//把ES6转换ES5
var img=require("gulp-imagemin");
var less=require("gulp-less");
var sass = require('gulp-ruby-sass');

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
gulp.task('less', function () {
    // 1. 找到 less 文件
    gulp.src('less/**.less')
    // 2. 编译为css
        .pipe(less())
        // 3. 另存文件
        .pipe(gulp.dest('dist/less'))
});
gulp.task('sass', function() {
    return sass('sass/')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('dist/sass'));
});
gulp.task("auto",function () {
    //实时监听
    gulp.watch("js/*.js",["script"]);
    gulp.watch("css/*.css",["css"]);
});
gulp.task("default",["script","image","ES6","css","less","sass","auto"],function () {
    console.log("ok");
});
