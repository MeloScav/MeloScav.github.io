import {
    watch,
    task,
    src,
    dest,
    series
} from "gulp";

import prettyHtml from "gulp-pretty-html";

import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import babel from "gulp-babel";

import plumber from "gulp-plumber";
const php2html = require("gulp-php2html");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));

browserSync.init({
    open: false,
    port: 1234,
    notify: false,
    server: {
        baseDir: "dist",
    },
});

task("compile-php", (done) => {
    src(["./src/**/*.php", "!./src/**/_*.php"])
        .pipe(php2html())
        .pipe(dest("./dist/"));
    done();
});

task("pretty-html", (done) => {
    src("./dist/**/*.html").pipe(prettyHtml()).pipe(dest("./dist/"));
    done();
});

task("copy-static-files", (done) => {
    src(
            [
                "./src/!(scss|css|js)**/*",
                "./src/!(scss|css|js)**/**",
                "./src/!(scss|css|js)**",
                "!./src/views",
                "!./src/**/*.php",
            ], {
                base: "./src",
            }
        )
        .pipe(plumber())
        .pipe(dest("./dist/"));
    done();
});

task("compile-sass", (done) => {
    src(["./src/scss/**/*.scss", "./src/sass/**/*.scss", "!./src/scss/**/_*"])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: "compressed",
                precision: 10,
                includePaths: ["."],
                onError: console.error.bind(console, "Sass error:"),
            })
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(dest("./dist/css/"))
        .pipe(browserSync.stream());
    done();
});

task("minify-js", (done) => {
    src("./src/**/*.js", {
            base: "./src/"
        })
        .pipe(babel())
        .pipe(uglify())
        .pipe(dest("./dist/"));
    done();
});

task("reload-browser", (done) => {
    browserSync.reload();
    done();
});

const buildSeries = series(
    "copy-static-files",
    "compile-php",
    "pretty-html",
    "compile-sass",
    "minify-js"
);

exports.default = (done) => {
    watch("./src/**/*", task("copy-static-files"));
    watch("./src/**/*.php", series("compile-php", "pretty-html"));
    watch("./src/scss/**/*", task("compile-sass"));
    watch("./src/**/*.js", task("minify-js"));
    watch(["./src/**/*", "!./src/**/*.s(a|c)ss"], task("reload-browser"));

    done();
};

exports.build = buildSeries;