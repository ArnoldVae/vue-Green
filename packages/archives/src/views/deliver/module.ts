export default[
  {
    path : "/deliver",
    name : "deliver",
    meta : {
      title: '调阅出库',
      icon: 'el-icon-menu',
      parentTitle: "归档调阅",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu",
      isCollapse: false
    },
    component : () => import ('./deliverSearch.vue')
  }
];
