// webpack.config.js

const path = require('path');

module.exports = {
  entry: './frontend/main.js', // Stelle sicher, dass dies auf deine Einstiegsdatei zeigt
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // ...weitere Konfigurationsoptionen
};
