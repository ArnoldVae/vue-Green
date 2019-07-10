export default[
    {
      path : "/archiveRead",
      name : "archiveRead",
      meta : {
        title: '调阅归还',
        icon: 'el-icon-menu',
        parentTitle: "归档调阅",
        parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
        parentIcon: "el-icon-menu",
        isCollapse: false
      },
      component : () => import ('./archiveRead.vue')
    }
  
  ];
  