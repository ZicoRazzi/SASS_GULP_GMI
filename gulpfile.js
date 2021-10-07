const gulp = require('gulp');
      sass = require('gulp-sass')(require('sass')); 

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
  );
}

exports.default = style;