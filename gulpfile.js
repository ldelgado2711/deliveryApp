const { src, dest, watch, series } = require("gulp");

// CSS y SASS
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("cssnano");

// Javascript
const terser = require("gulp-terser-js");

// Imagenes
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(done) {
    src("src/scss/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write("."))
        .pipe(dest("build/css"));

    done();
}

function imagenes() {
    return src("src/img/**/*")
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest("build/img"));
}

function versionWebp() {
    const opciones = {
        quality: 50,
    };
    return src("src/img/**/*.{png,jpg}")
        .pipe(webp(opciones))
        .pipe(dest("build/img"));
}

function versionAvif() {
    const opciones = {
        quality: 50,
    };
    return src("src/img/**/*.{png,jpg}")
        .pipe(avif(opciones))
        .pipe(dest("build/img"));
}

function javascript() {
    return src("src/js/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("build/js"));
}

function jFJson() {
    return src("src/js/**/*.json").pipe(dest("build/js"));
}

function dev() {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);
    watch("src/js/**/*.json", jFJson);
    watch("src/img/**/*", imagenes);
}

exports.css = css;
exports.js = javascript;
exports.json = jFJson;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;

exports.default = series(
    imagenes,
    versionWebp,
    versionAvif,
    css,
    javascript,
    jFJson,
    dev
);