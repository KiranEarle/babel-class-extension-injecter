module.exports = function(api) {
  api.cache(true)
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
  }
}