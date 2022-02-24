const { mergeSassVariables } = require('@vuetify/cli-plugin-utils');

module.exports = {
  configureWebpack: {},
  chainWebpack: (config) => {
    const modules = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    modules.forEach((match) => {
      config.module
        .rule('scss')
        .oneOf(match)
        .use('sass-loader')
        .tap(opt => mergeSassVariables(opt, "'@/scss/variables.scss';"))

    });
  },
  transpileDependencies: ['vuetify'],
};
