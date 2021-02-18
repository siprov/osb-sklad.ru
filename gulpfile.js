let project_folder = 'C:/myProject/osb-project';
let src_folder = "C:/myProject/osb-project";

let path = {
	build: {
		// css: project_folder + "/css/",
		// img: project_folder + "/img/",
		// pic: project_folder + "/pic/",
		// pics: project_folder + "/pics/",
		js: project_folder + "/js/"
	},
	src: {
		// css: src_folder + "/css/pb.css",
		// img: src_folder + "/img/**/*.{jpg,jpeg,png,webp}",
		// pic: src_folder + "/pic/**/*.{jpg,jpeg,png,webp}",
		// pics: "/home/mottex_ru/www/pics/**/*.{jpg,jpeg,png,webp}",
		js: src_folder + "/script/**/*.js",
		lib: src_folder + "/libs/"
	},
	watch: {
		// css: src_folder + "/css/pb.css",
		// img: src_folder + "/img/**/*.{jpg,jpeg,png,webp}",
		// pic: src_folder + "/pic/**/*.{jpg,jpeg,png,webp}",
		// pics: project_folder + "/pics/**/*.{jpg,jpeg,png,webp}",
		js: src_folder + "/script/**/*.js"
	},
	clean:  project_folder, 
};

let {src, dest,} = require ('gulp'),
	gulp = require('gulp'),
	del = require('del'),
	// cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat');
	// prefixer = require('gulp-autoprefixer'),
	// imagemin = require('gulp-imagemin');
// let group_media = require('gulp-group-css-media-queries');
// const babel = require('gulp-babel');

function watchFiles(params) {
	// gulp.watch([path.watch.css], css)
	gulp.watch(
		path.watch.js, js)
}
function clean () {
	return del(path.build.js);
}

// function css(){
// 	return src(path.src.css)
// 		.pipe(group_media(''))
// 		.pipe(prefixer({
// 			overrideBrowserslist: ["last 5 versions"],
// 			cascade: true
// 		}))
// 		.pipe(concat('pb2.css'))
// 		.pipe(dest(path.build.css))
// }

function js(){
	return src([
		// path.src.lib + 'jquery-3.5.1.min.js',
		// path.src.lib + 'bootstrap.bundle.min.js',
		// path.src.lib + 'parallax.min.js',
		// path.src.lib + 'slick.min.js ',
		// path.src.lib + 'swiper-bundle.min.js',
		// path.src.lib + 'swiper-bundle.esm.browser.min.js',
		path.src.js
	])
	.pipe(concat('main.js'))
	.pipe(dest(path.build.js))
}

// function pic () {
// 	return src(path.src.pic)
// 		.pipe(imagemin({
// 			progressive: true,
// 			interlaced: true,
// 			optimizationlevel: 4
// 		}))
// 		.pipe(dest(path.build.pic))
// }

// function pics () {
// 	return src(path.src.pics)
// 		.pipe(imagemin({
// 			progressive: true,
// 			interlaced: true,
// 			optimizationlevel: 4
// 		}))
// 		.pipe(dest(path.build.pics))
// }


// function img () {
// 	return src(path.src.img)
// 		.pipe(imagemin({
// 			progressive: true,
// 			interlaced: true,
// 			optimizationlevel: 3
// 		}))
// 		.pipe(dest(path.build.img))
// }

// gulp.task('imgConvert', function() {
// 	return src(path.src.pics)
// 		.pipe(imagemin({
// 			progressive: true,
// 			interlaced: true,
// 			optimizationlevel: 6
// 		}))
// 		.pipe(dest(path.build.pics))

// })

let build = gulp.series( js);
let watch = gulp.parallel(clean, build, watchFiles);
// exports.css = css;
exports.js = js;
// exports.pic = pic;
// exports.pics = pics;
// exports.img = img;
exports.watch = watch;
exports.default = watch;