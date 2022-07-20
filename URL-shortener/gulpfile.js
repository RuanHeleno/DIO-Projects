const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');

const srcSASS = 'src/scss/*.scss';
const srcHTML = 'src/*.html';
const srcIMG = 'src/images/*';
const destSASS = 'dist/style';
const destHTML = 'dist';
const destIMG = 'dist/images';

sass.compiler = require("node-sass");

gulp.task('default', watch);
gulp.task('sass', Compile);

function Compile() {
    let html = gulp.src(srcHTML)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(destHTML))

    let css = gulp.src(srcSASS)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(destSASS))
    
    let img = gulp.src(srcIMG)
    .pipe(imagemin())
    .pipe(gulp.dest(destIMG))

    return merge(html, css, img);
};

function watch() {
    gulp.watch([srcHTML, srcSASS], Compile);
};