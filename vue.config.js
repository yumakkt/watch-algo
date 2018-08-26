// vue-cliの設定を行う。
// vue.config.js
module.exports = {
  // options...
  // cssの追加設定
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/scss/app.scss";`
      }
    }
  }
};
