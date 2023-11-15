const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/mock.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mock.js',
    library: 'Mock',
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true,
  },
};
