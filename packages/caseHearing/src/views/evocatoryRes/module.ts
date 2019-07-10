export default[
  {
    path : "/evocatoryRes",
    name : "evocatoryRes",
    meta : {
      title: '手动登记', //二级标题显示的名称
      icon: 'el-icon-menu',
      parentTitle: "审理案件登记",//一级标题显示的名称  这个以中文名称进行的判断 
      parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu",
      isCollapse: false
    },
    component : () => import ('./evocatoryRes.vue')
  },
    {
        path : "/caseDistributed",
        name : "caseDistributed",
        meta : {
            hidden: true,
            title: '案件列表',
            icon: 'el-icon-menu',
            parentTitle: "审理案件登记",
            parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu"
        },
        component : () => import ('./manualRegister/modal/caseDistributed.vue')
    },
    {
        path : "/departmentTo",
        name : "departmentTo",
        meta : {
            hidden: false,
            title: '其他部门转入',
            icon: 'el-icon-menu',
            parentTitle: "审理案件登记",
            parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu"
        },
        component : () => import ('./departmentTo/departmentTo.vue')
    },
      //两个不同的登记 暂时都保留  下面这个是最新的
   {
    path : "/manualRegister",
    name : "manualRegister",
    meta : {
      title: '手动登记', //二级标题显示的名称
      icon: 'el-icon-menu',
      parentTitle: "审理案件登记",//一级标题显示的名称  这个以中文名称进行的判断 
      parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu",
      isCollapse: false
    },
    component : () => import ('./manualRegister/manualRegister.vue')
  },
  {
    path : "/departmentTo_1",
    name : "departmentTo_1",
    meta : {
      title: '手动登记', //二级标题显示的名称
      icon: 'el-icon-menu',
      parentTitle: "审理案件登记",//一级标题显示的名称  这个以中文名称进行的判断 
      parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu",
      isCollapse: false 
    },
    component : () => import ('./departmentTo_1/manualRegisterNew.vue')
  }


  
];
