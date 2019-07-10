import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import  "./assets/icon/iconfont.css";
import '@/styles/index.scss' // global css
// import  "./views/js/modernizr.custom.js";

Vue.config.productionTip = false;
Vue.use(ElementUI, {});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
