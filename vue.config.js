const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src"));
    config.resolve.alias.set(
      "@components",
      path.resolve(__dirname, "src", "components")
    );
  },
  transpileDependencies: ["vuetify"],
});
