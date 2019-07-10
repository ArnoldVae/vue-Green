export default [
  {
    path: "/product",
    name:"product",
    meta : {
      title: '接口调用模板',
      icon: 'el-icon-menu',
    },
    component: () => import('./product.vue')
  }
];
