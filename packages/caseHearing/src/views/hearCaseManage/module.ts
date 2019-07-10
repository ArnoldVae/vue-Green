export default[
    {
        path : "/hearCaseManage/caseAccept/caseAcceptMain",
        name : "caseAcceptMain",
        meta : {
            hidden: false, //二级-是否显示此菜单 默认false
            title: '初审情况', //二级-菜单标题
            icon: 'el-icon-menu', //二级-菜单图标 className
            parentTitle: "审理案件管理", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./caseAccept/caseAcceptMain.vue')
    },
    {
    path : "/modalityAuditM",
    name : "modalityAuditM",
    meta : {
      hidden: false, //二级-是否显示此菜单 默认false
      title: '初步审核', //二级-菜单标题
      icon: 'el-icon-menu', //二级-菜单图标 className
      parentTitle: "审理案件管理", //一级-菜单标题
      parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu" //一级-菜单图标
    },
    component : () => import ('./firstAudit/firstAuditMain.vue')//采用公用的
  }, {
    path : "/hearCaseManage/auditDeliberation/auditDeliberationMain",
    name : "auditDeliberationMain",
    meta : {
      title: '案件审理',
      icon: 'el-icon-menu',
      parentTitle: "审理案件管理",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu"
    },
    component : () => import ('./auditDeliberation/auditDeliberationMain.vue')//由于业务逻辑的不同 审核审议模块采用私有的,但是  组件采用公用的
  }, {
    path : "/caseCarry",
    name : "caseCarry",
    meta : {
      title: '案件执行',
      icon: 'el-icon-menu',
      parentTitle: "审理案件管理",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu"
    },
    component : () => import ('./caseCarry/caseCarryMain.vue')//由于业务逻辑的不同 审核审议模块采用私有的,但是  组件采用公用的
  },
];
