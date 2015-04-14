var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var traceur = require('gulp-traceur');
var ghPages = require('gulp-gh-pages');

var PATHS = {
  src: {
    js: 'src/**/*.js',
    other: 'src/**/*.{html,css,png}'
  },
  lib: [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.src.js',
    'node_modules/systemjs/lib/extension-cjs.js',
    'node_modules/systemjs/lib/extension-register.js',
    'node_modules/angular2/node_modules/zone.js/zone.js',
    'node_modules/angular2/node_modules/zone.js/long-stack-trace-zone.js',
    'node_modules/angular2/node_modules/rx/dist/rx.all.js',
    'node_modules/axios/dist/axios.js',
    'node_modules/axios/dist/axios.map',
    'node_modules/moment/moment.js'
  ]
};

gulp.task('clean', function(done) {
  del(['dist'], done);
});

gulp.task('js', function() {
  return gulp.src(PATHS.src.js)
    .pipe(rename({extname: ''})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
    .pipe(plumber())
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true
    }))
    .pipe(rename({extname: '.js'})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
    .pipe(gulp.dest('dist'));
});

gulp.task('other', function() {
  return gulp.src(PATHS.src.other)
    .pipe(gulp.dest('dist'));
});

gulp.task('libs', ['angular2'], function() {
  return gulp.src(PATHS.lib)
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('angular2', function() {

  //transpile & concat
  return gulp.src([
      'node_modules/angular2/es6/prod/*.es6',
      'node_modules/angular2/es6/prod/src/**/*.es6'],
    {base: 'node_modules/angular2/es6/prod'})
    .pipe(rename(function(path) {
      path.dirname = 'angular2/' + path.dirname;
      path.extname = '';
    }))
    .pipe(traceur({modules: 'instantiate', moduleName: true}))
    .pipe(concat('angular2.js'))
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('play', ['default'], function() {

  var http = require('http');
  var connect = require('connect');
  var serveStatic = require('serve-static');
  var open = require('open');

  var port = 9000, app;

  gulp.watch(PATHS.src.other, ['other']);
  gulp.watch(PATHS.src.js, ['js']);

  app = connect().use(serveStatic(__dirname + '/dist'));  // serve everything that is static
  http.createServer(app).listen(port, function() {
    console.log('http://localhost:' + port);
  });
});


gulp.task('default', ['js', 'other', 'libs']);
gulp.task('build', ['js', 'other', 'libs']);
gulp.task('gh-pages', ['build', 'deploy']);
