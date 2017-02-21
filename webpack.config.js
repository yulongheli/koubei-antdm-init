const pxtorem = require('postcss-pxtorem');
const svgDirs = ['./src/assets/svg'];

module.exports = webpackConfig => {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    style: true,  // if true, use less
    libraryName: 'antd-mobile',
  }]);
  /* eslint no-param-reassign:0 */
  webpackConfig.module.loaders = webpackConfig.module.loaders.filter(
    loader => loader.test.toString().indexOf('.svg') === -1
  );
  webpackConfig.module.loaders.push({
    test: /\.svg$/,
    loader: require.resolve('svg-sprite-loader'),
    include: svgDirs,
  });
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }));
  return webpackConfig;
};
