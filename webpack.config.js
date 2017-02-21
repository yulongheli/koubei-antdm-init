const pxtorem = require('postcss-pxtorem');
const glob = require('glob');

const svgDirs = ['./src/assets/svg']; // 如果需要本地部署图标，需要在此加入本地图标路径，本地部署方式见以下文档
// 把`antd-mobile/lib`目录下的 svg 文件加入进来，给 svg-sprite-loader 插件处理
// 注意check antd-mobile 在你本机node_modules下的路径，因为cnpm之类会改变node_modules的存放方式
// windows参照这里处理 https://github.com/ant-design/ant-design-mobile/issues/840#issuecomment-281248538
glob.sync('node_modules/**/*antd-mobile/lib', { dot: true }).forEach(p => {
  svgDirs.push(new RegExp(p));
});

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
