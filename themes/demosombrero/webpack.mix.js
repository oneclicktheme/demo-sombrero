const mix = require('laravel-mix');
const path = require('path');

mix.setPublicPath(path.normalize('assets'));
mix.setResourceRoot(path.normalize('src'));
mix.setResourceRoot('./../');

if (mix.inProduction()) {
  mix.options({
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  });
} else {
  mix.webpackConfig({ devtool: 'inline-source-map' }).sourceMaps();
}

function resolve(dir) {
  return path.join(__dirname, dir);
}

mix.webpackConfig({
  resolve: {
    alias: {
      '@': resolve('src/js'),
    },
  },
  
  output: {
    publicPath: path.normalize('/'),
    chunkFilename: '[name].js',
  },
  
  watchOptions: {
    ignored: /node_modules/,
  },
});

mix.combine([
  'src/sass/vendor/bootstrap.min.css',
  'src/sass/vendor/animate.css',
  'src/sass/vendor/icomoon.css',
  'src/sass/vendor/flexslider.css',
  'src/sass/vendor/owl.carousel.min.css',
  'src/sass/vendor/owl.theme.default.min.css',
  'src/sass/vendor/photoswipe.css',
  'src/sass/vendor/jquery.timepicker.css',
  'src/sass/vendor/bootstrap-datepicker.css',
  'src/sass/vendor/default-skin.css',
  'fonts/icomoon/style.css',
], 'assets/css/vendor.css').version();

mix.combine([
  'src/js/vendor/jquery.min.js',
  'src/js/vendor/jquery.easing.1.3.js',
  'src/js/vendor/jquery.stellar.min.js',
  'src/js/vendor/jquery.flexslider-min.js',
  'src/js/vendor/imagesloaded.pkgd.min.js',
  'src/js/vendor/isotope.pkgd.min.js',
  'src/js/vendor/jquery.timepicker.min.js',
  'src/js/vendor/bootstrap-datepicker.js',
  'src/js/vendor/photoswipe.min.js',
  'src/js/vendor/photoswipe-ui-default.min.js',
  'src/js/vendor/owl.carousel.min.js',
  'src/js/vendor/bootstrap.min.js',
  'src/js/vendor/jquery.waypoints.min.js'
], 'assets/js/vendor.js').version();

mix.js('src/js/app.js', 'js/app.js').version();

mix.sass('src/sass/app.scss', 'css/app.css').version();


