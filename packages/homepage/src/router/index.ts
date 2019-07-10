import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../views/home/index.vue';
import cognizance from '../views/cognizance/index.vue';
import petitionLetter from '../views/petitionLetter/index.vue';
import patrol from '../views/patrol/index.vue';
import menu from '../views/index.vue';

// demo系统
import demo from '@/views/demo/module.ts'

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    ...demo,
    {
      path: '/',
      name: 'menu',
      component: menu,
    },
    {
      path: '/home',
      name: 'home',
      component: homePage,
    },
    {
      path: '/cognizance/:type',
      name: 'cognizance',
      component: cognizance,
    },
    {
      path: '/petitionLetter/:type',
      name: 'petitionLetter',
      component: petitionLetter,
    },
    {
      path: '/patrol/:type',
      name: 'patrol',
      component: patrol,
    }
  ],
});
