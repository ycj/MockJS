const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/mock.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mock-min.js',
    library: 'Mock',
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true,
  },
};
