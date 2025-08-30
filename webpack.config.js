const path = require('path');

module.exports = {
  // Point d'entrée de l'application
  entry: './src/index.js',
  output: {
    // Nom et chemin du fichier de sortie
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // Adresse URL publique pour les fichiers de sortie
  },
  devServer: {
    // Configure le serveur de développement pour servir du contenu à partir du répertoire 'dist'
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // Active la compression gzip pour une livraison des ressources plus rapide
    port: 3000 // Numéro de port pour le serveur de développement
  },
  module: {
    rules: [
      {
        // Appliquer le chargeur Babel pour les fichiers JavaScript
        test: \.js$, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            // Préréglages Babel pour JS moderne et React
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};