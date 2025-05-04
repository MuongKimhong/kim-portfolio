const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/kim-portfolio/",
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
