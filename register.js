const path = require('path')
require("@babel/register")({
  cwd: __dirname,
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
  ],
  // ignore: ['node_modules','**/lib']
})
require('./index.js')