const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')
// import path from 'path'
// import merge from 'webpack-merge'
// import baseConfig from './webpack.base.js'

const config = {
  //bundle file ini untuk node, bukan untuk browser
  target: 'node',
  //root file dari Server
  entry: './src/index.js',
  //folder untuk simpan hasil render
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
