var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = [
  "faker",
  "lodash",
  "react",
  "react-dom",
  "react-input-range",
  "react-redux",
  "react-router",
  "redux",
  "redux-form",
  "redux-thunk" 
  // from package.json
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS // produce vendor.js
    // get 2 sepreate files but bundle included vendor code
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // duplicate the pull out to vendor
    })
  ]
};
