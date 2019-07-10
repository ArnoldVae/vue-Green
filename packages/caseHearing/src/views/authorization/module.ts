export default[
  {
    path : "/sameLevel",
    name : "sameLevel",
    parent : "二级菜单",
    meta : {
      hidden: false,
      title: '本级案件授权',
      icon: "el-icon-menu",
        parentTitle: "案件授权管理", //一级-菜单标题
        parentCode: 3, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
        parentIcon: "el-icon-menu", //一级-菜单图标
        isCollapse: true
    },
    component : () => import ('./sameLevel.vue')
  },
    {
        path : "/subordinate",
        name : "subordinate",
        parent : "二级菜单",
        meta : {
            hidden: false,
            title: '下级案件授权',
            icon: "el-icon-menu",
            parentTitle: "案件授权管理", //一级-菜单标题
            parentCode: 3, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./subordinate.vue')
    },

];
