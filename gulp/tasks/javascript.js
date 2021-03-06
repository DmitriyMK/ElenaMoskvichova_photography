import gulp from 'gulp';
import path from 'path';
import util from 'gulp-util';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import uglifyJs from 'gulp-uglify';
import babel from 'gulp-babel';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import config from '../config';


// TODO - move to webpack.config.js
const webpackConfig = {
  mode: config.production ? 'production' : 'development',
  // module: {
  //   rules: [
  //     {
  //       test: require.resolve('jquery'),
  //       use: [
  //         {
  //           loader: 'expose-loader',
  //           options: 'jQuery',
  //         },
  //         {
  //           loader: 'expose-loader',
  //           options: '$',
  //         },
  //       ],
  //     },
  //   ],
  // }
};

const javascriptVendor = () =>
  gulp
    .src([config.src.js + '/vendor.js'])
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(webpackStream(webpackConfig))
    .pipe(concat('vendor.js'))
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(gulp.dest(config.dest.js));

const javascriptApp = () =>
  gulp
    .src([
      config.src.js + '/vendor/**/*.js',
      config.src.js + '/app.js',
      config.src.js + '/modules/**/*.js',
      // config.src.components + '/**/*.js',
    ])
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(concat('app.js'))
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(config.production ? uglifyJs() : util.noop())
    .pipe(gulp.dest(config.dest.js));

const buildJavascript = () => gulp.parallel(javascriptVendor, javascriptApp);

const watch = () => () => {
  gulp.watch([config.src.js + '/vendor.js'], javascriptVendor);
  gulp.watch(
    [
      config.src.js + '/vendor/**/*.js',
      config.src.js + '/app.js',
      config.src.js + '/modules/**/*.js',
      // config.src.components + '/**/*.js',
    ],
    javascriptApp
  );
};

module.exports.build = buildJavascript;
module.exports.watch = watch;
