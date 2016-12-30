/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import eslint from 'gulp-eslint';
import flow from 'gulp-flowtype';
import webpack from 'webpack-stream';
import mocha from 'gulp-mocha';
import flatten from 'gulp-flatten';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config.babel';
import webpackConfigSw from './webpack.config.sw.babel';

const server = browserSync.create('development');

const paths = {
  srcHtml: 'src/**/*.html',
  allSrcJs: 'src/**/*.js?(x)',
  serverSrcJs: 'src/server/**/*.js?(x)',
  sharedSrcJs: 'src/shared/**/*.js?(x)',
  clientEntryPoint: 'src/client/index.jsx',
  swEntryPoint: 'src/client/sw.js',
  gulpFile: 'gulpfile.babel.js',
  webpackFile: 'webpack.config.babel.js',
  libDir: 'lib',
  distDir: 'dist',
  clientBundle: 'dist/client-bundle.js?(.map)',
  allSrcTests: 'test/**/*.js',
  allLibTests: 'lib/test/**/*.js',
  extrasSrc: 'src/client/extras/**',
};

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  // .pipe(eslint.failAfterError())
  .pipe(flow({ abort: true })),
);

gulp.task('clean', () => del([
  paths.libDir,
  paths.clientBundle,
]));

gulp.task('build', ['lint', 'clean'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir)),
);

gulp.task('build-tests', ['build'], () =>
  gulp.src(paths.allSrcTests)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir)),
);

gulp.task('test', ['build-tests'], () =>
  gulp.src(paths.allLibTests)
    .pipe(mocha()),
);

gulp.task('extras', () =>
  gulp.src(paths.extrasSrc)
  .pipe(gulp.dest(paths.distDir)),
);

gulp.task('html', ['extras'], () =>
  gulp.src(paths.srcHtml)
  .pipe(flatten())
  .pipe(gulp.dest(paths.distDir)),
);

gulp.task('sw', () =>
  gulp.src(paths.swEntryPoint)
    .pipe(webpack(webpackConfigSw))
    .pipe(gulp.dest(paths.distDir))
    .pipe(server.stream({ once: true })),
);

gulp.task('main', ['test', 'html', 'sw'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir))
    .pipe(server.stream({ once: true })),
);

gulp.task('main-watch', ['main'], server.reload);
gulp.task('html-watch', ['html'], server.reload);

gulp.task('watch', ['main'], () => {
  server.init({
    server: paths.distDir,
    // https: true,
  });
  gulp.watch(paths.allSrcJs, ['main-watch']);
  gulp.watch(paths.srcHtml, ['html-watch']);
});

gulp.task('default', ['watch', 'main']);
