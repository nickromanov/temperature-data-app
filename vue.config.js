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
    ? '/tmp-app/'
    : '/',
  outputDir: "dist",
  assetsDir: "static",//Set the directory where the static resources (js, css, img, fonts) generated by the package will be placed.
  indexPath: 'index.html'
});
