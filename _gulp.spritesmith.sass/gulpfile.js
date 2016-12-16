var gulp = require('gulp'),
    sass = require('gulp-sass'),
    spritesmith = require('gulp.spritesmith');

// image sprite
gulp.task('sprite', function generateSpritesheets (){
    var spriteData = gulp.src('./src/sp_img/*.png')
    .pipe(spritesmith({
        retinaSrcFilter: ['./src/sp_img/*-2x.png'],
        imgName: 'spritesheet.png',
        retinaImgName: 'spritesheet-2x.png',
        padding: 4,
        cssName: 'spritesheet.scss'
    }));
    spriteData.img.pipe(gulp.dest('./dist/src/img'));
    spriteData.css.pipe(gulp.dest('./src/scss'));
});

// Sass
gulp.task('sass', function(){
    return gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/src/css'));
});

gulp.task('default', ['sprite','sass']);
