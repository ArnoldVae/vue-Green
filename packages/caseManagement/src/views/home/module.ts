export default[
  {
    path : "/home",
    name : " 案件监督管理应用",
    meta : {
      title: '主页',
      icon: "el-icon-menu",
      hidden: true,
      fixed: true
    },
    component : () => import ('./index.vue')
  }
];
