export default[
    {
        path : "/checkRegist",
        name : "checkRegist",
        meta : {
            title: '档案调阅',
            icon: 'el-icon-menu',
            parentTitle: "归档调阅",
            parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu"
        },
        component : () => import ('./checkRegist.vue')
    },
    {
      path : "/archiveRead",
      name : "archiveRead",
      meta : {
        title: '档案归还',
        icon: 'el-icon-menu',
        parentTitle: "归档调阅",
        parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
        parentIcon: "el-icon-menu",
        isCollapse: false
      },
      component : () => import ('./archiveRead.vue')
    },
    {
    path : "/deliver",
    name : "deliver",
    meta : {
      title: '调阅记录',
      icon: 'el-icon-menu',
      parentTitle: "归档调阅",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu",
      isCollapse: false
    },
    component : () => import ('./deliverSearch.vue')
  }
];
