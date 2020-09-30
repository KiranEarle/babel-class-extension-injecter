module.exports = function(api) {
  api.cache(false)
  const presets = ['@babel/preset-env']
  const plugins = [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    ["@babel/plugin-transform-runtime"],
    './babel-class-extension-injecter',
    // 'console',
  ]


  return {
    plugins,
    presets,
  }
}