import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icon/iconfont.css";
import '@/styles/index.scss' // global css
import Print from 'vue-print-nb'

import {getQueryString} from './utils/index'
import {rule} from './utils/validate'

// 全局注册过滤器
import * as filters from '@/filters' // global filters
console.log(filters)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
import * as directives from '@/directive'
console.log(Object.keys(directives.default))
Object.keys(directives.default).forEach(key => {
  Vue.directive(key, directives.default[key])
})
import *as component from '@/components'
console.log(component)
Object.keys(component.default).forEach(key => {
  Vue.component(key, component.default[key])
})

// 全局注册校验规则模板
Vue.prototype.$rule = rule

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
Vue.use(ElementUI,Print, {});
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
