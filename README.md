# dependency

## install babel

```
npm install --save-dev @babel/core babel-loader babel-plugin-transform-react-jsx
```

## install webpack

```
npm install --save-dev webpack webpack-cli webpack-dev-server
```

# sample webpack.config.js

```
var path = require('path')

module.exports = {
  entry: './src/index.js',
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
```
