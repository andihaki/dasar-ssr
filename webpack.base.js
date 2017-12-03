module.exports = {
  //perintahkan webpack untuk jalankan babel
  module: {
    rules: [
      {
         test: /\.js?$/, //regex, jalankan babel hanya pada js
         loader: 'babel-loader', //package untuk transpile gaya koding javascript
         exclude: /node_modules/, //regex, jalankan babel kecuali untuk direktori ini
         options: {
           presets: [
             'react',
             'stage-0', //untuk async
             ['env', { targets: { browsers: ['last 2 versions'] }}] //jalankan babel pada 2 browser populer
           ]
         }
      }
    ]
  }
}
