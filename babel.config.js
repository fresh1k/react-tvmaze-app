// module.exports = function (api) {
//   api.cache.forever();
//   return {
//     plugins: ['macros'],
//   }
// }

module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      ['@babel/plugin-proposal-class-properties', {loose: true}],
      ['@babel/plugin-transform-runtime', { corejs: 3 }],
      'macros',
    ]
  }
}