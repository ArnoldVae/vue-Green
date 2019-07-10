import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home/module.ts'
import leadManagement from '@/views/leadManagement/module.ts'

/* Layout */
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router);

export const asyncRouterMap = [
  {
    path: '/',
    component: Layout,
    children: [
      //重定向路由必须有，配合多标签刷新当前路由使用
      {
        path: '/redirect/:path*',
        hidden: true,
        meta: {},
        component: () => import('@/views/layout/redirect/index')
      },
      ...home,
      ...leadManagement
    ]
  }
]

export default new Router({ base: process.env.BASE_URL, routes: asyncRouterMap });
