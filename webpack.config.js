var path = require('path')

module.exports = {
  entry: './test/step9/index.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
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
                  pragma: 'this.createElement'
                }
              ]
            ]
          }
        }
      }
    ]
  },
  devtool: 'eval-source-map'
}
