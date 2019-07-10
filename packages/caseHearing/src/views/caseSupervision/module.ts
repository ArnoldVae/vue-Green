export default[
  {
    path : "/caseSupervision",
    name : "caseSupervision",
    parent : "一级菜单3",
    meta : {
      hidden: true,
      title: '案件监督',
      icon: "el-icon-menu"
    },
    component : () => import ('./caseSupervision.vue')
  }
];
