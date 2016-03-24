<<<<<<< HEAD
var webpack = require('webpack');
=======
var webpack = require('webpack')
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1
var path = require('path');

module.exports = {
  entry: './client/entry.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // Telling webpack to use files that match this pattern
        loader: 'babel', // Uses the module `babel-loader`
        exclude: /node_modules/, // Don't transpile modules in the `node_modules/` directory
        include: __dirname, // Include all other files
        query: {
<<<<<<< HEAD
          presets: ['es2015', 'react']
=======
          presets: [ 'es2015', 'react' ]
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1
        }
      }
    ]
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1
