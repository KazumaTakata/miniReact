const path = require('path')

module.exports = {
  mode: 'development',
  // entry: "./src/index.js",
  // entry: './src/test/HelloWorld/index.js',
  // entry: './src/test/Prop/index.js',
  entry: './src/test/state/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                'transform-react-jsx',
                {
                  pragma: 'this.h'
                }
              ]
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    inline: true
  }
}
