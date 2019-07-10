export default[
  {
    path : "/home",
    name : "home",
    meta : {
      title: '主页',
      icon: "el-icon-menu",
      hidden: true,
      fixed: true
    },
    component : () => import ('./index.vue')
  }
];
