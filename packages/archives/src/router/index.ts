
import Vue from 'vue';
import Router from 'vue-router';
import dashboard from '@/views/dashboard/module.ts'
//import home from '@/views/home/module.ts'
//import archiveRead from '@/views/archiveRead/module.ts'
//import commonPopup from '@/views/commonPopup/module.ts'
//import commonPopup from '@/views/commonPopup/router/index.ts'
//import archivesCheck from '@/views/archivesCheck/module.ts'
//import deliver from '@/views/deliver/module.ts'
import electronicFiling from '@/views/electronicFiling/module.ts'
import queryanalyze from '@/views/queryanalyze/module.ts'
import evocatoryRes from '@/views/queryanalyze/module.ts'
import archivingRead from '@/views/archivingRead/module.ts'
import archivesReading from '@/views/archivesReading/module.ts'
Vue.use(Router);

import commonPopup from '@/views/commonPopup/commonPopup.vue'
import home from '@/views/home/index.vue'

export const asyncRouterMap = [
  {
    path: '/commonPopup',
    component: commonPopup,
    children: [
      //重定向路由必须有，配合多标签刷新当前路由使用
      {
        path: '/redirect/:path*',
        hidden: true,
        meta: {},
        component: () => import ('@/views/layout/redirect/index')
      },
      ...dashboard,
    //...commonPopup,
    //...home,
    //...archivesCheck,
   /* ...evocatoryRes,*/
    ...electronicFiling,
    ...queryanalyze,
   // ...deliver,
   // ...archiveRead,
    ...archivingRead,
    ...archivesReading
    ]
  },{
  	path: '/',
    component: home
  }
]
export default new Router({
  base: process.env.BASE_URL,
  routes: asyncRouterMap
});
