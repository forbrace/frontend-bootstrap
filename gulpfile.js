var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    bower = require('gulp-bower'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');

var files = {
    lib: [
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-bootstrap/ui-bootstrap.js'
    ],
    app: [
        'client/scripts/app.js',
        'client/scripts/components/**/*.js',
        'client/scripts/services/**/*.js'
    ],
    index: [
        'client/index.html'
    ],
    templates: [
        'client/scripts/**/*.html'
    ],
    images: [
        'client/images/**'
    ]
};

gulp.task('connect', function() {
    connect.server({
        root: ['public'],
        livereload: true
    });
});

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest('bower_components'))
});

gulp.task('sass', function () {
    return sass('client/stylesheets/app.scss', { sourcemap: true })
        .on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/css'))
        .pipe(livereload());
});

gulp.task('js:lib', function () {
    return gulp
        .src(files.lib)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('public/assets/js'))
        .pipe(livereload());
});

gulp.task('js:app', function () {
    return gulp
        .on('error', console.log)
        .src(files.app)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/assets/js'))
        .pipe(livereload());
});

gulp.task('index', function () {
    return gulp
        .src(files.index)
        .pipe(gulp.dest('public'))
        .pipe(livereload());
});

gulp.task('templates', function () {
    return gulp
        .src(files.templates)
        .pipe(gulp.dest('public/assets/js'))
        .pipe(livereload());
});

gulp.task('images', function () {
    return gulp
        .src(files.images)
        .pipe(gulp.dest('public/assets/images'))
        .pipe(livereload());
});


gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('client/stylesheets/*.scss', ['sass']);
    gulp.watch('client/stylesheets/**/*.scss', ['sass']);
    gulp.watch('client/scripts/**/*.js', ['js:app']);
    gulp.watch('client/scripts/**/*.html', ['templates']);
    gulp.watch('client/index.html', ['index']);
    gulp.watch('.start', function() {
        livereload.reload();
    });
});

gulp.task('clean', function(cb) {
    del.sync(['public'], cb);
});

gulp.task('compiles', [
    'clean',
    'sass',
    'index',
    'templates',
    'js:lib',
    'js:app',
    'images'
]);

gulp.task('default', [
    'connect',
    'compiles',
    'watch'
]);
