const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',
  output: {
    // Output bundle file name and path
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    // Configure the development server
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        // Apply Babel loader for JS files
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            // Babel presets for ES and React
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};