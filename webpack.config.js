const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const modeConfig = env => require(`./config/webpack.${env}`)(env)

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
  return webpackMerge(
    {
      mode,
      entry: './src/index.tsx',
      output: {
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {test: /jpe?g$/, use: ['url-loader']},
          {test: /tsx?$/, use: 'ts-loader'},
        ],
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
  )
}
