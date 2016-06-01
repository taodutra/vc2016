var dest = './public';
var src = './src';

module.exports = {
  listenables: [dest + '/css/*.css', dest + '/js/*.js'],
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**',
      // Exclude Map files
      '!' + dest + '/**.map'
    ]
  },
  sass: {
    src: src + '/sass/*.scss',
    dest: dest + '/css'
  },
  images: {
    src: src + '/img/**',
    dest: dest + '/img'
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: ['.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/app.js',
      dest: dest + '/js',
      outputName: 'app.js'
    }, {
      entries: src + '/js/head.js',
      dest: dest + '/js',
      outputName: 'head.js'
    }/*, 
    {
      entries: src + '/js/admin.js',
      dest: dest + '/js',
      outputName: 'admin.js'
    }*/
    ]
  }
};
