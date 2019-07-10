export default[
  {
    path : "/evocatoryRes",
    name : "evocatoryRes",
    meta : {
      title: '移送案件登记',
      icon: 'el-icon-menu',
      parentTitle: "移送案件登记",
      parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu",
      isCollapse: false
    },
    component : () => import ('./evocatoryRes.vue')
  },
    {
        path : "/caseDistributing",
        name : "caseDistributing",
        meta : {
            title: '直查案件待分发',
            icon: 'el-icon-menu',
            parentTitle: "移送案件登记",
            parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu"
        },
        component : () => import ('./caseDistributing.vue')
    },
    {
        path : "/caseDistributed",
        name : "caseDistributed",
        meta : {
            title: '移送案件已发送',
            icon: 'el-icon-menu',
            parentTitle: "移送案件登记",
            parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu"
        },
        component : () => import ('./caseDistributed.vue')
    }

];
