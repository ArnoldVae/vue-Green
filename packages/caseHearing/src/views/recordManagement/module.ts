export default[
  {
    path : "/recordManagement",
    name : "recordManagement",
    meta : {
      title: '备案案件',
      icon: 'el-icon-menu',
      parentTitle: "备案案件管理",
      parentCode: 7, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu",
      isCollapse: true
    },
    component : () => import ('./recordManagement.vue')
  }
];
