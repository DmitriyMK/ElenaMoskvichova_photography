var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var config = require('../config');
var csso = require('postcss-csso');

var processors = [
  autoprefixer({
    browsers: [
      'Chrome >= 64',
      'Explorer >= 11',
      'Firefox 58',
      'Edge >= 16',
      'iOS >= 11',
      'Opera >= 50',
      'Safari >= 10',
      'ChromeAndroid >= 64',
      'FirefoxAndroid >= 51',
      'ExplorerMobile >= 11'
    ],
    cascade: false
  }),
  require('lost'),
  mqpacker({
    sort: sortMediaQueries
  }),
  csso
];

gulp.task('sass', function () {
  return gulp
    .src(config.src.sass + '/*.{sass,scss}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
      precision: 5
    }))
    .on('error', config.errorHandler)
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.css));
});

// gulp.task('sass:watch', function() {
//     gulp.watch(config.src.sass + '/**/*.{sass,scss}', ['sass']);
// });



function isMax(mq) {
  return /max-width/.test(mq);
}

function isMin(mq) {
  return /min-width/.test(mq);
}

function sortMediaQueries(a, b) {
  A = a.replace(/\D/g, '');
  B = b.replace(/\D/g, '');

  if (isMax(a) && isMax(b)) {
    return B - A;
  } else if (isMin(a) && isMin(b)) {
    return A - B;
  } else if (isMax(a) && isMin(b)) {
    return 1;
  } else if (isMin(a) && isMax(b)) {
    return -1;
  }

  return 1;
}


let build = function (gulp) {
  return gulp.parallel('sass');
};

let watch = function (gulp) {
  return function () {
    gulp.watch(config.src.sass + '/**/*.{sass,scss}', gulp.parallel('sass'));
  }
};



module.exports.build = build;
module.exports.watch = watch;