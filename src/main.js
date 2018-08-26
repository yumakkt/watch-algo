// こいつがルートコンポーネントのApp.vueを呼ぶ

import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// スタイルはApp.vueで入れるのでincludeしない。
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
