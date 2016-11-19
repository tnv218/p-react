module.exports = {
  entry: './client/src/app.js',
  output: {
    filename: 'bundle.js',
    path: './client/public/js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
}
