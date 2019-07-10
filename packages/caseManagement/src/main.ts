import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icon/iconfont.css";
import '@/styles/index.scss' // global css

import {getQueryString} from './utils/index'

router.beforeEach((to, from, next) => {
  next();
});

// 判断是否来自是iframe展示 $changeRouter用来控制父级路由进行切换
Vue.prototype.$isIframe = getQueryString('isIframe')
Vue.prototype.$changeRouter = function(to){
  if(Vue.prototype.$isIframe){
    return window.parent.changeRouter(to)
  }else{
    return router.push(to)
  }
}

Vue.config.productionTip = false;
Vue.use(ElementUI, {});
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
