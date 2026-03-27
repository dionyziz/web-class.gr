// Bootstrap scss source
const bootstrapSass = { in: './node_modules/bootstrap-sass/' };

// Bootstrap fonts source
const fonts = { in: [bootstrapSass.in + 'assets/fonts/**/*'], out: 'public/fonts/' };

const scss = {
  in: 'scss/**/*.scss',
  out: 'public/css/',
  watch: 'scss/**/*',
  sassOpts: {
    outputStyle: 'compressed',
    precision: 3,
    errLogToConsole: true,
    includePaths: [bootstrapSass.in + 'assets/stylesheets'],
  },
};
/***********************************************************************************/

// Load Requirements
const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer').default;
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const watchify = require('watchify');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

// copy bootstrap required fonts to public
gulp.task('fonts', function CopyFonts() {
  return gulp.src(fonts.in).pipe(gulp.dest(fonts.out));
});

// compile scss
gulp.task('compileSass', function CompileSass() {
  return gulp
    .src(scss.in)
    .pipe(sass(scss.sassOpts).on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24',
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6',
        ],
        cascade: false,
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest(scss.out));
});

gulp.task('scss', gulp.series('fonts', 'compileSass'));

gulp.task(
  'scss:watch',
  gulp.series('scss', function WatchScss() {
    gulp.watch(scss.watch, gulp.series('scss'));
  })
);

gulp.task('pug:views', function BuildHtml() {
  return gulp.src('etc/views/index.pug').pipe(pug()).pipe(gulp.dest('etc/views'));
});

function ReactBundler(watch = false) {
  let buildNumber = 0;

  const bundle = browserify({
    extensions: ['.jsx', '.js'],
    debug: false,
    cache: {},
    packageCache: {},
    fullPaths: false,
    entries: './react/index.js',
  });

  function build() {
    return bundle
      .transform(
        babelify.configure({
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-class-properties'],
          ignore: /(bower_components)|(node_modules)/,
        })
      )
      .bundle()
      .on('error', (err) => console.log('Error : ' + err.message))
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./public/react'));
  }

  if (watch) {
    bundle.plugin(watchify);
    bundle.on('update', build);
    bundle.on('log', (msg) => console.log('Build ' + buildNumber++ + ' :' + msg));
  }

  return build();
}

gulp.task('react:watch', () => ReactBundler(true));

gulp.task('react', () => ReactBundler());
