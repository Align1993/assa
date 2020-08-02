import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/reset.css";
import "@/styles/index.css";
import "@/styles/flex.css";
import "animate.css";

import animated from "animate.css"; // npm install animate.css --save安装，再引入

Vue.use(animated);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
