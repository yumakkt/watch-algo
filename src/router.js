// ページの遷移はこのファイルで定義する。
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

// アクセスされた時に持ってくるだけでずっとAppVueを見ていることには変わりない
// headerやfooterはAppVueで定義することが可能

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/", // 呼ばれるURL
      name: "home",
      component: Home // 持ってくるコンポーネント
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/sort/:implement",
      name: "sort",
      component: () => import("./views/algos/Sort.vue")
    },
    {
      path: "/search/:implement",
      name: "search",
      component: () => import("./views/algos/Search.vue")
    },
    {
      path: "/ds/:implement",
      component: () => import("./views/algos/DataStructure.vue")
    }
  ]
});
