const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/temperature-data-app/'
    : '/'
});
