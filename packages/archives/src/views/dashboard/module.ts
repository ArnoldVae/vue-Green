export default[
  {
    path : "/dashboard",
    name : "dashboard",
    parent : "一级菜单3",
    meta : {
      hidden: true,
      title: '工作台',
      icon: "el-icon-menu"
    },
    component : () => import ('./index.vue')
  }
];
