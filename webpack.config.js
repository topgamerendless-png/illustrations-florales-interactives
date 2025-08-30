const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',
  output: {
    // Output bundle file name and path
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // Public URL address for the output files
  },
  devServer: {
    // Configure the development server to serve content from 'dist' directory
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // Enable gzip compression for faster asset delivery
    port: 3000 // Port number for the dev server
  },
  module: {
    rules: [
      {
        // Apply Babel loader for JavaScript files
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            // Babel presets for modern JS and React
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};