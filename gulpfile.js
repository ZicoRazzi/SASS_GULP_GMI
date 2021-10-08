const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass')),
      browserSync = require('browser-sync').create(),
      jquery = require('jquery'); 

//werk directory paden
// add paths // styleDirs directories voor de styles
const paths = { 
  styleDirs: { 
    //pattern: ** is alle directories
    //          * is alle karakters (namen bv .scss)
      src: 'src/scss/**/*.scss', 
      dest: 'dist/css' 
  } 
};

function style () {
  return (
    gulp.src(paths.styleDirs.src)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(paths.styleDirs.dest))
        .pipe(browserSync.stream())
  );
}

function reload () {
  browserSync.reload();
}

function watch () {
  browserSync.init(
    {proxy: 'http://localhost:8888/SASS_GULP_GMI/dist/'}
  );

  gulp.watch(paths.styleDirs.src, style);
  gulp.watch('dist/index.html', reload)
}
//exports.default = style;

exports.default = watch;